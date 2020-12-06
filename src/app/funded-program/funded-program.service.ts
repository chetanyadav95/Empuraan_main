import { Injectable } from '@angular/core';

@Injectable()
export class FundedProgramService {

  private challenges = [
    {
      logo: 'challenge_logo',
      title: 'Challenge 1',
      description: 'A platform for demo trading'
    },
    {
      logo: 'challenge_logo',
      title: 'Challenge 2',
      description: 'A platform for Funded trading'
    },
    {
      logo: 'challenge_logo',
      title: 'Challenge 3',
      description: 'A platform for Gold trading'
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
