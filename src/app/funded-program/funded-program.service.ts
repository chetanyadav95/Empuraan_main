import { Injectable } from '@angular/core';

@Injectable()
export class FundedProgramService {

  private challenges = [
    {
      initialCapital: 'Rs. 1,00,000',
      tradingStrategy: 'Normal',
      progitTarget: '5%',
      progitTargetCriteria: '(Funded account 2.5%)',
      instruments: 'ALL*',
      tradingPeriod: '30 trading days**',
      yourShare: '40 - 80%',
      evaluationFee: '40 - 80%',
      tnc: 'No monthly fees, the choosen retail broker is offering trading days = business days'
    },
    {
      initialCapital: 'Rs. 1,00,000',
      tradingStrategy: 'Normal',
      progitTarget: '5%',
      progitTargetCriteria: '(Funded account 2.5%)',
      instruments: 'ALL*',
      tradingPeriod: '30 trading days**',
      yourShare: '40 - 80%',
      evaluationFee: '40 - 80%',
      tnc: 'No monthly fees, the choosen retail broker is offering trading days = business days'
    },
    {
      initialCapital: 'Rs. 1,00,000',
      tradingStrategy: 'Normal',
      progitTarget: '5%',
      progitTargetCriteria: '(Funded account 2.5%)',
      instruments: 'ALL*',
      tradingPeriod: '30 trading days**',
      yourShare: '40 - 80%',
      evaluationFee: '40 - 80%',
      tnc: 'No monthly fees, the choosen retail broker is offering trading days = business days'
    }
  ];
  private steps = [
    {
      logo: 'step_logo',
      title: 'Step 1',
      description: 'A platform for demo trading'
    },
    {
      logo: 'step_logo',
      title: 'Step 2',
      description: 'A platform for Funded trading'
    },
    {
      logo: 'step_logo',
      title: 'Step 3',
      description: 'A platform for Gold trading'
    }
  ];

  constructor() { }

  getChallenges() {
    return this.challenges;
  }
  getSteps() {
    return this.steps;
  }
}
