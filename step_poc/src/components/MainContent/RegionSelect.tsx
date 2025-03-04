import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { regionFormControlSx, regionSelectSx } from "./MainContent.styles";

interface RegionSelectProps {
  region: string;
  onChange: (event: SelectChangeEvent) => void;
}

const RegionSelect: React.FC<RegionSelectProps> = ({ region, onChange }) => {
  return (
    <FormControl sx={regionFormControlSx}>
      <Select
        value={region}
        onChange={onChange}
        displayEmpty
        sx={regionSelectSx}
      >
        <MenuItem disabled value="">
          Region
        </MenuItem>
        <MenuItem value="Jeddah">Jeddah</MenuItem>
        <MenuItem value="Riyadh">Riyadh</MenuItem>
      </Select>
    </FormControl>
  );
};

export default RegionSelect;
