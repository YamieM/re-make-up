import { useDispatch } from "react-redux";
import {
  changeUrl,
  fetchProducts,
  fetchProductsError,
  fetchProductsSuccess,
} from "../../store/urlReducer";
import { getUrl } from "../../helpers/getUrl";

export const FilterFormButton = ({ brandName, productType }) => {
  const dispatch = useDispatch();
  const getFilterParams = (event) => {
    event.preventDefault();
    // dispatch(fetchProductsError());
    dispatch(fetchProducts({ brand: brandName, product_type: productType }));
    // dispatch(changeUrl(getUrl(brandName, productType)));
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
