import { configureStore } from "@reduxjs/toolkit";
import table from "./tableSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { table },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
