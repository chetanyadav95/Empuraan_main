import { Injectable } from '@angular/core';

@Injectable()
export class ProgrammesService {

  private programmeDetails = [
    {
      logo: 'demoTrading_logo',
      title: 'Demo Trading',
      description: 'A platform for demo trading',
      href: 'https://empuraan.com'
    },
    {
      logo: 'fundedTrading_logo',
      title: 'Funded Trading',
      description: 'A platform for Funded trading',
      url: '/funded'
    },
    {
      logo: 'goldTrading_logo',
      title: 'Gold Trading',
      description: 'A platform for Gold trading',
      url: '/gold'
    }
  ];

  constructor() { }

  getProgrammeDetails() {
    return this.programmeDetails;
  }
}
