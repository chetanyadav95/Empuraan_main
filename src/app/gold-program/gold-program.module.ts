import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoldProgramRoutingModule } from './gold-program-routing.module';
import { GoldProgramComponent } from './gold-program.component';


@NgModule({
  declarations: [GoldProgramComponent],
  imports: [
    CommonModule,
    GoldProgramRoutingModule
  ],
  exports: [GoldProgramComponent],
  entryComponents: [GoldProgramComponent]
})
export class GoldProgramModule { }
