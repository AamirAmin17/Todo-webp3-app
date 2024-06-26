// src/components/PriceChart.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useSelector } from "react-redux";

const PriceChart = () => {
  const orderBook = useSelector((state) => state.orderBook);

  const data = (orderBook.asks || []).map((item) => ({
    price: parseFloat(item.price),
    size: parseFloat(item.size),
  }));

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='price' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type='monotone'
        dataKey='size'
        stroke='#8884d8'
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default PriceChart;
