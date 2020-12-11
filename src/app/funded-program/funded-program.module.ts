import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundedProgramRoutingModule } from './funded-program-routing.module';
import { FundedProgramComponent } from './funded-program.component';
import { CardModule } from '../card/card.module';
import { FundedProgramService } from './funded-program.service';
import { ChallengeCardModule } from '../challenge-card/challenge-card.module';
import { ChallengeStepsCardModule } from '../challenge-steps-card/challenge-steps-card.module';


@NgModule({
  declarations: [FundedProgramComponent],
  imports: [
    CommonModule,
    FundedProgramRoutingModule,
    ChallengeCardModule,
    ChallengeStepsCardModule
  ],
  providers: [FundedProgramService],
  exports: [FundedProgramComponent],
  entryComponents: [FundedProgramComponent]
})
export class FundedProgramModule { }
