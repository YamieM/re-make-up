import { FilterForm } from "../components/filterForm";
import { Products } from "../components/products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/urlReducer";

export const ProductsPage = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(
    (state) => state.productReducer.products
  );

  console.log(data, isLoading);
  useEffect(() => {
    if (!isLoading && !data.length) {
      dispatch(fetchProducts({}));
    }
  }, [data.length, dispatch, isLoading]);

  return (
    <main className="index-container">
      <FilterForm />
      <Products />
    </main>
  );
};
