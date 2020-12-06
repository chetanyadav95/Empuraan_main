import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgrammesRoutingModule } from './programmes-routing.module';
import { ProgrammesComponent } from './programmes.component';
import { ProgrammesService } from './programmes.service';
import { FlipCardModule } from '../flip-card/flip-card.module';


@NgModule({
  declarations: [ProgrammesComponent],
  imports: [
    CommonModule,
    ProgrammesRoutingModule,
    FlipCardModule
  ],
  providers: [ProgrammesService],
  exports: [ProgrammesComponent],
  entryComponents: [ProgrammesComponent]
})
export class ProgrammesModule { }
