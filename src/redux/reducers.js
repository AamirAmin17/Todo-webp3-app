// src/redux/reducers.js
import { combineReducers } from "redux";
import { SET_ORDER_BOOK, SET_CURRENCY_PAIR } from "./actions";

const initialOrderBookState = {
  bids: [],
  asks: [],
};

const orderBookReducer = (state = initialOrderBookState, action) => {
  switch (action.type) {
    case SET_ORDER_BOOK:
      return {
        ...state,
        bids: action.payload.bids,
        asks: action.payload.asks,
      };
    default:
      return state;
  }
};

const currencyPairReducer = (state = "BTC-USD", action) => {
  switch (action.type) {
    case SET_CURRENCY_PAIR:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  orderBook: orderBookReducer,
  currencyPair: currencyPairReducer,
});
