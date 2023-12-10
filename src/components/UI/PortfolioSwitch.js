import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PortfolioSwitch() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const width = window.innerWidth;

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          aria-label=""
          sx={{ marginLeft: width > 1000 ? "200px" : "" }}
        >
          <Tab label="Commercial" {...a11yProps(0)} sx={{ color: "#545454" }} />
          <Tab label="Domestic" {...a11yProps(1)} sx={{ color: "#545454" }} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {/* <PricesTableMen /> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <PricesTableWomen /> */}
      </TabPanel>
    </Box>
  );
}
