import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductInfo } from "../../components/productInfo";
import { ProductColors } from "../../components/productColors";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../store/singleProductReducer";
import { Loader } from "../loader/";
import "../../styles/aboutProduct.scss";

export const AboutProduct = () => {
  const navigate = useNavigate();
  const params = useParams();

  const dispatch = useDispatch();
  const { dataSingle, isLoading } = useSelector(
    (state) => state.singleProductReducer.product
  );

  useEffect(() => {
    if (!dataSingle.length) {
      dispatch(fetchSingleProduct({ id: params.id }));
    }
  }, [dataSingle.length, dispatch, params.id]);

  console.log(dataSingle);
  if (isLoading) return <Loader class="preloader-product-active" />;

  return (
    <div className="main-container">
      <h1 className="product-name">{dataSingle.name}</h1>
      <div className="div-product">
        <ProductInfo product={dataSingle} />
        <ProductColors product={dataSingle} />
        <p className="other-text">Description: {dataSingle.description}</p>
        Tags:
        <ul className="other-text">
          {dataSingle.tag_list?.map((tag) => {
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
