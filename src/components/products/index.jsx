import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Product } from "../product";
import { Loader } from "../loader";
import "./style.scss";

export const Products = () => {
  const { data, isLoading } = useSelector(
    (state) => state.productReducer.products
  );

  if (isLoading) return <Loader class="preloader-active" />;

  return (
    <div className="cards">
      {data.length ? (
        data.map((product) => <Product key={product.id} {...product} />)
      ) : (
        <span className="error-disabled">NOT FOUND</span>
      )}
    </div>
  );
};
