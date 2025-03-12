import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ApplicationComponent } from "./application/application.component";
import { SharedModule } from "@shared/shared.module";
import { FeaturesModule } from "@features/features.module";


@NgModule({
  imports:[
    CommonModule,
    FeaturesModule,
    SharedModule
  ],
  declarations: [
    ApplicationComponent
  ],
  exports: [
    ApplicationComponent
  ]

})
export class LayoutModule{}
