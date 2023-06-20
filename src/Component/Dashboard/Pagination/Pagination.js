import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";

export default function PaginationControlled({ handlePageChange, page }) {
  //   const [page, setPage] = useState(1);
  //   const handleChange = (event, value) => {
  //     setPage(value);
  //   };

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "white",
    // margin: "2rem 0px",
  };
  return (
    <div style={style}>
      <Pagination
        count={10}
        page={page}
        onChange={(event, value) => handlePageChange(event, value)}
        sx={{
          //   color: "var(--white)",
          "& .Mui-selected ": {
            backgroundColor: "var(--blue) !important",
            color: "#fff !important",
            borderColor: "var(--blue) !important",
          },
          //   & means it is used for parent indiction
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--white) !important",
            // color: "white",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white)",
          },
        }}
      />
    </div>
  );
}
