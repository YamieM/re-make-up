export const getUrl = (brandName, productType) => {
  switch ((brandName, productType)) {
    case brandName.length > 0 && !!productType:
      return `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandName}`;
    case brandName.length > 0 && productType:
      return `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandName}&product_type=${productType}`;
    case brandName.length === 0 && productType:
      return `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${productType}`;
    default:
      return `http://makeup-api.herokuapp.com/api/v1/products.json`;
  }
};
