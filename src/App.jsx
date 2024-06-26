// src/App.jsx
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers";
import Dropdown from "./components/Dropdown";
import OrderBook from "./components/OrderBook";

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Dropdown />
        <OrderBook />
      </div>
    </Provider>
  );
};

export default App;
