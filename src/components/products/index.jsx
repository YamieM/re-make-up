import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Product } from "../product";
import "./style.css";
import { Loader } from "../loader";

export const Products = () => {
  const [state, setState] = useState({
    products: [],
    classLoader: "preloader-active",
    classError: "error-disabled",
  });
  const url = useSelector((state) => state.url.url);
  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        const products = resp.data;
        setState((previousState) => {
          return { ...previousState, products: products };
        });
        setState((previousState) => {
          return { ...previousState, classLoader: "preloader-disabled" };
        });
        if (!!products.length) {
          setState((previousState) => {
            return { ...previousState, classError: "error-active" };
          });
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.status);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log("Error", err.message);
        }
        console.log(err.config);
      });
  }, [setState, url]);

  return (
    <div className="cards">
      {state.products.length ? (
        state.products.map((product) => (
          <Product key={product.id} {...product} />
        ))
      ) : (
        <span className={state.classError}>NOT FOUND</span>
      )}
      <Loader class={state.classLoader} />
    </div>
  );
};
