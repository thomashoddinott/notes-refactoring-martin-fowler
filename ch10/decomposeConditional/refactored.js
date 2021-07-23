function calculateCharge(aDate, plan, quantity) {
  function summer() {
    return (!(aDate < plan.summerStart) && !(aDate > plan.summerEnd))
  }
  function summerCharge() {
    return quantity * plan.summerRate
  }
  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge
  }

  return summer() ? summerCharge() : regularCharge()
}

module.exports = calculateCharge
