import React, { useState, useEffect } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Dashboard/redux/action/actionCreation";
import Grid from "../Dashboard/Grid/Grid";
import List from "../Dashboard/List/List";
import Loader from "../Loader";
import BackToTop from "../BackToTop/BackToTop";
import "./style.css";

const WatchList = () => {
  const [value, setValue] = useState("Grid");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("item")) || []
  );

  let { loading, data, error } = useSelector((state) => state.data);
  let a = useSelector((state) => state.items);
  console.log("item form reducer", a);
  let dispatch = useDispatch();

  let crypto = [];
  useEffect(() => {
    dispatch(fetchData());
    console.log("fetch data is called");
  }, []);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("item")));
    console.log("changed");
  }, [a]);

  if (localStorage.getItem("item")) {
    crypto = items;
    console.log(items, "crypto");
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  console.log("item is changed");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const themes = createTheme({
    palette: {
      primary: { main: "#3A80E9" },
    },
  });

  // use this obj as a style in tabs
  const style = {
    color: "var(--white)",
    fontFamily: "Intern",
    fontWeight: 600,
  };

  return (
    <>
      {crypto.length <= 0 ? (
        <div> not yet</div>
      ) : (
        <div>
          <BackToTop />
          <ThemeProvider theme={themes}>
            <TabContext value={value}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                variant="fullWidth"
              >
                <Tab label="Grid" value="Grid" sx={style} />
                <Tab label="List" value="List" sx={style} />
              </TabList>

              <TabPanel value="Grid">
                <div className="Grid-grid">
                  {data
                    .filter((ele) => crypto.includes(ele.id))

                    .map((ele, ind) => {
                      return <Grid ele={ele} ind={ind} />;
                    })}
                </div>
              </TabPanel>
              <TabPanel value="List">
                <table className="list-grid">
                  {data
                    .filter((ele) => crypto.includes(ele.id))
                    .map((ele, ind) => {
                      return <List ele={ele} ind={ind} />;
                    })}
                </table>
              </TabPanel>
            </TabContext>
          </ThemeProvider>
        </div>
      )}
    </>
  );
};
export default WatchList;
