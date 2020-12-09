import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengeCardComponent } from './challenge-card.component';


const routes: Routes = [
  {
    path: '',
    component: ChallengeCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengeCardRoutingModule { }
