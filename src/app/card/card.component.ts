import { Component, Input, OnInit } from '@angular/core';
import { ICardConfig } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('config') config: ICardConfig;

  constructor() { }

  ngOnInit() {
  }

}
