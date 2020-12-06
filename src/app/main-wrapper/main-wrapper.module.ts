import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainWrapperRoutingModule } from './main-wrapper-routing.module';
import { MainWrapperComponent } from './main-wrapper.component';


@NgModule({
  declarations: [MainWrapperComponent],
  imports: [
    CommonModule,
    MainWrapperRoutingModule
  ],
  exports: [MainWrapperComponent],
  entryComponents: [MainWrapperComponent]
})
export class MainWrapperModule { }
