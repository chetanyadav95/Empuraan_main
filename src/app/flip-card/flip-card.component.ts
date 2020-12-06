import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFlipCardConfig } from './flip-card.model';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {

  @Input('config') config: IFlipCardConfig;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectTo(url: string) {
    url && window.open(url);
  }
}
