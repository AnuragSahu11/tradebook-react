import { useEffect } from "react";

const SearchResult = ({ searchResult }) => {
  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);

  return (
    <div className="result-data p-x-3 elevated center-text p-y-3 li-shadow">
      <div className="result-data-div">
        <div className="subtitle is-3 underline">Symbol</div>
        <div className="text light is-4 m-up-1">KOTAKBANK</div>
      </div>
      <div className="result-data-div">
        <div className="subtitle m-up-2 underline is-3">Full name</div>
        <div className="text light m-up-1 is-4">KOTAK MAHINDRA BANK</div>
      </div>
      <div className="result-data-div">
        <div className="subtitle m-up-2 underline is-3">Current Price</div>
        <div className="text light m-up-1 is-4">1828</div>
      </div>

      <button className="btn-primary width-100 btn-small m-up-3">+ Add</button>
    </div>
  );
};

export { SearchResult };
