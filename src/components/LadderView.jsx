// src/components/LadderView.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";

const LadderView = () => {
  const [increment, setIncrement] = useState(0.01);
  const orderBook = useSelector((state) => state.orderBook);

  const aggregateData = (data, increment) => {
    const aggregated = {};
    data.forEach((record) => {
      const price = Math.floor(record.price / increment) * increment;
      if (!aggregated[price]) {
        aggregated[price] = 0;
      }
      aggregated[price] += record.size;
    });
    return Object.keys(aggregated).map((price) => ({
      price,
      size: aggregated[price],
    }));
  };

  const aggregatedBids = aggregateData(orderBook.bids || [], increment);
  const aggregatedAsks = aggregateData(orderBook.asks || [], increment);

  return (
    <div>
      <h3>Ladder View</h3>
      <label>
        Price Increment:
        <select
          onChange={(e) => setIncrement(Number(e.target.value))}
          value={increment}>
          <option value={0.01}>0.01</option>
          <option value={0.05}>0.05</option>
          <option value={0.1}>0.10</option>
        </select>
      </label>
      <div>
        <h4>Bids</h4>
        {aggregatedBids.map((bid, index) => (
          <div key={index}>
            {bid.price.toFixed(2)} - {bid.size.toFixed(2)}
          </div>
        ))}
      </div>
      <div>
        <h4>Asks</h4>
        {aggregatedAsks.map((ask, index) => (
          <div key={index}>
            {ask.price.toFixed(2)} - {ask.size.toFixed(2)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LadderView;
