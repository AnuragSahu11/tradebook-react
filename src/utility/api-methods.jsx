import axios from "axios";

const searchCoins = async (searchText, setSearchResult) => {
  const { data } = await axios.get(
    `https://api.coingecko.com/api/v3/search?query=${searchText}`
  );
  setSearchResult(data.coins);
};

export { searchCoins };
