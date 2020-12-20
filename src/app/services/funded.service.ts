import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FundedService {
  private challenges = [
    {
      initialCapital: "INR 5 Lakh*",
      tradingStrategy: "Normal",
      progitTarget: "5%",
      progitTargetCriteria: "",
      instruments: "ALL*",
      tradingPeriod: "30 trading days",
      yourShare: "40 - 80%",
      evaluationFee: "INR 1500",
      tnc:
        "*Initial capital of INR 1 Lakh, and the capital will grow based on successful achievement of targets.",
    },
    {
      initialCapital: "INR 15 Lakh*",
      tradingStrategy: "Normal",
      progitTarget: "5%",
      progitTargetCriteria: "",
      instruments: "ALL*",
      tradingPeriod: "30 trading days",
      yourShare: "40 - 80%",
      evaluationFee: "INR 4500",
      tnc:
        "*Initial capital of INR 3 Lakh, and the capital will grow based on successful achievement of targets.",
    },
    {
      initialCapital: "INR 25 Lakh*",
      tradingStrategy: "Normal",
      progitTarget: "5%",
      progitTargetCriteria: "",
      instruments: "ALL*",
      tradingPeriod: "30 trading days",
      yourShare: "40 - 80%",
      evaluationFee: "INR 7500",
      tnc:
        "*Initial capital of INR 5 Lakh, and the capital will grow based on successful achievement of targets.",
    },
  ];
  private steps = [
    {
      icon: "ballot",
      title: "Choose Trading Program",
      description:
        "You can choose a trading strategy and account size form INR 5 Lakh to INR 25 Lakh to meet your skills and profit targets.",
      btnText: "Trading Programs",
      url: "",
      // href: ''
    },
    {
      icon: "query_stats",
      title: "Prove you can trade",
      description:
        "Traders taking on the Empuraan Challenge must prove their Trading abilities by meeting specific Profit Targets without violating any of the Rules.",
      btnText: "Learn Rules",
      url: "",
      // href: ''
    },
    {
      icon: "monetization_on",
      title: "Start Earning",
      description:
        "Once you have passed the challenge phase you can start earning commissions up 40 to 90% of profits. Empuraan pays your profits out every month!",
      btnText: "Login",
      url: "",
      // href: ''
    },
  ];

  constructor() {}

  getAllChallenges() {
    return this.challenges;
  }
  getChallengeById(id: number) {
    return this.challenges[id];
  }
  getSteps() {
    return this.steps;
  }
}
