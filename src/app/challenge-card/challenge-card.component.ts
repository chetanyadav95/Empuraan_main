import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IChallengeCardConfig } from './challenge-card.model';

@Component({
  selector: 'app-challenge-card',
  templateUrl: './challenge-card.component.html',
  styleUrls: ['./challenge-card.component.scss']
})
export class ChallengeCardComponent implements OnInit {

  @Input('config') config: IChallengeCardConfig;

  constructor(private router: Router) {}

  ngOnInit() {}

  redirectTo(config) {
    if (config.url) {
      this.router.navigateByUrl(config.url);
    } else if (config.href) {
      window.open(config.href);
    }
  }

}
