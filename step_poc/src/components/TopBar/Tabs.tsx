import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { tabIndicatorProps, tabsSx } from "./TopBar.styles";
import { TabData, tabsData } from "../../data/topBarTabs";

const TabsNavigation: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      centered
      sx={tabsSx}
      TabIndicatorProps={tabIndicatorProps}
    >
      {tabsData.map((tab: TabData, index: number) => (
        <Tab
          key={index}
          label={tab.label}
          disabled={tab.disabled}
          disableRipple
        />
      ))}
    </Tabs>
  );
};

export default TabsNavigation;
