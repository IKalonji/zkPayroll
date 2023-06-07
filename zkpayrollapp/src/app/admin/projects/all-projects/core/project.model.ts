import { Injectable } from "@angular/core";
import { Adapter } from "./adapters";
import { ProjectDto } from "models/models";

export enum ProjectStatus {
  NEWPROJECTS = 0,
  RUNNING = 1,
  ONHOLD = 2,
  FINISHED = 3,
}

export enum ProjectPriority {
  LOW = -1,
  MEDIUM = 0,
  HIGH = 1,
}
export enum ProjectType {
  WEB = "Website",
  ANDROID = "Android",
  IPHONE = "IPhone",
  TESTING = "Testing",
}

export class Project {
  constructor(
    public id: number,
    public name: string,
    public status: number = ProjectStatus.NEWPROJECTS,
    public description: string = null,
    public deadline: Date = null,
    public priority: number = ProjectPriority.MEDIUM,
    public open_task: number = null,
    public type: string = ProjectType.WEB,
    public created: Date = null,
    public team_leader: string = null,
    public comments: number = null,
    public bugs: number = null,
    public progress: number = null
  ) {}
}

@Injectable({
  providedIn: "root",
})
export class ProjectAdapter implements Adapter<ProjectDto> {
  adapt(item: any): ProjectDto {
    const adapted = new ProjectDto();
    return adapted;
  }
}
