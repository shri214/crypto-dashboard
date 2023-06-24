import { ITEMS } from "../action/actionType";

let initialState = [];

export const dataItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITEMS:
      return [action.payload];
    default:
      return state;
  }
};
