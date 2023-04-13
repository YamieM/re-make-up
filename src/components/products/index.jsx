import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../product";
import { Loader } from "../loader";
import "./style.scss";
import { fetchProducts } from "../../store/productsReducer";

export const Products = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    products: [],
    classLoader: "preloader-active",
    classError: "error-disabled",
  });
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
    if (products.length) {
      setState((prev) => {
        return { ...prev, classLoader: "preloader-disabled" };
      });
    }
  }, [products, dispatch]);

  return (
    <div className="cards">
      {products.length ? (
        products.map((product) => <Product key={product.id} {...product} />)
      ) : (
        <span className={state.classError}>NOT FOUND</span>
      )}
      {/* <Loader class={state.classLoader} /> */}
    </div>
  );
};
