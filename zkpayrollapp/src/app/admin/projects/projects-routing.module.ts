import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AssignProjectComponent } from "./assign-project/assign-project.component";
import { AllprojectsComponent } from "./all-projects/all-projects.component";
const routes: Routes = [
  {
    path: "assignProject",
    component: AssignProjectComponent,
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
