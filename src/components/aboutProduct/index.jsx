import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductInfo } from "../../components/productInfo";
import { ProductColors } from "../../components/productColors";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../store/productsReducer";
import { getSingleUrl } from "../../helpers/getSingleUrl";
import { Loader } from "../loader/";
import "../../styles/aboutProduct.scss";

export const AboutProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.singleProduct);
  const [classLoader, setState] = useState("preloader-product-active");

  // useEffect(() => {   
  //   if (product.id) {
  //     setState("preloader-disabled");
  //   }
  //   console.log(product);
  //   dispatch(fetchSingleProduct());
  // }, [dispatch, params.id, setState, product]);

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
      <Loader class={classLoader} />
    </div>
  );
};
