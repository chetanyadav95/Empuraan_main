import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramCardComponent } from './program-card.component';


const routes: Routes = [
  {
    path: '',
    component: ProgramCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramCardRoutingModule { }
