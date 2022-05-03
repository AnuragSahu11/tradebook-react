const applyFilters = (arr, filters, coinPriceData) => {
  const { sort, show } = filters;

  const sortedArr = sortArr(arr, sort, coinPriceData);

  const filteredArr = sortedArr.filter((order) => {
    if (show === "profit") {
      return (
        profitOrLoss(
          order.price,
          coinPriceData[order.id]?.usd,
          order.quantity
        ) > 0
      );
    }
    if (show === "loss") {
      return (
        profitOrLoss(
          order.price,
          coinPriceData[order.id]?.usd,
          order.quantity
        ) < 0
      );
    } else {
      return true;
    }
  });

  return filteredArr;
};

const profitOrLoss = (bPrice, sPrice, qty) => {
  return (sPrice - bPrice) * qty;
};

const sortArr = (arr, sort, coinPriceData) => {
  let sortedList = [];
  if (sort === "profitLow") {
    sortedList = arr.sort((a, b) => {
      return (
        profitOrLoss(a.price, coinPriceData[a.id]?.usd, a.quantity) -
        profitOrLoss(b.price, coinPriceData[b.id]?.usd, b.quantity)
      );
    });
  }
  if (sort === "profitHigh") {
    sortedList = arr.sort((a, b) => {
      return (
        profitOrLoss(b.price, coinPriceData[b.id]?.usd, b.quantity) -
        profitOrLoss(a.price, coinPriceData[a.id]?.usd, a.quantity)
      );
    });
  }
  if (sort === "investLow") {
    sortedList = arr.sort((a, b) => {
      return a.price - b.price;
    });
  }
  if (sort === "investHigh") {
    sortedList = arr.sort((a, b) => {
      return b.price - a.price;
    });
  } else {
    sortedList = [...arr];
  }
  return sortedList;
};

export { applyFilters };
