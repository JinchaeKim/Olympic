import { configureStore } from "@reduxjs/toolkit";
import olympicReducer from "../slices/olympicSlice";

export const store = configureStore({
  reducer: {
    olympic: olympicReducer,
  },
});
