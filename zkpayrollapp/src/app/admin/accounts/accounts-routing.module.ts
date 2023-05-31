import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddPaymentComponent } from "./add-payment/add-payment.component";
import { InvoiceComponent } from "./invoice/invoice.component";
import { AllpaymentComponent } from "./allpayment/allpayment.component";
const routes: Routes = [
  {
    path: "all-payment",
    component: AllpaymentComponent,
  },
  {
    path: "add-payment",
    component: AddPaymentComponent,
  },
  {
    path: "invoice",
    component: InvoiceComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
