import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengeCardRoutingModule } from './challenge-card-routing.module';
import { ChallengeCardComponent } from './challenge-card.component';


@NgModule({
  declarations: [ChallengeCardComponent],
  imports: [
    CommonModule,
    ChallengeCardRoutingModule
  ],
  exports: [ChallengeCardComponent],
  entryComponents: [ChallengeCardComponent]
})
export class ChallengeCardModule { }
