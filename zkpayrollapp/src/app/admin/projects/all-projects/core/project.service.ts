import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { ProjectAdapter } from "./project.model";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import { ProjectDto } from "models/models";
import { Contract } from "src/services/contract.service";
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: "root",
})
export class ProjectService extends UnsubscribeOnDestroyAdapter {
  private trash: Set<string> = new Set([]); // trashed projects' id; set is better for unique ids
  private _projects: BehaviorSubject<object[]> = new BehaviorSubject([]);
  public readonly projects: Observable<object[]> =
    this._projects.asObservable();

  constructor(private adapter: ProjectAdapter, private contractService: Contract) {
    super();
    this.getAllProjectss();
  }

  /** CRUD METHODS */
  getAllProjectss(): void {
    this.contractService.getProjects().then(
      (data) => {
        this._projects.next(data);
      }).catch(
      (error) => {
        console.log(error.name + " " + error.message);
      }
    );
  }

  private compareProjectGravity(a: ProjectDto, b: ProjectDto): number {
    // if at least one of compared project deadlines is not null, compare deadline dates
    // (further date comes first), else compare priority (larger priority comes first)
    if (a.endDate !== null || b.endDate !== null) {
      // simply compare dates without converting to numbers
      return -(a.endDate > b.endDate) || +(a.endDate < b.endDate);
    } else {
      return 1;
    }
  }

  public getObjects(): Observable<ProjectDto[]> {
    return this.projects.pipe(
      map((data: any[]) =>
        data
          .filter(
            // do not return objects marked for delete
            (item: any) => !this.trash.has(item.id)
          )
          .map(
            // convert objects to Project instances
            (item: any) => this.adapter.adapt(item)
          )
          .sort(this.compareProjectGravity)
      )
    );
  }

  public getObjectById(id: string): Observable<ProjectDto> {
    return this.projects.pipe(
      map(
        (data: any) =>
          data
            .filter(
              // find object by id
              (item: any) => item.id === id
            )
            .map(
              // convert to Project instance
              (item: any) => this.adapter.adapt(item)
            )[0]
      )
    );
  }

  public createOject(project: any): void {
    project.id = uuid();
    this.contractService.addProject(project).then(() => {
      console.log(project);
      this.getAllProjectss();
    });
  }

  public updateObject(project: ProjectDto): void {
    this.contractService.updateProject(project).then(() => {
      this.getAllProjectss();
    });
  }

  public deleteObject(project: ProjectDto): void {
    this.contractService.deleteProject(project).then(() => {
      this.getAllProjectss();
    });
  }

  public detachObject(project: ProjectDto): void {
    // add project id to trash
    this.trash.add(project.id);
    // force emit change for projects observers
    return this._projects.next(this._projects.getValue());
  }

  public attachObject(project: ProjectDto): void {
    // remove project id from trash
    this.trash.delete(project.id);
    // force emit change for projects observers
    return this._projects.next(this._projects.getValue());
  }
}
