import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public headerConfig = {
    title: 'EMPURAAN',
    url: '/dashboard'
  };
}
