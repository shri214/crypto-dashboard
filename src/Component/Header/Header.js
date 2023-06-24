import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./header.css";
import TemporaryDrawer from "./Drawer";
import Button from "../Button/index";
// import BasicSwitches from "./switch";
const Header = () => {
  const navigation = useNavigate();
  return (
    <>
      <div className="navbar">
        <NavLink to="/crypto-dashboard" className="items">
          CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
        </NavLink>
        <div className="list">
          {/* <BasicSwitches /> */}
          <NavLink to="/crypto-dashboard" className="item">
            Home
          </NavLink>
          <NavLink to="/compare" className="item">
            Compare
          </NavLink>
          <NavLink to="/watch" className="item">
            WatchList
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
