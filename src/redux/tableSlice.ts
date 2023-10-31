import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Row, TableIitem, Tables } from "../types/types";
import { fetchTable } from "./asyncActions";

type TableSliceState = {
  table: Tables;
  tabelList: string[];
  currentTable: string;
  error: string;
  isLoading: boolean;
};

export const initialState: TableSliceState = {
  table: null,
  tabelList: [
    "persons",
    "passports",
    "contacts",
    "addresses",
    "driverLicenses",
    "cars",
    "workplaces",
    "bankCards",
    "families",
    "policies",
  ],
  currentTable: "persons",
  error: "",
  isLoading: false,
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
        const itemRowIndex = row.findIndex((item) => item[0] === action.payload.key);
        row[itemRowIndex][1] = action.payload.value;
      }

      // возвращаем измененную строку
      if (state.table && itemTableIndex !== undefined && row) {
        state.table[itemTableIndex] = Object.fromEntries(row) as Row;
      }
    },

    setCurrentTableName(state, action: PayloadAction<number>) {
      state.currentTable = state.tabelList[action.payload];
    },

    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },

  extraReducers: (builder) => {
    // get table
    builder.addCase(fetchTable.pending, (state) => {
      state.table = null;
      state.isLoading = true;
    });

    builder.addCase(fetchTable.fulfilled, (state, action) => {
      state.table = action.payload.data;
      state.currentTable = action.payload.currentTable;
      state.isLoading = false;
    });

    builder.addCase(fetchTable.rejected, (state) => {
      state.table = null;
      state.isLoading = false;
    });
  },
});

export const { setTable, setItem, setCurrentTableName, setError } = tableSlice.actions;

export default tableSlice.reducer;
