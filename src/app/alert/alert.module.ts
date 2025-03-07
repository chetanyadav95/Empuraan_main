import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertRoutingModule } from './alert-routing.module';
import { AlertComponent } from './alert.component';


@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    AlertRoutingModule
  ],
  exports: [AlertComponent],
  entryComponents: [AlertComponent]
})
export class AlertModule { }
