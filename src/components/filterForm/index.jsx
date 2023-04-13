import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUrl } from "../../store/urlReducer";
import { getUrl } from "../../helpers/getUrl";
import "./style.scss";

export const FilterForm = () => {
  const dispatch = useDispatch();

  const [filterParams, setFilterParams] = useState({
    brandName: "",
    productType: false,
  });

  const onChangeBrand = (event) => {
    setFilterParams((previousState) => {
      return { ...previousState, brandName: event.target.value };
    });
    sessionStorage.setItem("brandName", event.target.value);
  };

  const onChangeProductType = (event) => {
    setFilterParams((previousState) => {
      return { ...previousState, productType: event.target.value };
    });
    sessionStorage.setItem("productType", event.target.value);
  };

  const getFilterParams = (event) => {
    dispatch(
      changeUrl(getUrl(filterParams.brandName, filterParams.productType))
    );
    event.preventDefault();
  };

  return (
    <div className="form-container">
      <h1>Base of makeUp</h1>
      <form action="" name="filterForm" className="filter-form">
        <label>Filter</label>
        <input
          name="filterForm_productBrand"
          type=""
          className="filterForm_input-brand"
          placeholder="Input brand"
          onChange={onChangeBrand}
        />
        <select
          name="filterForm_productType"
          className="filter-form_tags-list"
          title="Product type"
          onChange={onChangeProductType}
          defaultValue={false}
        >
          <option value={false} disabled>
            Product type
          </option>
          <option value="Blush">Blush</option>
          <option value="Bronzer">Bronzer</option>
          <option value="Eyebrow">Eyebrow</option>
          <option value="Eyeliner">Eyeliner</option>
          <option value="Eyeshadow">Eyeshadow</option>
          <option value="Foundation">Foundation</option>
          <option value="Lip liner">Lip liner</option>
          <option value="Lipstick">Lipstick</option>
          <option value="Mascara">Mascara</option>
          <option value="Nail polish">Nail polish</option>
        </select>
        <input
          type="submit"
          name="submitBtn"
          value="Search"
          onClick={getFilterParams}
        />
      </form>
    </div>
  );
};
