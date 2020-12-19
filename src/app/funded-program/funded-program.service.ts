import { Injectable } from "@angular/core";

@Injectable()
export class FundedProgramService {
  private challenges = [
    {
      initialCapital: "5,00,000 INR",
      tradingStrategy: "Normal",
      progitTarget: "5%",
      progitTargetCriteria: "(Funded account 2.5%)",
      instruments: "ALL*",
      tradingPeriod: "30 trading days**",
      yourShare: "40 - 80%",
      evaluationFee: "1500 INR",
      tnc:
        "No monthly fees, the choosen retail broker is offering trading days = business days",
    },
    {
      initialCapital: "Rs. 25,00,000",
      tradingStrategy: "Normal",
      progitTarget: "5%",
      progitTargetCriteria: "(Funded account 2.5%)",
      instruments: "ALL*",
      tradingPeriod: "30 trading days**",
      yourShare: "40 - 80%",
      evaluationFee: "7500 INR",
      tnc:
        "No monthly fees, the choosen retail broker is offering trading days = business days",
    },
    {
      initialCapital: "50,00,000 INR",
      tradingStrategy: "Normal",
      progitTarget: "5%",
      progitTargetCriteria: "(Funded account 2.5%)",
      instruments: "ALL*",
      tradingPeriod: "30 trading days**",
      yourShare: "40 - 80%",
      evaluationFee: "15000 INR",
      tnc:
        "No monthly fees, the choosen retail broker is offering trading days = business days",
    },
  ];
  private steps = [
    {
      icon: "ballot",
      title: "Choose Trading Program",
      description:
        "You can choose a trading strategy and account size form $5,000 to $400,000 to meet your skills and profit targets.",
      btnText: "Trading Programs",
      url: "",
      // href: ''
    },
    {
      icon: "query_stats",
      title: "Prove you can trade",
      description:
        "Traders taking on the Fidelcrest Challenge must prove their Trading abilities by meeting specific Profit Targets without violating any of the Rules.",
      btnText: "Learn Rules",
      url: "",
      // href: ''
    },
    {
      icon: "monetization_on",
      title: "Start Earning",
      description:
        "Once you have passed the challenge phase you can start earning commissions up to 50% of profits and after completing the funded verification phase, you can earn up 40 to 90% of all profits made. Fidelcrest pays your profits out every month!",
      btnText: "Login",
      url: "",
      // href: ''
    },
  ];

  constructor() {}

  getChallenges() {
    return this.challenges;
  }
  getSteps() {
    return this.steps;
  }
}
