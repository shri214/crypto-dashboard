import React, { useState, useEffect } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/action/actionCreation";
import Grid from "./Grid/Grid";
import List from "./List/List";
import PaginationControlled from "./Pagination/Pagination";
import Loader from "../Loader";
import BackToTop from "../BackToTop/BackToTop";

export default function LabTabs({ searchValue }) {
  const [value, setValue] = useState("Grid");
  const [page, setPage] = useState(1);
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(10);

  let { loading, data, error } = useSelector((state) => state);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(searchValue);

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

  // page handel

  const handlePageChange = (event, value) => {
    setPrev((value - 1) * 10);
    setNext(value * 10);
    setPage(value);
    console.log(value);
  };

  return (
    <>
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
              {searchValue
                ? data
                    .filter((value) =>
                      value.name
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    )
                    .map((ele, ind) => {
                      return <Grid ele={ele} ind={ind} />;
                    })
                : data.slice(prev, next).map((ele, ind) => {
                    return <Grid ele={ele} ind={ind} />;
                  })}
            </div>
          </TabPanel>
          <TabPanel value="List">
            <table className="list-grid">
              {searchValue
                ? data
                    .filter((value) =>
                      value.name
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    )
                    .map((ele, ind) => {
                      return <List ele={ele} ind={ind} />;
                    })
                : data.slice(prev, next).map((ele, ind) => {
                    return <List ele={ele} ind={ind} />;
                  })}
            </table>
          </TabPanel>
        </TabContext>
      </ThemeProvider>
      <PaginationControlled handlePageChange={handlePageChange} page={page} />
    </>
  );
}
