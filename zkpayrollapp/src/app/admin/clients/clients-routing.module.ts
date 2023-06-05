import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddClientComponent } from "./add-client/add-client.component";
import { AllclientComponent } from "./all-clients/all-clients.component";
const routes: Routes = [
  {
    path: "all-clients",
    component: AllclientComponent,
  },
  {
    path: "add-client",
    component: AddClientComponent,
  },];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
