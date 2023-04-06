const stocks = [
  {
    name: "aapl",
    lastClosingPrice: 172.99,
    lastFiveDaysClosingPrices: [179.99, 180.33, 176.28, 175.64, 172.99],
  },
  {
    name: "msft",
    lastClosingPrice: 327.29,
    lastFiveDaysClosingPrices: [340.69, 342.45, 334.69, 333.2, 327.29],
  },
  {
    name: "amzn",
    lastClosingPrice: 3408.34,
    lastFiveDaysClosingPrices: [3384.44, 3393.39, 3421.37, 3420.74, 3408.34],
  },
  {
    name: "googl",
    lastClosingPrice: 2869.45,
    lastFiveDaysClosingPrices: [2951.88, 2958.13, 2938.33, 2928.3, 2869.45],
  },
  {
    name: "tsla",
    lastClosingPrice: 938.53,
    lastFiveDaysClosingPrices: [1101.3, 1093.94, 1067.0, 1008.87, 938.53],
  },
];

function getMessage(stock) {
  // return a message containing the name and last closing price of the stock
  
}

function isStockPriceDecreasing(stock) {
  // return a boolean indicating whether the stock decreased in price over the last 5 days
}

const decreasingStocks = stocks.filter(isStockPriceDecreasing);
const messages = decreasingStocks.map(getMessage);
console.log("Stocks that decreased in price over the last 5 days:");
for (const message of messages) {
  console.log(message);
}