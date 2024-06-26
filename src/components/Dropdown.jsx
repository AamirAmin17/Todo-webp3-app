// src/components/Dropdown.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { setCurrencyPair } from "../redux/actions";

const Dropdown = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setCurrencyPair(e.target.value));
  };

  return (
    <select onChange={handleChange}>
      <option value='BTC-USD'>BTC-USD</option>
      <option value='ETH-USD'>ETH-USD</option>
      <option value='LTC-USD'>LTC-USD</option>
      <option value='BCH-USD'>BCH-USD</option>
    </select>
  );
};

export default Dropdown;
