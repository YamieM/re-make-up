import { Box } from "@mui/material";
import { SearchButtonGradient } from "./styled";

export const SearchButton = () => {
  return (
    <Box>
      <SearchButtonGradient type="submit">Search</SearchButtonGradient>
    </Box>
  );
};
