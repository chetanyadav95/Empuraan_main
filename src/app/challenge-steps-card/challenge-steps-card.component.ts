import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IChallengeStepsCardConfig } from './challenge-steps-card.model';

@Component({
  selector: 'app-challenge-steps-card',
  templateUrl: './challenge-steps-card.component.html',
  styleUrls: ['./challenge-steps-card.component.scss']
})
export class ChallengeStepsCardComponent implements OnInit {
  @Input('config') config: IChallengeStepsCardConfig;

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
