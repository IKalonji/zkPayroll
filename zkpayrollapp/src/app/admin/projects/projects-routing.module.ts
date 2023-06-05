import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddprojectsComponent } from "./add-project/add-project.component";
import { AllprojectsComponent } from "./all-projects/all-projects.component";
const routes: Routes = [
  {
    path: "addProject",
    component: AddprojectsComponent,
  },
  {
    path: "allProjects",
    component: AllprojectsComponent,
  },];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
