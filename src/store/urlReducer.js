const defaultState = {
  url: "http://makeup-api.herokuapp.com/api/v1/products.json",
  singleUrl: "",
};

export const urlReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_URL":
      return { ...state, url: action.payload };
    case "CHANGE_SINGLE_URL":
      return { ...state, singleUrl: action.payload };
    default:
      return state;
  }
};

export const changeUrl = (payload) => ({ type: "CHANGE_URL", payload });
export const setSingleUrl = (payload) => ({
  type: "CHANGE_SINGLE_URL",
  payload,
});
