import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input('config') config: any;

  navbarOpen = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  redirectTo(config) {
    if (config.url) {
      this.router.navigateByUrl(config.url);
    } else if (config.href) {
      window.open(config.href);
    }
  }

}
