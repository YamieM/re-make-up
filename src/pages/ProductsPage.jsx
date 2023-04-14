import { FilterForm } from "../components/filterForm";
import { Products } from "../components/products";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/productsReducer";

export const ProductsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  });

  return (
    <main className="index-container">
      <FilterForm />
      <Products />
    </main>
  );
};
