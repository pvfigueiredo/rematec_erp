import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './features/home/home.module';
import { AuthModule } from './features/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AuthModule,
    BrowserAnimationsModule,
  ],
  providers: [
    provideCharts(withDefaultRegisterables())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
