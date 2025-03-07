import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';


@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    CardRoutingModule
  ],
  exports: [CardComponent],
  entryComponents: [CardComponent]
})
export class CardModule { }
