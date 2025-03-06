import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { LogoComponent } from './components/logo/logo.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';

import { BaseChartDirective } from 'ng2-charts';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    LogoComponent,
    SidebarComponent
  ],
  imports: [
    RouterModule,

    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatListModule,
    MatBadgeModule,
    MatTooltipModule,
    MatMenuModule,

    // NgCharts
    BaseChartDirective
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    LogoComponent,
    SidebarComponent,

    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatListModule,
    MatBadgeModule,
    MatTooltipModule,
    MatMenuModule,
    BaseChartDirective
  ]
})
export class SharedModule { }


