import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./style.css";
export default function PriceToggle({ handelPriceTypeChange, priceType }) {
  return (
    <div className="toggle-prices">
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={(event, newType) => handelPriceTypeChange(event, newType)}
        sx={{
          height: "2rem",
          "& .Mui-selected": {
            color: "var(--blue) !important",
          },
          borderColor: "var(--blue)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid !important",
            color: "var(--blue)",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--blue)",
          },
        }}
      >
        <ToggleButton value="prices" className="toggle-btn">
          Prices
        </ToggleButton>
        <ToggleButton value="market_caps" className="toggle-btn">
          Market_caps
        </ToggleButton>
        <ToggleButton value="total_volumes" className="toggle-btn">
          Total_Volume
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
