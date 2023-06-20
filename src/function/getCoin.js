import axios from "axios";

export const getCoin = (id) => {
  let coin = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((res) => {
      // console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.log("error is ", error);
    });
  return coin;
};
