import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramCardRoutingModule } from './program-card-routing.module';
import { ProgramCardComponent } from './program-card.component';


@NgModule({
  declarations: [ProgramCardComponent],
  imports: [
    CommonModule,
    ProgramCardRoutingModule
  ],
  exports: [ProgramCardComponent],
  entryComponents: [ProgramCardComponent]
})
export class ProgramCardModule { }
