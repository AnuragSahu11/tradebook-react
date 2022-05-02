import axios from "axios";

const searchCoins = async (searchText, setSearchResult) => {
  const { data } = await axios.get(
    `https://api.coingecko.com/api/v3/search?query=${searchText}`
  );
  setSearchResult(data.coins);
};

const getCoinData = async (coinId) => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd
    `
  );
  console.log(response);
};

export { searchCoins, getCoinData };
