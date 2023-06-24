import { ITEMS } from "./actionType";

export const itemsAdding = (cryptoItem) => {
  return {
    type: ITEMS,
    payload: cryptoItem,
  };
};
