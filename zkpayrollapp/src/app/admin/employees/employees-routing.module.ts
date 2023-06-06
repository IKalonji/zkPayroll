import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { AllemployeesComponent } from "./allEmployees/allemployees.component";
const routes: Routes = [
  {
    path: "allEmployees",
    component: AllemployeesComponent,
  },
  {
    path: "add-employee",
    component: AddEmployeeComponent,
  },];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
