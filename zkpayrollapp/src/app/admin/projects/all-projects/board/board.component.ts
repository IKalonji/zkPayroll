import { Component, OnInit } from "@angular/core";
import { CdkDragDrop } from "@angular/cdk/drag-drop";

import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { ProjectService } from "../core/project.service";
import { ProjectDialogComponent } from "../project-dialog/project-dialog.component";
import { ClientDto, ProjectDto, ProjectStatus } from "models/models";
import { Contract } from "src/services/contract.service";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"],
})
export class BoardComponent implements OnInit {
  public lists: object;
  public clients: ClientDto[];

  constructor(
    private projectService: ProjectService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private contractService: Contract
  ) {
    this.lists = {};
  }

  public ngOnInit(): void {
    this.contractService.getProjects().then((projects: ProjectDto[]) => {
      // split project to status categories
      this.lists = {
        Pending: projects.filter(
          (project) => project.status === ProjectStatus.Pending
        ),
        InProgress: projects.filter(
          (project) => project.status === ProjectStatus.InProgress
        ),
        Completed: projects.filter(
          (project) => project.status === ProjectStatus.Completed
        ),
      };
    });
    this.getClients();
  }

  public unsorted(): void {
    // empty function to pass as an argument to keyvalue pipe in template
  }

  public drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer !== event.container) {
      const project = event.item.data;
      project.status = ProjectStatus[event.container.id];
      this.projectService.updateObject(project);
    }
  }

  public addProject(name: string, status: string): void {
    if (!/\S/.test(name)) {
      // do not add project if name is empty or contain white spaces only
      return;
    }
    this.projectService.createOject({
      name,
      status: ProjectStatus[status],
    });
  }

  public removeProject(project: ProjectDto): void {
    // show "deleted" info
    // const snack = this.snackBar.open("The Project has been deleted", "Undo");
    const snack = this.snackBar.open(
      "Project deleted Successfully...!!!",
      "Undo",
      {
        duration: 4000,
        verticalPosition: "bottom",
        horizontalPosition: "center",
        panelClass: "snackbar-danger",
      }
    );
    // put project to the trash
    this.projectService.detachObject(project);
    // when snack has been removed (dismissed)
    snack.afterDismissed().subscribe((info) => {
      if (info.dismissedByAction !== true) {
        console.log("Deleted: ", project);
        // if dismissed not by undo click (so it dissappeared)
        // then get project by id and delete it
        this.projectService.deleteObject(project);
      }
    });
    // snack action has been taken
    snack.onAction().subscribe(() => {
      console.log("Attached: ", project);
      // undo button clicked, so remove project from the trash
      this.projectService.attachObject(project);
    });
  }

  public newProjectDialog(): void {
    this.dialogOpen("Create new project");
  }

  public editProjectDialog(project: ProjectDto): void {
    this.dialogOpen("Edit project", project);
  }

  private dialogOpen(title: string, project: ProjectDto = null): void {
    // open angular material dialog
    this.dialog.open(ProjectDialogComponent, {
      height: "85%",
      width: "55%",
      autoFocus: true,
      data: {
        title,
        project,
      },
    });
  }

  async getClients() {
    await this.contractService.getClients().then((clients) => {
      this.clients = clients
    });
  }

  getName(id: string) {
    return this.clients.filter(c => c.id == id)[0].name
  }
}
