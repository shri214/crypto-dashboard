import { motion } from "framer-motion";
import { json, useNavigate } from "react-router-dom";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import "./style.css";
import { ConvertNum } from "../../../function/ConvertNum";

const List = ({ ele, ind }) => {
  const navigation = useNavigate();

  const redirect = (element) => {
    localStorage.setItem("item", JSON.stringify(element));
    navigation(`/coin/${element.id}`);
  };
  return (
    <>
      <motion.tr
        className="list-items"
        onClick={() => redirect(ele)}
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: `1.${ind}`, delay: `0.${ind}` }}
      >
        <td className="image-section img-td">
          <img src={ele.image} alt={ele.id} />
          <div>
            <p className="cap td-cap">{ele.symbol.toUpperCase()}-USD</p>
            <p className="coin-name td-coin-name">{ele.name}</p>
          </div>
        </td>
        {ele.price_change_percentage_24h > 0 ? (
          <td className="chip">
            <div className="cur_prices-green td-cur-price">
              <p>{ele.price_change_percentage_24h.toFixed(2)}%</p>
            </div>
            <div className="uptrend rem">
              <TrendingUpIcon />
            </div>
          </td>
        ) : (
          <td className="chip">
            <div className="cur_prices-red td-cur-price">
              <p>{ele.price_change_percentage_24h.toFixed(2)}%</p>
            </div>
            <div className="downtrend rem">
              <TrendingDownIcon />
            </div>
          </td>
        )}

        <td
          className={
            ele.price_change_percentage_24h > 0
              ? "green  price-td-show"
              : "red price-td-show"
          }
        >
          ${ele.current_price.toFixed(2)}
        </td>

        <td className="totals td-vol">${ele.total_volume.toLocaleString()}</td>
        <td className="totals td-vol"> ${ele.market_cap.toLocaleString()}</td>
        <td className="totals converted-cap">
          {`${ConvertNum(ele.market_cap)}`}
        </td>
      </motion.tr>
    </>
  );
};

export default List;
