import { configureStore } from "@reduxjs/toolkit";
import test from "./reducers/test";
import city from "./reducers/City";

const reducer = {
  test,
  city,
};

const store = configureStore({
  reducer,
});

export default store;
