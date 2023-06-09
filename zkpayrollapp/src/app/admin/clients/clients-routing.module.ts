import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddClientComponent } from "./add-client/add-client.component";
import { EditClientComponent } from "./edit-client/edit-client.component";
import { AllclientComponent } from "./all-clients/all-clients.component";
const routes: Routes = [
  {
    path: "all-clients",
    component: AllclientComponent,
  },
  {
    path: "add-client",
    component: AddClientComponent,
  },
  {
    path: "edit-client",
    component: EditClientComponent,
  },];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
