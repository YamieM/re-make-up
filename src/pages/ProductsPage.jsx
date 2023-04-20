import { FilterForm } from "../components/filterForm";
import { Products } from "../components/products";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../store/productsReducer";

export const ProductsPage = () => {
  const dispatch = useDispatch();

  const [filterParams, setFilterParams] = useState({
    brandName: sessionStorage.getItem("brandName") || "",
    productType: sessionStorage.getItem("productType") || undefined,
  });

  useEffect(() => {
    dispatch(
      fetchProducts({
        brand: filterParams.brandName,
        product_type: filterParams.productType,
      })
    );
  }, [dispatch]);

  return (
    <main className="index-container">
      <FilterForm
        brandName={filterParams.brandName}
        productType={filterParams.productType}
        setFilterParams={setFilterParams}
      />
      <Products />
    </main>
  );
};
