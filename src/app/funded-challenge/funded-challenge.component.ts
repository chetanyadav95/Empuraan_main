import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-funded-challenge',
  templateUrl: './funded-challenge.component.html',
  styleUrls: ['./funded-challenge.component.scss']
})
export class FundedChallengeComponent implements OnInit {

  @Input('config') config: any;

  constructor() { }

  ngOnInit() {
  }

}
