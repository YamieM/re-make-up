const defaultState = {
  product: {
    dataSingle: {},
    isLoading: false,
    error: null,
  },
};

export const singleProductReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_SINGLE_PRODUCT":
      return { ...state, product: { ...state.product, isLoading: true } };

    case "FETCH_SINGLE_PRODUCT_SUCCESS":
      return {
        ...state,
        product: {
          ...state.product,
          isLoading: false,
          dataSingle: action.payload,
        },
      };
    case "FETCH_SINGLE_PRODUCT_ERROR":
      return {
        ...state,
        product: {
          ...state.product,
          isLoading: false,
          dataSingle: {},
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

/** fetch products actions */

export const fetchSingleProduct = (payload) => ({
  type: "FETCH_SINGLE_PRODUCT",
  payload,
});
export const fetchSingleProductSuccess = (payload) => ({
  type: "FETCH_SINGLE_PRODUCT_SUCCESS",
  payload,
});

export const fetchSingleProductError = (payload) => ({
  type: "FETCH_SINGLE_PRODUCT_ERROR",
  payload,
});
