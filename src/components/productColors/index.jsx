export const ProductColors = ({ product }) => {
  return (
    <div className="colors-div">
      <div className="colors-section">
        {product.product_colors?.map((color) => {
          return (
            <div className="single-color-section">
              <div
                className="color-circle"
                style={{ backgroundColor: `${color.hex_value}` }}
              ></div>
              <h4 className="name-of-color">{color.colour_name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};
