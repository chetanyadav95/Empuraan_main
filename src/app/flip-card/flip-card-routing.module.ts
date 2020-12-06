import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlipCardComponent } from './flip-card.component';


const routes: Routes = [
  {
    path: '',
    component: FlipCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlipCardRoutingModule { }
