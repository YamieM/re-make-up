import { styled } from "@material-ui/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const StyleBrandInput = styled(TextField)({
  "& label.Mui-focused": {
    color: "hotpink",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "hotpink",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ced4da",
    },
    "&:hover fieldset": {
      border: "1px hotpink solid",
    },
    "&.Mui-focused fieldset": {
      border: "1px hotpink solid",
    },
  },
});

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
