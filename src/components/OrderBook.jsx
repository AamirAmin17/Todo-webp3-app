// src/components/OrderBook.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useWebSocket } from "../hooks/useWebSocket";
import { setOrderBook } from "../redux/actions";
import TopOfBook from "./TopOfBook";
import PriceChart from "./PriceChart";
import LadderView from "./LadderView";

const OrderBook = () => {
  const dispatch = useDispatch();
  const currencyPair = useSelector((state) => state.currencyPair);
  console.log("currencyPair: ", currencyPair);
  const orderBookData = useWebSocket(
    `wss://ws-feed.pro.coinbase.com`,
    currencyPair
  );

  useEffect(() => {
    if (orderBookData) {
      console.log("orderBookData: ", orderBookData);
      dispatch(setOrderBook(orderBookData));
    }
  }, [orderBookData, dispatch]);

  return (
    <div>
      <h2>Order Book for {currencyPair}</h2>
      <TopOfBook />
      <PriceChart />
      <LadderView />
    </div>
  );
};

export default OrderBook;
