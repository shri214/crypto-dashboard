import { useEffect, useState } from "react";
import SelectCoins from "../SelectCoins";
import SelectDays from "../../Coin/SelectDays/index";
import "./style.css";
import { coinObject } from "../../function/coinObject";
import { getCoin } from "../../function/getCoin";
import { getPrice } from "../../function/getPrice";

import { settingChartData } from "../../function/settingChartData";
import CoinInfo from "../../Coin/CoinInfo";
import Loader from "../../Component/Loader";
import LineChart from "../../Coin/LineChart/LineChart";
import List from "../../Component/Dashboard/List/List";
import PriceToggle from "../../Coin/PriceToggle/PriceToggle";

const ComparePage = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState([]);
  const [crypto2Data, setCrypto2Data] = useState([]);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState("prices");
  const [isLoader, setLoader] = useState(true);
  const [days, setDays] = useState(7);

  const handleDaysChange = async (event) => {
    setLoader(true);
    setDays(event.target.value);
    let prices1 = await getPrice(crypto1, event.target.value, priceType);
    let prices2 = await getPrice(crypto2, event.target.value, priceType);
    settingChartData(setChartData, prices1, prices2);
    setLoader(false);
  };

  useEffect(() => {
    coinOnceLoad();
  }, []);

  async function coinOnceLoad() {
    setLoader(true);
    let dataIs1 = await getCoin(crypto1);
    if (dataIs1) {
      let dataIs2 = await getCoin(crypto2);
      coinObject(setCrypto1Data, dataIs1);
      if (dataIs2) {
        coinObject(setCrypto2Data, dataIs2);
        let prices1 = await getPrice(crypto1, days, priceType);
        let prices2 = await getPrice(crypto2, days, priceType);
        settingChartData(setChartData, prices1, prices2);
      }

      setLoader(false);
    }
  }

  const handleCoinChange = async (event, isCrypto2) => {
    setLoader(true);
    if (isCrypto2) {
      setCrypto2(event.target.value);

      const data = await getCoin(event.target.value);
      coinObject(setCrypto2Data, data);

      const price1 = await getCoin(crypto1, days, priceType);
      const price2 = await getCoin(crypto2, days, priceType);

      if (price1.length > 0 && price2.length > 0) {
        settingChartData(setChartData, price1, price2);
      }
    } else {
      setCrypto1(event.target.value);
      const data = await getCoin(event.target.value);
      coinObject(setCrypto1Data, data);
    }
    setLoader(false);
  };

  const handelPriceTypeChange = async (event, newType) => {
    setLoader(true);
    setPriceType(newType);
    const price1 = await getPrice(crypto1, days, newType);
    const price2 = await getPrice(crypto2, days, newType);
    if (price1.length > 0 && price2.length > 0) {
      settingChartData(setChartData, price1, price2);
      console.log(chartData);
      setLoader(false);
    }
  };

  return (
    <>
      <div className="crypto-flex-box">
        <SelectCoins
          crypto1={crypto1}
          handleCoinChange={handleCoinChange}
          crypto2={crypto2}
        />
        <SelectDays
          days={days}
          handleDaysChange={handleDaysChange}
          noPTag={false}
        />
      </div>
      {isLoader ? (
        <Loader />
      ) : (
        <div className="set-comparePage">
          <div className="coin-details">
            <List ele={crypto1Data} ind={0} />
          </div>
          <div className="coin-details">
            <List ele={crypto2Data} ind={1} />
          </div>

          <div className="coin-details back">
            <PriceToggle
              handelPriceTypeChange={handelPriceTypeChange}
              priceType={priceType}
            />

            <LineChart
              chartData={chartData}
              priceType={priceType}
              multiAxis={true}
            />
          </div>
          <CoinInfo header={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo header={crypto2Data.name} desc={crypto2Data.desc} />
        </div>
      )}
    </>
  );
};
export default ComparePage;
