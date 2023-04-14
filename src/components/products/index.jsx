import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Product } from "../product";
import { Loader } from "../loader";
import "./style.scss";

export const Products = () => {
  const [state, setState] = useState({
    classLoader: "preloader-active",
    classError: "error-disabled",
  });
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    if (products.length) {
      setState((prev) => {
        return { ...prev, classLoader: "preloader-disabled" };
      });
    }
    if (!!products.length) {
      setState((prev) => {
        return { ...prev, classError: "error-active" };
      });
    }
  }, [products]);

  return (
    <div className="cards">
      {products.length ? (
        products.map((product) => <Product key={product.id} {...product} />)
      ) : (
        <span className={state.classError}>NOT FOUND</span>
      )}
      <Loader class={state.classLoader} />
    </div>
  );
};
