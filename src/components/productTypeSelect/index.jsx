export const ProductTypeSelect = ({ setFilterParams }) => {
  const onChangeProductType = (event) => {
    setFilterParams((previousState) => {
      return { ...previousState, productType: event.target.value };
    });
    sessionStorage.setItem("productType", event.target.value);
  };

  return (
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
  );
};
