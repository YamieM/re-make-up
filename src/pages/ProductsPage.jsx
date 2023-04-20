import { FilterForm } from "../components/filterForm";
import { Products } from "../components/products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts, fetchProductsError } from "../store/urlReducer";

export const ProductsPage = () => {
  const dispatch = useDispatch();

  const [filterParams, setFilterParams] = useState({
    brandName: sessionStorage.getItem("brandName") || "",
    productType: sessionStorage.getItem("productType") || undefined,
  });

  const { data, isLoading, error } = useSelector(
    (state) => state.productReducer.products
  );

  console.log(data, isLoading);
  useEffect(() => {
    if (!isLoading && !data.length) {
      dispatch(fetchProducts({}));
    }
  }, [data.length, dispatch, isLoading, error, filterParams]);

  return (
    <main className="index-container">
      <FilterForm
        brandName={filterParams.brandName}
        productType={filterParams.productType}
        setFilterParams={setFilterParams}
      />
      {data.length ? (
        <Products
          brandName={filterParams.brandName}
          productType={filterParams.productType}
        />
      ) : (
        <span className="error-active">NOT FOUND</span>
      )}
      {/* <Products
        brandName={filterParams.brandName}
        productType={filterParams.productType}
      /> */}
    </main>
  );
};
