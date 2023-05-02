import { NavLink } from "react-router-dom";
import { useCallback, useState } from "react";
import defImage from "../../images/defProductImage.jpeg";

export const Product = ({ brand, name, image_link, id }) => {
  const [img, setImg] = useState(image_link);

  const errorImg = useCallback(() => {
    setImg(defImage);
  }, [setImg]);

  return (
    <NavLink className="item-card" to={`/product/${id}`}>
      <img src={img} onError={errorImg} className="product-images" alt="" />
      <span className="item-card_products">{`${brand} [${name}]`}</span>
    </NavLink>
 
 );
};
