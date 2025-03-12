import { NgModule } from "@angular/core";

import { ContaPagarModule } from "./contas-pagar/contas-pagar.module";
import { StatusLabelPipe } from "./pipes/status-label.pipe";

@NgModule({
  declarations: [
    StatusLabelPipe
  ],
  imports: [],
  exports: [
    ContaPagarModule
  ]
})
export class FinanceiroModule{}
