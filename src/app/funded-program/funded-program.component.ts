import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FundedService } from '../services/funded.service';

@Component({
  selector: 'app-funded-program',
  templateUrl: './funded-program.component.html',
  styleUrls: ['./funded-program.component.scss']
})
export class FundedProgramComponent implements OnInit {

  challenges: any;
  steps: any;

  constructor(private viewportScroller: ViewportScroller,  private fundedService: FundedService) { }

  ngOnInit() {
    this.challenges = this.fundedService.getAllChallenges();
    this.steps = this.fundedService.getSteps();
  }

  onClickScroll(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
