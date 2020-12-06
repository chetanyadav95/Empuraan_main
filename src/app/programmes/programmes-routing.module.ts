import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgrammesComponent } from './programmes.component';


const routes: Routes = [
  {
    path: '',
    component: ProgrammesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgrammesRoutingModule { }
