// https://github.com/wickedwukong/martin-fowler-refactoring-2nd/blob/31d656ff708b365e3d0eabcb725670b1e32afe36/src/chp10/IntroduceSpecialCase.js

class Site {
  constructor(customer) {
    this._customer = customer;
  }

  get customer() {
    return this._customer;
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

}


// client 1…
function customerName(site) {
  const aCustomer = site.customer;
  // ... lots of intervening code ...
  let customerName;
  if (aCustomer === "unknown") customerName = "occupant";
  else customerName = aCustomer.name;

  return customerName;
}


//client 2
const registry = {
  billingPlans: {
    basic: "basic"
  }
};

function billingPlan(aCustomer) {
  const plan = (aCustomer === "unknown") ?
    registry.billingPlans.basic
    : aCustomer.billingPlan;

  return plan;
}


//client 3
function changeBillingPlan(aCustomer, newPlan) {
  if (aCustomer !== "unknown") aCustomer.billingPlan = newPlan;
  return aCustomer;
}

//client 4
function weeksDelinquent(aCustomer) {
  const weeksDelinquent = (aCustomer === "unknown") ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;
  return weeksDelinquent;
}

module.exports = { customerName, Customer, Site, billingPlan, changeBillingPlan, weeksDelinquent }