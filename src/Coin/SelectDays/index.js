import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";
import "./style.css";

export default function SelectDays({ handleDaysChange, days, noPTag }) {
  return (
    <div className="selectionOfDays">
      {noPTag && <p>Price Change IN</p>}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={days}
        onChange={handleDaysChange}
        sx={{
          height: "2.2rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
      </Select>
    </div>
  );
}
