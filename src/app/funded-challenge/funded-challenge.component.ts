import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatAccordion} from '@angular/material/expansion';

import { Subscription } from 'rxjs';
import { IChallengeCardConfig } from '../challenge-card/challenge-card.model';
import { FundedService } from '../services/funded.service';

@Component({
  selector: 'app-funded-challenge',
  templateUrl: './funded-challenge.component.html',
  styleUrls: ['./funded-challenge.component.scss']
})
export class FundedChallengeComponent implements OnInit, OnDestroy {

  challengeIndex: number;
  routeSubscription = new Subscription();
  cardConfig: IChallengeCardConfig;

  @Input('config') config: any;
  // @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(private activatedRoute: ActivatedRoute, private fundedService: FundedService) { }

  ngOnInit() {
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      this.challengeIndex = params['id'];
      this.cardConfig = this.fundedService.getChallengeById(this.challengeIndex);
      });
      console.log(this.challengeIndex);
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
