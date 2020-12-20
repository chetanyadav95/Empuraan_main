import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainWrapperComponent } from './main-wrapper.component';


const routes: Routes = [
  {
    path: '',
    component: MainWrapperComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./../dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'funded',
        loadChildren: () => import('./../funded-program/funded-program.module').then(m => m.FundedProgramModule)
      },
      {
        path: 'gold',
        loadChildren: () => import('./../gold-program/gold-program.module').then(m => m.GoldProgramModule)
      },
      {
        path: 'funded-challenge/:id',
        loadChildren: () => import('./../funded-challenge/funded-challenge.module').then(m => m.FundedChallengeModule)
      },
      {
        path: 'gold-details',
        loadChildren: () => import('./../gold-details/gold-details.module').then(m => m.GoldDetailsModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainWrapperRoutingModule { }
