import { useState } from "react";
import { ProductTypeSelect } from "../productTypeSelect";
import { BrandNameInput } from "../brandNameInput";
import { FilterFormButton } from "../filterFormButton";
import "./style.scss";

export const FilterForm = () => {
  const [filterParams, setFilterParams] = useState({
    brandName: sessionStorage.getItem("brandName") || "",
    productType: sessionStorage.getItem("productType") || false,
  });

  return (
    <div className="form-container">
      <h1>Base of makeUp</h1>
      <form action="" name="filterForm" className="filter-form">
        <label>Filter</label>
        <BrandNameInput setFilterParams={setFilterParams} />
        <ProductTypeSelect setFilterParams={setFilterParams} />
        <FilterFormButton
          brandName={filterParams.brandName}
          productType={filterParams.productType}
        />
      </form>
    </div>
  );
};
