import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FundedProgramService } from './funded-program.service';

@Component({
  selector: 'app-funded-program',
  templateUrl: './funded-program.component.html',
  styleUrls: ['./funded-program.component.scss']
})
export class FundedProgramComponent implements OnInit {

  challenges: any;
  steps: any;

  constructor(private viewportScroller: ViewportScroller, private fundedProgramService: FundedProgramService) { }

  ngOnInit() {
    this.challenges = this.fundedProgramService.getChallenges();
    this.steps = this.fundedProgramService.getSteps();
  }

  onClickScroll(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
