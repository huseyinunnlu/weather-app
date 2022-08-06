import { configureStore } from "@reduxjs/toolkit";
import test from "./reducers/test";

const reducer = {
  test,
};

const store = configureStore({
  reducer,
});

export default store;
