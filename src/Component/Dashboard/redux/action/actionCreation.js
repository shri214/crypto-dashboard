import {
  FETCH_REQUEST,
  FETCH_REQUEST_FAILURE,
  FETCH_REQUEST_SUCCESS,
} from "./actionType";
import axios from "axios";

export const fetch_request = () => {
  return {
    type: FETCH_REQUEST,
  };
};
export const fetch_request_success = (response) => {
  return {
    type: FETCH_REQUEST_SUCCESS,
    payload: response,
  };
};
export const fetch_request_failure = (error) => {
  return {
    type: FETCH_REQUEST_FAILURE,
    payload: error,
  };
};

export const fetchData = () => (dispatch) => {
  dispatch(fetch_request());
  axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    )
    .then((res) => dispatch(fetch_request_success(res.data)))
    .catch((err) => dispatch(fetch_request_failure(err)));
};
