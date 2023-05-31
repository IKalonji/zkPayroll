import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyProjectsComponent } from "./my-projects/my-projects.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";

const routes: Routes = [
  {
    path: "myProjects",
    component: MyProjectsComponent,
  },
  {
    path: "projectDetails",
    component: ProjectDetailsComponent,
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
