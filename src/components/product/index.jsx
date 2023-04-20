import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchSingleProduct } from "../../store/singleProductReducer";

// import defImage from "../../images/defProductImage.jpeg";

export const Product = ({ brand, name, image_link, id }) => {
  const dispatch = useDispatch();

  const setSingleProduct = () => {
    dispatch(fetchSingleProduct({ id: id }));
  };

  return (
    <NavLink
      onClick={setSingleProduct}
      className="item-card"
      to={`/product/${id}`}
    >
      <img src={image_link} className="product-images" alt="" />
      <span className="item-card_products">{`${brand} [${name}]`}</span>
    </NavLink>
  );
};
