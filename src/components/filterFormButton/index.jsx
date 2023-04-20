import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productsReducer";

export const FilterFormButton = ({ brandName, productType }) => {
  const { isLoading } = useSelector((state) => state.productsReducer.products);
  const dispatch = useDispatch();
  const getFilterParams = (event) => {
    event.preventDefault();
    dispatch(fetchProducts({ brand: brandName, product_type: productType }));
  };
  if (isLoading)
    return <input type="submit" name="submitBtn" value="Search" disabled />;
  return (
    <input
      type="submit"
      name="submitBtn"
      value="Search"
      onClick={getFilterParams}
    />
  );
};
