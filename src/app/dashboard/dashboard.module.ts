import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProgrammesModule } from '../programmes/programmes.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ProgrammesModule
  ],
  exports: [DashboardComponent],
  entryComponents: [DashboardComponent]
})
export class DashboardModule { }
