import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import "./style.css";
import Tooltip from "@mui/material/Tooltip";
// import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { addingItems } from "../../../function/addingItems";
import { removeItem } from "../../../function/removeItem";
import { returningItem } from "../../../function/retuningItem";
import { useDispatch, useSelector } from "react-redux";
import { itemsAdding } from "../redux/action/actionCreationForItem";

const Grid = ({ ele, ind }) => {
  const navigation = useNavigate();
  let dispatch = useDispatch();

  const redirect = (element) => {
    navigation(`/coin/${element.id}`);
  };
  // let items = useSelector((state) => state.items);

  const addToWatchList = (id) => {
    if (localStorage.getItem("item")) {
      let flag = true;
      JSON.parse(localStorage.getItem("item")).forEach((ele) => {
        if (ele === id) {
          flag = false;
          removeItem(id);
          console.log("item is already");
        }
      });
      if (flag) {
        addingItems(id);
      }
    } else {
      addingItems(id);
    }
    returningItem(JSON.parse(localStorage.getItem("item")));
    dispatch(itemsAdding(JSON.parse(localStorage.getItem("item"))));

    console.log(document.getElementById(id));
    // document.getElementById({ ele }).style.color = "blue";
    // items &&
    //   items.forEach((ele) => {
    //     document.getElementById(ele).style.color = "blue";
    //   });
  };

  return (
    <>
      <motion.div
        className={
          ele.price_change_percentage_24h > 0
            ? `listOfCoins greenBack`
            : `listOfCoins redBack`
        }
        key={ind}
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: `1.${ind}`, delay: `0.${ind}` }}
      >
        <div className="upper-List">
          <div className="image-section" onClick={() => redirect(ele)}>
            <img src={ele.image} alt={ele.id} />
            <div>
              <Tooltip title={ele.symbol}>
                <p className="cap">{ele.symbol.toUpperCase()}-USD</p>
              </Tooltip>
              <Tooltip title={ele.name}>
                <p className="coin-name">{ele.name}</p>
              </Tooltip>
            </div>
          </div>
          <Tooltip title={`${ele.name} add to Watch List`}>
            <div
              className={
                ele.price_change_percentage_24h > 0
                  ? "watchListG w"
                  : "watchListR w"
              }
              onClick={() => addToWatchList(ele.id)}
            >
              <StarBorderRoundedIcon id={`${ele.id}`} />
            </div>
          </Tooltip>
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
            <Tooltip title="Total Volume">
              <p className="total">Total Volume: ${ele.total_volume}</p>
            </Tooltip>
            <Tooltip title="Market Capital">
              <p className="total">Market Cap: ${ele.market_cap}</p>
            </Tooltip>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Grid;
