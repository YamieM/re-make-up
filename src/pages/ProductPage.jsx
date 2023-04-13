import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "../styles/aboutProduct.scss";

export const ProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`http://makeup-api.herokuapp.com/api/v1/products/${params.id}.json`)
      .then((resp) => {
        const product = resp.data;
        setProduct(product);
      });
  }, [setProduct, params.id]);

  return (
    <div className="main-container">
      <h1>{product.name}</h1>
      <div className="div-product">
        <img src={product.image_link} className="product-image" alt="" />
        <h3 className="info-about-product">Brand: {product.brand}</h3>
        <h3 className="info-about-product">
          Price: {product.price_sign}
          {product.price}
        </h3>
        <h3 className="info-about-product">
          Rating: {product.rating === null ? "unrated" : product.rating}
        </h3>

        <button className="buy-now-button">Buy Now</button>
        <div className="colors-section">
          {product.product_colors?.map((color) => {
            return (
              <div className="single-color-section">
                <div
                  className="color-circle"
                  style={{ backgroundColor: `${color.hex_value}` }}
                ></div>
                <h4 className="name-of-color">{color.colour_name}</h4>
              </div>
            );
          })}
        </div>
        <p className="other-text">{product.description}</p>
        <p className="other-text">
          Tags:{" "}
          <ul>
            {product.tag_list?.map((tag) => {
              return <li>{tag}</li>;
            })}
          </ul>
        </p>
      </div>
      <NavLink to="/">
        <span className="back-button">Back</span>
      </NavLink>
    </div>
  );
};
