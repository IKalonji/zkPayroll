import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodayComponent } from "./today/today.component";
import { EmployeeComponent } from "./employee/employee.component";
import { AttendanceSheetComponent } from "./attendance-sheet/attendance-sheet.component";

const routes: Routes = [
  {
    path: "today",
    component: TodayComponent,
  },
  {
    path: "employee",
    component: EmployeeComponent,
  },
  {
    path: "attendance-sheet",
    component: AttendanceSheetComponent,
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceRoutingModule {}
