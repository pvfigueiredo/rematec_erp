import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ContasPagarComponent } from "./contas-pagar.component";
import { ContaPagarDetalheComponent } from "./components/conta-pagar-detalhe/conta-pagar-detalhe.component";
import { ContaPagarFormComponent } from "./components/conta-pagar-form/conta-pagar-form.component";
import { ContaPagarPagamentoComponent } from "./components/conta-pagar-pagamento/conta-pagar-pagamento.component";

const routes: Routes = [
  {
    path: 'financeiro/contas-pagar',
    component: ContasPagarComponent
  },
  {
    path: 'financeiro/contas-pagar/nova',
    component: ContaPagarFormComponent
  },
  {
    path: 'financeiro/contas-pagar/editar/:id',
    component: ContaPagarFormComponent
  },
  {
    path: 'financeiro/contas-pagar/detalhe/:id',
    component: ContaPagarDetalheComponent
  }
];

@NgModule({
  declarations: [
    ContasPagarComponent,
    ContaPagarDetalheComponent,
    ContaPagarFormComponent,
    ContaPagarPagamentoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [

  ]
})
export class ContaPagarModule {}
