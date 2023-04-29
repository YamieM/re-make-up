import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const ProductColors = ({ product }) => {
  if (product.product_colors?.length) {
    return (
      <div className="colors-div">
        {product.product_colors.length > 3 ? (
          <Accordion
            sx={{
              width: "100%",
              boxShadow: "none",
              border: "1px rgba(99, 68, 68, 0.158) solid",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ height: "40px" }}
            >
              <p>COLORS</p>
            </AccordionSummary>
            <AccordionDetails>
              <div className="colors-section">
                {product.product_colors?.map((color) => {
                  return (
                    <div className="single-color-section">
                      <div
                        className="color-circle"
                        style={{ backgroundColor: `${color.hex_value}` }}
                      />
                      <h4 className="name-of-color">{color.colour_name}</h4>
                    </div>
                  );
                })}
              </div>
            </AccordionDetails>
          </Accordion>
        ) : (
          <div className="colors-section">
            {product.product_colors?.map((color) => {
              return (
                <div className="single-color-section">
                  <div
                    className="color-circle"
                    style={{ backgroundColor: `${color.hex_value}` }}
                  />
                  <h4 className="name-of-color">{color.colour_name}</h4>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  } else {
    return <></>;
  }
};
