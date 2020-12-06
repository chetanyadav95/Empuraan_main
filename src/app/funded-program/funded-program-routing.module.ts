import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundedProgramComponent } from './funded-program.component';


const routes: Routes = [
  {
    path: '',
    component: FundedProgramComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundedProgramRoutingModule { }
