import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";
import { StyleSelect } from "./styled";

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
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <InputLabel id="demo-simple-select-label">Product type</InputLabel>
      </FormControl>
    </Box>
  );
};
