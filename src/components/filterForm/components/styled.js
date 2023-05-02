import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";

export const StyleBrandInput = styled(TextField)({
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

export const StyleSelect = styled(InputBase)({
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

export const SearchButtonGradient = styled(Button)({
  background: "linear-gradient(45deg, #FF7373 30%, #E19E81 90%)",
  border: 0,
  borderRadius: 3,
  color: "white",
  height: 40,
  width: 76,
  "&:hover": {
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
});
