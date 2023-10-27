import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Table } from "../types/types";

type TableSliceState = {
  table: Table;
};

// данные одного элемента таблицы
export type TableIitem = {
  key: string;
  id: number;
  value: string | number;
};

export const initialState: TableSliceState = {
  table: null,
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setTable(state, action: PayloadAction<Table>) {
      state.table = action.payload;
    },

    // setItem(state, action: PayloadAction<TableIitem>) {
    //   state.table = action.payload;
    // },
  },
});

export const { setTable } = tableSlice.actions;

export default tableSlice.reducer;
