import React, { MouseEvent, useState, useRef } from "react";
import {
  ToggleButtonGroup,
  ToggleButton,
  Popover,
  Box,
  Button,
  TextField,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { toggleButtonGroupSx, toggleButtonSx } from "./Dashboard.styles";
import { timeRangeLabels } from "../../../data/timeRangeOptions";

interface TimeRangeToggleProps {
  timeRange: string;
  onChange: (event: MouseEvent<HTMLElement>, newRange: string | null) => void;
  onCustomApply: (range: [Date | null, Date | null]) => void;
}

const TimeRangeToggle: React.FC<TimeRangeToggleProps> = ({
  timeRange,
  onChange,
  onCustomApply,
}) => {
  // Local state for the custom range selection
  const [customRange, setCustomRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [popoverAnchor, setPopoverAnchor] = useState<HTMLElement | null>(null);

  // Ref for the "Custom Range" toggle button (to anchor the popover)
  const customButtonRef = useRef<HTMLButtonElement>(null);

  const handleToggleChange = (
    event: MouseEvent<HTMLElement>,
    newRange: string | null
  ) => {
    if (newRange !== null) {
      if (newRange === "custom") {
        // Open the popover anchored to the custom toggle button
        setPopoverAnchor(customButtonRef.current);
      }
      onChange(event, newRange);
    }
  };

  const handlePopoverClose = () => {
    setPopoverAnchor(null);
  };

  const handleApplyCustomRange = () => {
    handlePopoverClose();
    onCustomApply(customRange);
  };

  const open = Boolean(popoverAnchor);

  return (
    <>
      <ToggleButtonGroup
        value={timeRange}
        exclusive
        onChange={handleToggleChange}
        aria-label="time range"
        sx={toggleButtonGroupSx}
      >
        {timeRangeLabels.map((label) => {
          let displayText: string;
          if (label === "6 months") {
            displayText = "6 Months";
          } else if (label === "custom") {
            displayText = "Custom Range";
          } else {
            displayText = label.charAt(0).toUpperCase() + label.slice(1);
          }
          return (
            <ToggleButton
              key={label}
              value={label}
              sx={toggleButtonSx}
              aria-label={label}
              ref={label === "custom" ? customButtonRef : undefined}
            >
              {timeRange === label && (
                <CheckIcon fontSize="small" sx={{ mr: 0.5 }} />
              )}
              {displayText}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>

      {/* Popover for custom date range selection */}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Popover
          open={open}
          anchorEl={popoverAnchor}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box sx={{ p: 2 }}>
            <DateRangePicker
              value={customRange}
              onChange={(newValue) => setCustomRange(newValue)}
              // Use the new slots API:
              slots={{ textField: TextField }}
              slotProps={{
                textField: {
                  size: "small",
                  margin: "normal",
                  fullWidth: false,
                },
              }}
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
              <Button
                onClick={handleApplyCustomRange}
                variant="contained"
                size="small"
              >
                Apply
              </Button>
            </Box>
          </Box>
        </Popover>
      </LocalizationProvider>
    </>
  );
};

export default TimeRangeToggle;
