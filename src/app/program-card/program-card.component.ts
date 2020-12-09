import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProgramCardConfig } from './program-card.model';

@Component({
  selector: 'app-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss'],
})
export class ProgramCardComponent implements OnInit {
  @Input('config') config: IProgramCardConfig;

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
