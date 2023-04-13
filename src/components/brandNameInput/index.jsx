export const BrandNameInput = ({ setFilterParams }) => {
  const onChangeBrand = (event) => {
    setFilterParams((previousState) => {
      return { ...previousState, brandName: event.target.value };
    });
    sessionStorage.setItem("brandName", event.target.value);
  };

  return (
    <input
      name="filterForm_productBrand"
      type=""
      className="filterForm_input-brand"
      placeholder="Input brand"
      onChange={onChangeBrand}
    />
  );
};
