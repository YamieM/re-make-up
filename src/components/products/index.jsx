import { useSelector } from "react-redux";
import { Product } from "../product";
import { Loader } from "../loader";
import "./style.scss";

export const Products = () => {
  const { data, isLoading } = useSelector(
    (state) => state.productsReducer.products
  );

  if (isLoading) return <Loader class="preloader-active" />;

  return (
    <div className="cards">
      {data.length ? (
        data.map((product) => <Product key={product.id} {...product} />)
      ) : (
        <span className="error-active">BRAND NOT FOUND</span>
      )}
    </div>
  );
};
