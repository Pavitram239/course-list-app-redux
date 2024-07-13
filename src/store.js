import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./reducers/courseReducers";

const store = configureStore({
  reducer: coursesReducer,
});

export default store;
