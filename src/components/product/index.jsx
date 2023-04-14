// import defImage from "../../images/defProductImage.jpeg";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setSingleProduct } from "../../store/productsReducer";

export const Product = ({ brand, name, image_link, id }) => {
  const dispatch = useDispatch();
  const setSingleProductUrl = () => {
    dispatch(setSingleProduct({}));
  };
  return (
    <NavLink
      onClick={setSingleProductUrl}
      className="item-card"
      to={`/product/${id}`}
    >
      <img src={image_link} className="product-images" alt="" />
      <span className="item-card_products">{`${brand} [${name}]`}</span>
    </NavLink>
  );
};
