let stock = {
  name: "aapl",
  lastClosingPrice: 172.99,
  lastFiveDaysClosingPrices: [179.99, 180.33, 176.28, 175.64, 172.99],
};

// write code here to add the changeInLastFiveDays field to stock
let change = stock.lastFiveDaysClosingPrices[4] - stock.lastFiveDaysClosingPrices[0];
stock.changeInLastFiveDays = change;
console.log(
  "In the last 5 days, the stock changed by",
  stock.changeInLastFiveDays
);