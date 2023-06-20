import {
  FETCH_REQUEST,
  FETCH_REQUEST_FAILURE,
  FETCH_REQUEST_SUCCESS,
} from "../action/actionType";

let initialState = {
  loading: true,
  data: [],
  error: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
