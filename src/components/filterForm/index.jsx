import { ProductTypeSelect } from "../productTypeSelect";
import { BrandNameInput } from "../brandNameInput";
import { FilterFormButton } from "../filterFormButton";
import "./style.scss";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/productsReducer";

export const FilterForm = () => {
  const [filterParams, setFilterParams] = useState({
    brand: sessionStorage.getItem("brandName") || "",
    product_type: sessionStorage.getItem("productType") || undefined,
  });

  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
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

  console.log(filterParams);

  return (
    <div className="form-container">
      <h1>Base of makeUp</h1>
      <form
        action=""
        name="filterForm"
        className="filter-form"
        onSubmit={handleSubmit}
      >
        <label>Filter</label>
        <BrandNameInput onChange={onChangeBrand} value={filterParams.brand} />
        <ProductTypeSelect
          setFilterParams={onChangeProductType}
          value={filterParams.product_type}
        />
        {/* <FilterFormButton
          brandName={filterParams.brandName}
          productType={filterParams.productType}
        /> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
