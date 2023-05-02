import Box from "@mui/material/Box";
import { StyleBrandInput } from "./styled";

export const BrandInput = (props) => {
  return (
    <Box>
      <StyleBrandInput
        {...props}
        label="Brand"
        variant="outlined"
        size="small"
      />
    </Box>
  );
};
