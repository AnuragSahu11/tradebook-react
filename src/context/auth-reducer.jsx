const authReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_TOKEN":
      return { ...state, token: action.payload };
    case "SAVE_USER_DATA":
      return {
        ...state,
        userData: action.payload.userData,
        orders: action.payload.orders,
      };
    default:
      return { ...state };
  }
};

export { authReducer };
