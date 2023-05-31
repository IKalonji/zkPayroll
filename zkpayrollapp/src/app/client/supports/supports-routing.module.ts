import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TicketDetailsComponent } from "./ticket-details/ticket-details.component";
import { TicketsComponent } from "./tickets/tickets.component";

const routes: Routes = [
  {
    path: "tickets",
    component: TicketsComponent,
  },
  {
    path: "ticketDetails",
    component: TicketDetailsComponent,
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportsRoutingModule {}
