const authReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_TOKEN":
      return { ...state, token: action.payload };
    case "SAVE_USER_DATA":
      return {
        ...state,
        userData: action.payload.userData,
        orders: action.payload.orders,
        closed: action.payload.closed,
      };
    case "SHOW_PROFIT":
      return {
        ...state,
        filters: {
          ...state.filters,
          show: "profit",
        },
      };
    case "SHOW_LOSS":
      return {
        ...state,
        filters: {
          ...state.filters,
          show: "loss",
        },
      };
    case "SORT_PROFIT_LOW":
      return { ...state, filters: { ...state.filters, sort: "profitLow" } };
    case "SORT_PROFIT_HIGH":
      return { ...state, filters: { ...state.filters, sort: "profitHigh" } };
    case "SORT_INVEST_LOW":
      return { ...state, filters: { ...state.filters, sort: "investLow" } };
    case "SORT_INVEST_HIGH":
      return { ...state, filters: { ...state.filters, sort: "investHigh" } };
    case "CLEAR_FILTER":
      return { ...state, filters: { show: "", sort: "" } };
    default:
      return { ...state };
  }
};

export { authReducer };
