// src/redux/actions.js
export const SET_ORDER_BOOK = "SET_ORDER_BOOK";
export const SET_CURRENCY_PAIR = "SET_CURRENCY_PAIR";

export const setOrderBook = (orderBook) => ({
  type: SET_ORDER_BOOK,
  payload: orderBook,
});

export const setCurrencyPair = (currencyPair) => ({
  type: SET_CURRENCY_PAIR,
  payload: currencyPair,
});
