import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthModule } from "./auth/auth.module";
import { HomeModule } from "./home/home.module";
import { FinanceiroModule } from "./financeiro/financeiro.module";
import { DashboardModule } from "./dashboard/dashboard.module";


@NgModule({
  declarations: [

  ],
  imports: [
    AuthModule,
    HomeModule,
    CommonModule,
    FinanceiroModule,
    DashboardModule
  ],
  exports: [
    AuthModule,
    HomeModule,
    CommonModule,
    FinanceiroModule,
    DashboardModule
  ]
})

export class FeaturesModule{}
