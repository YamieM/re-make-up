const defaultState = {
  url: "http://makeup-api.herokuapp.com/api/v1/products.json",
};

export const urlReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_URL":
      return { ...state, url: action.payload };
    default:
      return state;
  }
};

export const changeUrl = (payload) => ({ type: "CHANGE_URL", payload });
