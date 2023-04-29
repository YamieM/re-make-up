import { ProductTypeSelect } from "./components/ProductTypeSelect.jsx";
import { BrandInput } from "./components/BrandInput.jsx";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productsReducer";
import Button from "@mui/material/Button";
import "./style.scss";
import { SearchButton } from "./components/SearchButton.jsx";

export const FilterForm = () => {
  const { isLoading, isRequested } = useSelector(
    (state) => state.productsReducer.products
  );

  const [filterParams, setFilterParams] = useState({
    brand: isRequested ? sessionStorage.getItem("brandName") : "",
    product_type: isRequested ? sessionStorage.getItem("productType") : "",
  });

  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      sessionStorage.setItem("productType", filterParams.product_type);
      sessionStorage.setItem("brandName", filterParams.brand);
      dispatch(fetchProducts(filterParams));
    },
    [dispatch, filterParams]
  );

  const onChangeBrand = useCallback(
    (e) => {
      setFilterParams({ ...filterParams, brand: e.target.value });
    },
    [filterParams]
  );

  const onChangeProductType = useCallback(
    (e) => {
      console.log(e);
      setFilterParams({ ...filterParams, product_type: e.target.value });
    },
    [filterParams]
  );


  return (
    <div className="form-container">
      <h1>Base of makeUp</h1>
      <form
        action=""
        name="filterForm"
        className="filter-form"
        onSubmit={handleSubmit}
      >
        <BrandInput onChange={onChangeBrand} value={filterParams.brand} />
        <ProductTypeSelect
          onChange={onChangeProductType}
          value={filterParams.product_type}
        />
        {isLoading ? (
          <Button type="submit" size="small" disabled variant="contained">
            Search
          </Button>
        ) : (
          <SearchButton />
        )}
      </form>
    </div>
  );
};
