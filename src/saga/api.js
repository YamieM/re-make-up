import axios from "axios";

export const apiFetchProducts = ({ brand, product_type }) =>
  axios({
    method: "GET",
    url: "http://makeup-api.herokuapp.com/api/v1/products.json",
    params: {
      brand,
      product_type,
    },
  });

export const apiFetchSingleProduct = ({ id }) =>
  axios({
    method: "GET",
    url: `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`,
  });
