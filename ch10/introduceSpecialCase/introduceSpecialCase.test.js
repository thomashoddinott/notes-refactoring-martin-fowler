// https://github.com/wickedwukong/martin-fowler-refactoring-2nd/blob/31d656ff708b365e3d0eabcb725670b1e32afe36/test/chp10/IntroduceSpecialCase.test.js

describe('original', () => {
  const { customerName, Customer, Site, billingPlan, changeBillingPlan, weeksDelinquent } = require('./original')
  it('should give "occupant" if customer is "unknown" ', () => {
    expect(customerName(new Site("unknown"))).toEqual("occupant");
  });
  it('should give customer name if customer is not "unknown" ', () => {
    expect(customerName(new Site(new Customer("Ava")))).toEqual("Ava");
  });

  it('should give basic billing plan', () => {
    expect(billingPlan("unknown")).toEqual("basic");
  });
  it('should give customer billing plan when it is not "unknown" ', () => {
    expect(billingPlan(new Customer("Ava", "Annual"))).toEqual("Annual");
  });

  it('do nothing to customer billing plan is customer is "unknown" ', () => {
    expect(changeBillingPlan("unknown")).toEqual("unknown");
  });
  it('change customer billing plan when customer is not "unknown" ', () => {
    expect(changeBillingPlan(new Customer("Ava", "Annual"), "basic").billingPlan).toEqual("basic");
  });

  it('should have no/zero weeks delinquent for unknown customer', () => {
    expect(weeksDelinquent("unknown")).toEqual(0);
  });
  it('should report weeks delinquent from customer payment history', () => {
    expect(weeksDelinquent(new Customer("Ava", "Annual", { weeksDelinquentInLastYear: 2 }))).toEqual(2);
  });
});

describe('refactored', () => {
  const { customerName, Customer, Site, billingPlan, changeBillingPlan, weeksDelinquent, UnknownCustomer } = require('./refactored')
  it('should give "occupant" if customer is "unknown" ', () => {
    expect(customerName(new Site("unknown"))).toEqual("occupant");
  });
  it('should give customer name if customer is not "unknown" ', () => {
    expect(customerName(new Site(new Customer("Ava")))).toEqual("Ava");
  });

  it('should give basic billing plan', () => {
    expect(billingPlan(new Site("unknown"))).toEqual("basic");
  });
  it('should give customer billing plan when it is not "unknown" ', () => {
    expect(billingPlan(new Site(new Customer("Ava", "Annual")))).toEqual("Annual");
  });

  it('do nothing to customer billing plan is customer is "unknown" ', () => {
    expect(changeBillingPlan(new Site("unknown"))).toEqual(new UnknownCustomer());
  });
  it('change customer billing plan when customer is not "unknown" ', () => {
    expect(changeBillingPlan(new Site(new Customer("Ava", "basic")), "Annual").billingPlan).toEqual("Annual");
  });

  it('should have no/zero weeks delinquent for unknown customer', () => {
    expect(weeksDelinquent(new Site("unknown"))).toEqual(0);
  });
  it('should report weeks delinquent from customer payment history', () => {
    expect(weeksDelinquent(new Site(new Customer("Ava", "Annual", { weeksDelinquentInLastYear: 2 })))).toEqual(2);
  });
});

