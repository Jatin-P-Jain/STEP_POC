import React from "react";
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { formControlSx, selectSx } from "./Dashboard.styles";
import { SourceOptions } from "../../../data/sourceOptions";

interface RegionSelectProps {
  region: string;
  onChange: (event: SelectChangeEvent) => void;
}

const SourceSelect: React.FC<RegionSelectProps> = ({ region, onChange }) => {
  return (
    <FormControl sx={formControlSx}>
      <Select value={region} onChange={onChange} displayEmpty sx={selectSx}>
        {SourceOptions.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SourceSelect;
