import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoldDetailsRoutingModule } from './gold-details-routing.module';
import { GoldDetailsComponent } from './gold-details.component';


@NgModule({
  declarations: [GoldDetailsComponent],
  imports: [
    CommonModule,
    GoldDetailsRoutingModule
  ],
  exports: [GoldDetailsComponent],
  entryComponents: [GoldDetailsComponent]
})
export class GoldDetailsModule { }
