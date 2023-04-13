// import defImage from "../../images/defProductImage.jpeg";

import { NavLink } from "react-router-dom";

export const Product = ({ brand, name, image_link, id }) => {
  return (
    <div>
      <NavLink className="item-card" to={`/product/${id}`}>
        <img src={image_link} className="product-images" alt="" />
        <span className="item-card_products">{`${brand} [${name}]`}</span>
      </NavLink>
    </div>
  );
};
