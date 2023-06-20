import { motion } from "framer-motion";
import { json, useNavigate } from "react-router-dom";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import "./style.css";

const Grid = ({ ele, ind }) => {
  const navigation = useNavigate();

  const redirect = (element) => {
    localStorage.setItem("item", JSON.stringify(element));
    navigation(`/coin/${element.id}`);
  };
  return (
    <>
      <motion.div
        className={
          ele.price_change_percentage_24h > 0
            ? `listOfCoins greenBack`
            : `listOfCoins redBack`
        }
        onClick={() => redirect(ele)}
        key={ind}
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: `1.${ind}`, delay: `0.${ind}` }}
      >
        <div className="image-section">
          <img src={ele.image} alt={ele.id} />
          <div>
            <p className="cap">{ele.symbol.toUpperCase()}-USD</p>
            <p className="coin-name">{ele.name}</p>
          </div>
        </div>
        {ele.price_change_percentage_24h > 0 ? (
          <div className="chip-green">
            <div className="cur_prices-green">
              <p>{ele.price_change_percentage_24h.toFixed(2)}%</p>
            </div>
            <div className="uptrend">
              <TrendingUpIcon />
            </div>
          </div>
        ) : (
          <div className="chip-red">
            <div className="cur_prices-red">
              <p>{ele.price_change_percentage_24h.toFixed(2)}%</p>
            </div>
            <div className="downtrend">
              <TrendingDownIcon />
            </div>
          </div>
        )}

        <div className="prices">
          <div
            className={ele.price_change_percentage_24h > 0 ? "green" : "red"}
          >
            <h3>${ele.current_price}</h3>
          </div>
          <div>
            <p className="total">Total Volume: ${ele.total_volume}</p>
            <p className="total">Market Cap: ${ele.market_cap}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Grid;
