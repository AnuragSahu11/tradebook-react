import { useState } from "react";
import { useAuth } from "../../context/auth-context";

const Filters = () => {
  const { userDataState, dispatch } = useAuth();
  const [showFilters, setShowFilters] = useState(false);

  const toggleShowFilters = () => {
    setShowFilters((prevState) => !prevState);
  };

  return (
    <div
      className={`${
        showFilters ? "filter-menu-mobile" : "filter-menu-hide"
      } filter-menu p-x-4 p-up-2 dk-shadow m-up-6 flex-c-w`}
    >
      <div className="filter-menu-responsive p-dw-1 flex-row align-center space-between">
        <span>
          <div className="title filter-title is-dark">Filters</div>
          <div
            onClick={toggleShowFilters}
            className="semibold is-3 show-filter-title is-dark"
          >
            Show Filters
          </div>
        </span>
        <span
          onClick={() => dispatch({ type: "CLEAR_FILTER" })}
          className="link-secondary m-up-1 is-2"
        >
          Clear all
        </span>
      </div>
      <div className="list-container">
        <div className="title semibold">Show Only</div>
        <ul className="list list-none">
          <li className="list-items">
            <label className="form-radio-label">
              <input
                onClick={() => dispatch({ type: "SHOW_PROFIT" })}
                checked={userDataState.filters.show === "profit"}
                type="radio"
                name="show"
                defaultChecked=""
              />
              <i />
              <span className="form-radio-button-text is-2 is-medium">
                Profit trades
              </span>
            </label>
          </li>
          <li className="list-items">
            <label className="form-radio-label">
              <input
                onClick={() => dispatch({ type: "SHOW_LOSS" })}
                checked={userDataState.filters.show === "loss"}
                type="radio"
                name="show"
                defaultChecked=""
              />
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
              <input
                onClick={() => dispatch({ type: "SORT_INVEST_HIGH" })}
                checked={userDataState.filters.sort === "investHigh"}
                type="radio"
                name="opinion"
                defaultChecked=""
              />
              <i />
              <span className="form-radio-button-text is-light is-2">
                Investment high to low
              </span>
            </label>
          </li>
          <li className="list-items">
            <label className="form-radio-label">
              <input
                onClick={() => dispatch({ type: "SORT_INVEST_LOW" })}
                checked={userDataState.filters.sort === "investLow"}
                type="radio"
                name="opinion"
                defaultChecked=""
              />
              <i />
              <span className="form-radio-button-text is-light is-2">
                Investment low to high
              </span>
            </label>
          </li>
          <li className="list-items">
            <label className="form-radio-label">
              <input
                onClick={() => dispatch({ type: "SORT_PROFIT_HIGH" })}
                checked={userDataState.filters.sort === "profitHigh"}
                type="radio"
                name="opinion"
                defaultChecked=""
              />
              <i />
              <span className="form-radio-button-text is-light is-2">
                Profit high to low
              </span>
            </label>
          </li>
          <li className="list-items">
            <label className="form-radio-label">
              <input
                onClick={() => dispatch({ type: "SORT_PROFIT_LOW" })}
                checked={userDataState.filters.sort === "profitLow"}
                type="radio"
                name="opinion"
                defaultChecked=""
              />
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
