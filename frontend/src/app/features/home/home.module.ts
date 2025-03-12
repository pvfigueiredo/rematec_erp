import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesSectionComponent } from './components/features-section/features-section.component';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { RouterModule } from '@angular/router';
import { routes } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    FeaturesSectionComponent,
    FeatureCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HomeComponent,
    HeroComponent,
    FeaturesSectionComponent,
    FeatureCardComponent
  ]
})
export class HomeModule { }
