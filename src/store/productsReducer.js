const defaultState = {
  products: [],
  singleProduct: {},
};

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    // case "SET_PRODUCTS":
    //   return { ...state, products: action.payload };
    case "SET_SINGLE_PRODUCT":
      return { ...state, singleProduct: action.payload };
    default:
      return state;
  }
};

export const setProducts = (payload) => ({ type: "SET_PRODUCTS", payload });
export const setSingleProduct = (payload) => ({
  type: "SET_SINGLE_PRODUCT",
  payload,
});
// export const fetchProducts = () => ({ type: "FETCH_PRODUCTS" });
export const fetchSingleProduct = () => ({ type: "FETCH_SINGLE_PRODUCT" });
