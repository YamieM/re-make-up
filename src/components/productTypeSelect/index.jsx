export const ProductTypeSelect = (props) => {
  return (
    <select
      {...props}
      name="filterForm_productType"
      className="filter-form_tags-list"
      title="Product type"
      defaultValue='Product type'
    >
      <option value={undefined} disabled>
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
