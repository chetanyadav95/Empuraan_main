import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundedChallengeRoutingModule } from './funded-challenge-routing.module';
import { FundedChallengeComponent } from './funded-challenge.component';
import { ChallengeCardModule } from '../challenge-card/challenge-card.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [FundedChallengeComponent],
  imports: [
    CommonModule,
    FundedChallengeRoutingModule,
    ChallengeCardModule,
    MatExpansionModule,
    MatIconModule
  ],
  exports: [FundedChallengeComponent],
  entryComponents: [FundedChallengeComponent]
})
export class FundedChallengeModule { }
