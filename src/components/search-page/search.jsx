const Search = ({ setInputText }) => {
  const search = () => {};

  return (
    <div className="search center-x center-text center-y">
      <div className="form width-80 center-x">
        <div className="form-div center-text">
          <p className="form-label is-4">Search Crypto</p>
          <input
            onChange={(e) => setInputText(e.target.value)}
            type="text"
            className="form-input input-focused"
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
