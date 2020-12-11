import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengeStepsCardRoutingModule } from './challenge-steps-card-routing.module';
import { ChallengeStepsCardComponent } from './challenge-steps-card.component';


@NgModule({
  declarations: [ChallengeStepsCardComponent],
  imports: [
    CommonModule,
    ChallengeStepsCardRoutingModule
  ],
  exports: [ChallengeStepsCardComponent],
  entryComponents: [ChallengeStepsCardComponent]
})
export class ChallengeStepsCardModule { }
