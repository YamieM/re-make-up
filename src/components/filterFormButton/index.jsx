import { useDispatch } from "react-redux";
import { changeUrl } from "../../store/urlReducer";
import { getUrl } from "../../helpers/getUrl";
// import { fetchProducts } from "../../store/productsReducer";

export const FilterFormButton = ({ brandName, productType }) => {
  const dispatch = useDispatch();
  const getFilterParams = (event) => {
    dispatch(changeUrl(getUrl(brandName, productType)));
    event.preventDefault();
    // dispatch(fetchProducts());
  };

  return (
    <input
      type="submit"
      name="submitBtn"
      value="Search"
      onClick={getFilterParams}
    />
  );
};
