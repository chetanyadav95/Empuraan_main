import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgrammesRoutingModule } from './programmes-routing.module';
import { ProgrammesComponent } from './programmes.component';
import { ProgrammesService } from './programmes.service';
import { ProgramCardModule } from '../program-card/program-card.module';


@NgModule({
  declarations: [ProgrammesComponent],
  imports: [
    CommonModule,
    ProgrammesRoutingModule,
    ProgramCardModule
  ],
  providers: [ProgrammesService],
  exports: [ProgrammesComponent],
  entryComponents: [ProgrammesComponent]
})
export class ProgrammesModule { }
