import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import Select from "@mui/material/Select";
import Loader from "../../Component/Loader";
import { fetchData } from "../../Component/Dashboard/redux/action/actionCreation";
import "./style.css";

export default function SelectCoins({ crypto1, crypto2, handleCoinChange }) {
  let { loading, data, error } = useSelector((state) => state.data);
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

  const style = {
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
  };

  return (
    <div className="crypto-flex">
      <p className="nameOfCrypto">Crypto 1</p>
      <Select
        value={crypto1}
        label="Crypto 1"
        onChange={(event) => handleCoinChange(event, false)}
        sx={style}
      >
        {data
          .filter((item) => item.id != crypto2)
          .map((coin) => (
            <MenuItem value={coin.id}>{coin.name}</MenuItem>
          ))}
      </Select>
      <p className="nameOfCrypto">Crypto 2</p>
      <Select
        value={crypto2}
        label="Crypto 2"
        onChange={(event) => handleCoinChange(event, true)}
        sx={style}
      >
        {data
          .filter((item) => item.id != crypto1)
          .map((coin) => (
            <MenuItem value={coin.id}>{coin.name}</MenuItem>
          ))}
      </Select>
    </div>
  );
}
