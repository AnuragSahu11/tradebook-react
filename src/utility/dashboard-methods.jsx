import { objectToArray } from "./objectToArray";

// for open trades

const accountValue = (obj) => {
  return objectToArray(obj)
    .reduce((acc, crr) => {
      return (acc += crr.price * crr.quantity);
    }, 0)
    .toFixed(2);
};

const currentAccValue = (obj, coinPriceData) => {
  return objectToArray(obj)
    .reduce((acc, crr) => {
      return (acc += coinPriceData[crr.id]?.usd * crr.quantity);
    }, 0)
    .toFixed(2);
};

const profitTrades = (obj, coinPriceData) => {
  return objectToArray(obj).reduce((acc, crr) => {
    if (crr.price < coinPriceData[crr.id]?.usd) acc += 1;
    return acc;
  }, 0);
};

const profitTradesPercentage = (accValue, investment) => {
  let value = (((accValue - investment) / accValue) * 100).toFixed(2);
  if (value > 0) return value + "%";
  return "--";
};

const lossTradesPercentage = (accValue, investment) => {
  let value = (((accValue - investment) / accValue) * 100).toFixed(2);
  if (value < 0) return value + "%";
  return "--";
};

const lossTrades = (obj, coinPriceData) => {
  return objectToArray(obj).reduce((acc, crr) => {
    if (crr.price > coinPriceData[crr.id]?.usd) acc += 1;
    return acc;
  }, 0);
};

const profitTradeAmount = (obj, coinPriceData) => {
  return objectToArray(obj)
    .reduce((acc, crr) => {
      if (crr.price < coinPriceData[crr.id]?.usd)
        acc += (coinPriceData[crr.id]?.usd - crr.price) * crr.quantity;
      return acc;
    }, 0)
    .toFixed(2);
};

const lossTradeAmount = (obj, coinPriceData) => {
  return objectToArray(obj).reduce((acc, crr) => {
    if (crr.price > coinPriceData[crr.id]?.usd)
      acc += (crr.price - coinPriceData[crr.id]?.usd) * crr.quantity;
    return acc;
  }, 0);
};

// for closed trades

const totalAmountInvest = (obj) => {
  return objectToArray(obj)
    .reduce((acc, crr) => {
      return (acc += crr.price * crr.quantity);
    }, 0)
    .toFixed(2);
};

const totalAmountSold = (obj) => {
  return objectToArray(obj)
    .reduce((acc, crr) => {
      return (acc += crr.closingPrice * crr.quantity);
    }, 0)
    .toFixed(2);
};

const closedProfitTrades = (obj) => {
  return objectToArray(obj).reduce((acc, crr) => {
    if (crr.price < crr.closingPrice) acc += 1;
    return acc;
  }, 0);
};

const closedLossTrades = (obj) => {
  return objectToArray(obj).reduce((acc, crr) => {
    if (crr.price > crr.closingPrice) acc += 1;
    return acc;
  }, 0);
};

const closedTradeProfit = (obj) => {
  let value = objectToArray(obj)
    .reduce((acc, crr) => {
      if (crr.closingPrice > crr.price)
        acc += (crr.closingPrice - crr.price) * crr.quantity;
      return acc;
    }, 0)
    .toFixed(2);

  return value;
};

const closedTradeLoss = (obj) => {
  let value = objectToArray(obj)
    .reduce((acc, crr) => {
      if (crr.closingPrice < crr.price)
        acc += (crr.price - crr.closingPrice) * crr.quantity;
      return acc;
    }, 0)
    .toFixed(2);
  return value;
};

export {
  accountValue,
  currentAccValue,
  profitTrades,
  profitTradesPercentage,
  lossTrades,
  lossTradesPercentage,
  profitTradeAmount,
  lossTradeAmount,
  totalAmountInvest,
  totalAmountSold,
  closedProfitTrades,
  closedLossTrades,
  closedTradeProfit,
  closedTradeLoss,
};
