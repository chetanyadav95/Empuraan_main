import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundedProgramRoutingModule } from './funded-program-routing.module';
import { FundedProgramComponent } from './funded-program.component';
import { FlipCardModule } from '../flip-card/flip-card.module';
import { CardModule } from '../card/card.module';
import { FundedProgramService } from './funded-program.service';


@NgModule({
  declarations: [FundedProgramComponent],
  imports: [
    CommonModule,
    FundedProgramRoutingModule,
    FlipCardModule,
    CardModule
  ],
  providers: [FundedProgramService],
  exports: [FundedProgramComponent],
  entryComponents: [FundedProgramComponent]
})
export class FundedProgramModule { }
