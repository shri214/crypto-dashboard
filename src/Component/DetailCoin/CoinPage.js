import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/index";
import List from "../Dashboard/List/List";
import { coinObject } from "../../function/coinObject";
import "./style.css";
import BackToTop from "../BackToTop/BackToTop";
import CoinInfo from "../../Coin/CoinInfo";
import { getCoin } from "../../function/getCoin";
import { getPrice } from "../../function/getPrice";
import LineChart from "../../Coin/LineChart/LineChart";
import SelectDays from "../../Coin/SelectDays";
import { settingChartData } from "../../function/settingChartData";
import PriceToggle from "../../Coin/PriceToggle/PriceToggle";

const CoinPage = () => {
  const [coin, setCoin] = useState();
  const [isLoader, setLoader] = useState(true);
  let [days, setDays] = useState(7);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState("prices");

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    if (id) {
      fetchingData();
    }
  }, [id]);

  async function fetchingData() {
    let data = await getCoin(id);
    if (data) {
      coinObject(setCoin, data);
      let prices = await getPrice(id, days, priceType);
      if (prices.length > 0) {
        settingChartData(setChartData, prices);
        setLoader(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    setLoader(true);
    setDays(event.target.value);
    let prices = await getPrice(id, event.target.value, priceType);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      setLoader(false);
    }
  };

  const handelPriceTypeChange = async (event, newType) => {
    setLoader(true);
    setPriceType(newType);
    let prices = await getPrice(id, days, newType);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      setLoader(false);
    }
  };

  console.log(coin);
  return (
    <div>
      <BackToTop />

      {isLoader ? (
        <Loader />
      ) : (
        <>
          <div className="coin-details">
            <List ele={coin} ind={0} />
          </div>
          <div className="coin-details back">
            <SelectDays
              handleDaysChange={handleDaysChange}
              days={days}
              noPTag={true}
            />
            <PriceToggle
              handelPriceTypeChange={handelPriceTypeChange}
              priceType={priceType}
            />
            <LineChart chartData={chartData} priceType={priceType} />
          </div>
          <CoinInfo header={coin.name} desc={coin.desc} />
        </>
      )}
    </div>
  );
};

export default CoinPage;
