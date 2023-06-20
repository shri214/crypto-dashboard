import * as React from "react";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function BasicSwitches() {
  const changeBackground = () => {
    console.log("change back ground");
  };
  return (
    <div onClick={changeBackground}>
      <Switch {...label} defaultChecked />
    </div>
  );
}
