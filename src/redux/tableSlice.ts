import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Row, TableIitem, Tables } from "../types/types";
// import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/react";

type TableSliceState = {
  table: Tables;
  tabelList: string[];
  currentTableName: string;
};

export const initialState: TableSliceState = {
  table: null,
  tabelList: ["cars", "dishes", "contacts", "user", "passport"],
  currentTableName: "cars",
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setTable(state, action: PayloadAction<Tables>) {
      state.table = action.payload;
    },

    setItem(state, action: PayloadAction<TableIitem>) {
      // находим индекс строки таблицы с нашим id
      let itemTableIndex;
      if (state.table) {
        itemTableIndex = state.table.findIndex((row) => {
          console.log("row.id: ", row.id);
          return row.id === action.payload.id;
        });
      }

      // получаем строку и преобзрауем в массив
      let row;
      if (state.table && itemTableIndex !== undefined) {
        row = Object.entries(state.table[itemTableIndex]);
      }

      // в  строке находим элемент с нужным ключом и меняем у его пары значение
      if (row) {
        const itemRowIndex = row.findIndex(
          (item) => item[0] === action.payload.key
        );
        row[itemRowIndex][1] = action.payload.value;
      }

      // возвращаем измененную строку
      if (state.table && itemTableIndex !== undefined && row) {
        console.log("newRow", Object.fromEntries(row) as Row);
        state.table[itemTableIndex] = Object.fromEntries(row) as Row;
      }
    },

    setCurrentTableName(state, action: PayloadAction<number>) {
      state.currentTableName = state.tabelList[action.payload];
    },
  },
});

export const { setTable, setItem, setCurrentTableName } = tableSlice.actions;

export default tableSlice.reducer;
