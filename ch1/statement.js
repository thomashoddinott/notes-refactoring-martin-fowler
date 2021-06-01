function amountFor(aPerformance, plays) {
  let result = 0;
  switch (playFor(aPerformance, plays).type) {
    case "tragedy":
      result = 40000;
      if (aPerformance.audience > 30) {
        result += 1000 * (aPerformance.audience - 30);
      }
      break;
    case "comedy":
      result = 30000;
      if (aPerformance.audience > 20) {
        result += 10000 + 500 * (aPerformance.audience - 20);
      }
      result += 300 * aPerformance.audience;
      break;
    default:
      throw new Error(`unknown type: ${playFor(aPerformance, plays).type}`);
  }
  return result;
}

function playFor(aPerformance, plays) {
  return plays[aPerformance.playID];
}

function volumeCreditsFor(perf, plays) {
  let volumeCredits = 0;
  volumeCredits += Math.max(perf.audience - 30, 0);
  if ("comedy" === playFor(perf, plays).type) volumeCredits += Math.floor(perf.audience / 5);
  return volumeCredits;
}

function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;
  const format = new Intl.NumberFormat("en-US",
    {
      style: "currency", currency: "USD",
      minimumFractionDigits: 2
    }).format;

  for (let perf of invoice.performances) {
    volumeCredits += volumeCreditsFor(perf, plays)

    // print line for this order
    result += `  ${playFor(perf, plays).name}: ${format(amountFor(perf, plays) / 100)} (${perf.audience} seats)\n`;
    totalAmount += amountFor(perf, plays);
  }
  result += `Amount owed is ${format(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;
  return result;
}

module.exports = statement
