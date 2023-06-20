import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ListIcon from "@mui/icons-material/List";

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function TemporaryDrawer() {
  const navigation = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>
        <ListIcon />
      </Button>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="phone-list">
          <NavLink to="/" className="item">
            Home
          </NavLink>
          <NavLink to="/compare" className="item">
            Compare
          </NavLink>

          <button onClick={() => navigation("/dashboard")} className="dash">
            Dashboard
          </button>
        </div>
      </Drawer>
    </div>
  );
}
