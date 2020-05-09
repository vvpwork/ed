import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import testReducer from "./rootReducer";
// We'll use redux-logger just as an example of adding another middleware
import logger from "redux-logger";

const middleware = [...getDefaultMiddleware(), logger];

const preloadedState = {
  red: {}
};

const store = configureStore({
  reducer: { testReducer },
  middleware,
  devTools: process.env.NODE_ENV !== "production",
  preloadedState
});

console.log(testReducer)
export default store;
