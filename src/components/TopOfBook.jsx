// src/components/TopOfBook.jsx
import React from "react";
import { useSelector } from "react-redux";

const TopOfBook = () => {
  const orderBook = useSelector((state) => state.orderBook);
  console.log("orderBook: ", orderBook);
  const bestBid = orderBook.bids ? orderBook.bids[0] : {};
  const bestAsk = orderBook.asks ? orderBook.asks[0] : {};

  return (
    <div>
      <h3>Top of Book</h3>
      <p>
        Best Bid: {bestBid?.price} - {bestBid?.size}
      </p>
      <p>
        Best Ask: {bestAsk?.price} - {bestAsk?.size}
      </p>
    </div>
  );
};

export default TopOfBook;
