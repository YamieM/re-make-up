import { FilterForm } from "../components/filterForm";
import { Products } from "../components/products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/productsReducer";

export const ProductsPage = () => {
  const dispatch = useDispatch();

  const { isDataFetched } = useSelector(
    (state) => state.productsReducer.products
  );

  useEffect(() => {
    dispatch(fetchProducts({}));
  }, [dispatch]);

  return (
    <main className="index-container">
      <FilterForm />
      <Products />
    </main>
  );
};
