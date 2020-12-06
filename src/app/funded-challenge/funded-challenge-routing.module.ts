import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundedChallengeComponent } from './funded-challenge.component';


const routes: Routes = [
  {
    path: '',
    component: FundedChallengeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundedChallengeRoutingModule { }
