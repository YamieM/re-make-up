const defaultState = {
  products: {
    data: [],
    isLoading: false,
    error: null,
  },
};

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { ...state, products: { ...state.products, isLoading: true } };
       
      case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: {
          ...state.products,
          isLoading: false,
          data: action.payload,
        },
      };
    case "FETCH_PRODUCTS_ERROR":
      return {
        ...state,
        products: {
          ...state.products,
          isLoading: false,
          data: [],
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

/** fetch products actions */

export const fetchProducts = (payload) => ({
  type: "FETCH_PRODUCTS",
  payload,
});
export const fetchProductsSuccess = (payload) => ({
  type: "FETCH_PRODUCTS_SUCCESS",
  payload,
});

export const fetchProductsError = (payload) => ({
  type: "FETCH_PRODUCTS_ERROR",
  payload,
});
