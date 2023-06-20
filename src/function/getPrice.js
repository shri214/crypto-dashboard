import axios from "axios";

export const getPrice = (id, days, newType) => {
  let priceData = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily&precision=2`
    )
    .then((res) => {
      return res.data[newType];
    })
    .catch((err) => {
      console.log(err);
    });
  return priceData;
};
