const Filters = () => {
  return (
    <div className="filter-menu p-x-4 p-up-2 dk-shadow m-up-6 flex-c-w">
      <div className="filter-menu-responsive p-dw-1 flex-row align-center space-between">
        <span>
          <div className="title is-dark">Filters</div>
        </span>
        <span className="link-secondary m-up-1 is-2">Clear all</span>
      </div>
      <div className="list-container">
        <div className="title semibold">Show Only</div>
        <ul className="list list-none">
          <li className="list-items">
            <label className="form-radio-label">
              <input type="radio" name="show" defaultChecked="" />
              <i />
              <span className="form-radio-button-text is-2 is-medium">
                Profit trades
              </span>
            </label>
          </li>
          <li className="list-items">
            <label className="form-radio-label">
              <input type="radio" name="show" defaultChecked="" />
              <i />
              <span className="form-radio-button-text is-2 is-medium">
                Loss trades
              </span>
            </label>
          </li>
        </ul>
      </div>
      <div className="list-container">
        <div className="title semibold">Sort By</div>
        <ul className="list list-none">
          <li className="list-items">
            <label className="form-radio-label">
              <input type="radio" name="opinion" defaultChecked="" />
              <i />
              <span className="form-radio-button-text is-light is-2">
                Investment high to low
              </span>
            </label>
          </li>
          <li className="list-items">
            <label className="form-radio-label">
              <input type="radio" name="opinion" defaultChecked="" />
              <i />
              <span className="form-radio-button-text is-light is-2">
                Investment low to high
              </span>
            </label>
          </li>
          <li className="list-items">
            <label className="form-radio-label">
              <input type="radio" name="opinion" defaultChecked="" />
              <i />
              <span className="form-radio-button-text is-light is-2">
                Profit high to low
              </span>
            </label>
          </li>
          <li className="list-items">
            <label className="form-radio-label">
              <input type="radio" name="opinion" defaultChecked="" />
              <i />
              <span className="form-radio-button-text is-light is-2">
                Loss high to low
              </span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Filters };
