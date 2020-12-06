import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoldProgramComponent } from './gold-program.component';


const routes: Routes = [
  {
    path: '',
    component: GoldProgramComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoldProgramRoutingModule { }
