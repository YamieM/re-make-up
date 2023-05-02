import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { TabPanel, a11yProps } from "./TabPanel";

export const TabsProduct = ({ product }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "30px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Description" {...a11yProps(1)} />
          <Tab label="Tags" {...a11yProps(0)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={1} product={product}></TabPanel>
      <TabPanel value={value} index={0} product={product}></TabPanel>
    </Box>
  );
};
