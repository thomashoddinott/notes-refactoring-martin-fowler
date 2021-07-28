// https://raw.githubusercontent.com/wickedwukong/martin-fowler-refactoring-2nd/master/src/chp10/IntroduceSpecialCase.js

class Site {
  constructor(customer) {
      this._customer = customer;
  }

  get customer() {
      return (this._customer === "unknown") ? new UnknownCustomer() : this._customer;
  }
}


class Customer {
  constructor(name, billingPlan, paymentHistory) {
      this._name = name;
      this._billingPlan = billingPlan;
      this._paymentHistory = paymentHistory;
  }

  get name() {
      return this._name;
  }

  get billingPlan() {
      return this._billingPlan
  }

  set billingPlan(arg) {
      this._billingPlan = arg;
  }

  get paymentHistory() {
      return this._paymentHistory;
  }

  get isUnknown() {
      return false;
  }

}

class NullPaymentHistory {
  get weeksDelinquentInLastYear() {
      return 0;
  }
}

class UnknownCustomer {
  get name() {
      return "occupant";
  }

  get billingPlan() {
      return registry.billingPlans.basic;
  }

  set billingPlan(arg) { /* ignore */
  }

  get paymentHistory() {
      return new NullPaymentHistory();
  }

}
// client 1…

function customerName(site) {
  return site.customer.name;
}


//client 2

const registry = {
  billingPlans: {
      basic: "basic"
  }
};

function billingPlan(site) {
  return site.customer.billingPlan;
}


//client 3
function changeBillingPlan(site, newPlan) {
  site.customer.billingPlan = newPlan;
  return site.customer;
}

//client 4
function weeksDelinquent(site) {
  return site.customer.paymentHistory.weeksDelinquentInLastYear;
}

module.exports = { customerName, Customer, Site, billingPlan, changeBillingPlan, weeksDelinquent, UnknownCustomer }