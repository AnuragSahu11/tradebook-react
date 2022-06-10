import axios from "axios";

const searchCoins = async (searchText, setSearchResult, setLoading) => {
  setLoading(true);
  const { data } = await axios.get(
    `https://api.coingecko.com/api/v3/search?query=${searchText}`
  );
  setSearchResult(data.coins);
  setLoading(false);
};

const getCoinData = async (coinId, setCoinPrice) => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd
    `
  );
  setCoinPrice(response.data[coinId].usd);
};

const getCoinPrices = async (coindIdList) => {
  return await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coindIdList}&vs_currencies=usd
  `);
};

export { searchCoins, getCoinData, getCoinPrices };
