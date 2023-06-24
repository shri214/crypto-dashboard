import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import dataReducer from "./reducer/dataReducer";
import { dataItemReducer } from "./reducer/dataItemReducer";

const rootStore = combineReducers({
  data: dataReducer,
  items: dataItemReducer,
});
const store = createStore(rootStore, applyMiddleware(thunk));
export default store;
