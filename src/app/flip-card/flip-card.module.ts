import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlipCardRoutingModule } from './flip-card-routing.module';
import { FlipCardComponent } from './flip-card.component';


@NgModule({
  declarations: [FlipCardComponent],
  imports: [
    CommonModule,
    FlipCardRoutingModule
  ],
  exports: [FlipCardComponent],
  entryComponents: [FlipCardComponent]
})
export class FlipCardModule { }
