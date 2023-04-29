import PropTypes from "prop-types";
import Box from "@mui/material/Box";

export const TabPanel = (props) => {
  const { children, value, index, product, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box sx={{ p: 3 }}>
        {index === 1 ? (
          product.tag_list?.length ? (
            <div>
              <ul className="other-text">
                {product.tag_list?.map((tag) => {
                  return <li>{tag}</li>;
                })}
              </ul>
            </div>
          ) : (
            <p>No tags</p>
          )
        ) : (
          <p className="other-text"> {product.description}</p>
        )}
      </Box>
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  product: PropTypes.object,
};

export const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};
