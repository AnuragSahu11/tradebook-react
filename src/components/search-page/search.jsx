import { changeTitle } from "../../utility";

const Search = ({ setInputText }) => {
  const search = () => {};
  changeTitle("Search any Crypto Coin");

  return (
    <div className="search center-x center-text center-y">
      <div className="form width-80 center-x">
        <div className="form-div search-input-div center-text">
          <p className="form-label is-4">Search Crypto</p>
          <i className="search-icon bx is-light bx-search-alt-2"></i>
          <input
            onChange={(e) => setInputText(e.target.value)}
            type="text"
            className="search-form-input form-input input-focused"
            placeholder="Search"
            required=""
          />
        </div>
      </div>
      <button onClick={search} className="btn-primary shadow btn-large">
        Search
      </button>
    </div>
  );
};

export { Search };
