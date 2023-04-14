import { NavLink } from "react-router-dom";

export const ProductInfo = ({ product }) => {
  return (
    <div className="product-info">
      <img src={product.image_link} className="product-image" alt="" />
      <div className="product-info-text">
        <h3 className="info-about-product">Brand: {product.brand}</h3>
        <h3 className="info-about-product">
          Price: {product.price_sign}
          {product.price}
        </h3>
        <h3 className="info-about-product">
          Rating: {product.rating === null ? "unrated" : `${product.rating} ✭ `}
        </h3>
        <NavLink target="_blank" to={product.product_link}>
          <button className="buy-now-button">Buy Now</button>
        </NavLink>
      </div>
    </div>
  );
};
