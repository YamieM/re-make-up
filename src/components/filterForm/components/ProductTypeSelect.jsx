import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import styled from "@emotion/styled";
import { Select } from "@mui/material";

const StyleSelect = styled(InputBase)({
  "& + label": {
    backgroundColor: "white",
    padding: "0px 5px",
  },
  "& + label.Mui-focused": {
    color: "hotpink",
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 5px 12px",

    "&:focus": {
      border: "1px hotpink solid",
    },

    "&:hover": {
      border: "1px hotpink solid",
    },
  },
});

export const ProductTypeSelect = (props) => {
  const options = [
    "Blush",
    "Bronzer",
    "Eyebrow",
    "Eyeliner",
    "Eyeshadow",
    "Foundation",
    "Lip liner",
    "Lipstick",
    "Mascara",
    "Nail polish",
  ];
  return (
    <Box>
      <FormControl sx={{ minWidth: 140 }} size="small">
        <Select
          {...props}
          name="filterForm_productType"
          title="Product type"          
          input={<StyleSelect />}
        >
          {options.map((option) => {
            return <MenuItem value={option}>{option}</MenuItem>;
          })}
        </Select>
        <InputLabel id="demo-simple-select-label">Product type</InputLabel>
      </FormControl>
    </Box>
  );
};
