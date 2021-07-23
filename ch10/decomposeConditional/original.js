function calculateCharge(aDate, plan, quantity) {
  let charge
  if (!(aDate < plan.summerStart) && !(aDate > plan.summerEnd)) {
    charge = quantity * plan.summerRate
  } else {
    charge = quantity * plan.regularRate + plan.regularServiceCharge
  }
  return charge
}

module.exports = calculateCharge
