import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const SearchButtonGradient = styled(Button)({
  background: "linear-gradient(45deg, #FF7373 30%, #E19E81 90%)",
  border: 0,
  borderRadius: 3,
  color: "white",
  height: 30,
  width: 76,
  "&:hover": {
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
});

export const SearchButton = () => {
  return (
    <Box width="80px">
      <SearchButtonGradient type="submit">Search</SearchButtonGradient>
    </Box>
  );
};
