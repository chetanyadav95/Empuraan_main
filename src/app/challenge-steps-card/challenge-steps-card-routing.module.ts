import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengeStepsCardComponent } from './challenge-steps-card.component';


const routes: Routes = [
  {
    path: '',
    component: ChallengeStepsCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengeStepsCardRoutingModule { }
