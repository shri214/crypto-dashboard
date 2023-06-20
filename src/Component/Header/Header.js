import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./header.css";
import TemporaryDrawer from "./Drawer";
import Button from "../Button/index";
import BasicSwitches from "./switch";
const Header = () => {
  const navigation = useNavigate();
  return (
    <>
      <div className="navbar">
        <NavLink to="/" className="items">
          CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
        </NavLink>
        <div className="list">
          {/* <BasicSwitches /> */}
          <NavLink to="/" className="item">
            Home
          </NavLink>
          <NavLink to="/compare" className="item">
            Compare
          </NavLink>
          <Button
            clName={"dash"}
            text={"Dashboard"}
            onClick={() => navigation("/dashboard")}
          />
        </div>
        <div className="mobile-drawer">
          <TemporaryDrawer />
        </div>
      </div>
    </>
  );
};

export default Header;
