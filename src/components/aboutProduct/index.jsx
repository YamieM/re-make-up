import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../styles/aboutProduct.scss";
import { ProductInfo } from "../../components/productInfo";
import { ProductColors } from "../../components/productColors";

export const AboutProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
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
      <h1 className="product-name">{product.name}</h1>
      <div className="div-product">
        <ProductInfo product={product} />
        <ProductColors product={product} />
        <p className="other-text">Description: {product.description}</p>
        Tags:
        <ul className="other-text">
          {product.tag_list?.map((tag) => {
            return <li>{tag}</li>;
          })}
        </ul>
      </div>
      <span onClick={() => navigate(-1)} className="back-button">
        Back
      </span>
    </div>
  );
};
