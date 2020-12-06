import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundedChallengeRoutingModule } from './funded-challenge-routing.module';
import { FundedChallengeComponent } from './funded-challenge.component';
import { CardModule } from '../card/card.module';


@NgModule({
  declarations: [FundedChallengeComponent],
  imports: [
    CommonModule,
    FundedChallengeRoutingModule,
    CardModule
  ],
  exports: [FundedChallengeComponent],
  entryComponents: [FundedChallengeComponent]
})
export class FundedChallengeModule { }
