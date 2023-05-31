import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AttendancesComponent } from "./attendance/attendance.component";
import { MyProjectsComponent } from "./my-projects/my-projects.component";
const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "attendance",
    component: AttendancesComponent,
  },
  {
    path: "myprojects",
    component: MyProjectsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
