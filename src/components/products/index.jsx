import { useDispatch, useSelector } from "react-redux";
import { Product } from "../product";
import { Loader } from "../loader";
import { useEffect } from "react";
import { fetchProducts } from "../../store/productsReducer";
import "./style.scss";

export const Products = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isRequested } = useSelector(
    (state) => state.productsReducer.products
  );

  useEffect(() => {
    if (!isRequested) dispatch(fetchProducts({}));
  }, [dispatch, isRequested]);

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
