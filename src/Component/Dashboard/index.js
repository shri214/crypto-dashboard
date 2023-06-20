import { useState } from "react";
import "./style.css";
import LabTabs from "./Tabs";

const Dashboard = () => {
  let [searchVal, setSearchVal] = useState("");
  // console.log(searchVal);
  return (
    <div className="info-rendering">
      <input
        type="search"
        placeholder="search"
        className="search"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <LabTabs searchValue={searchVal} />
    </div>
  );
};
export default Dashboard;
