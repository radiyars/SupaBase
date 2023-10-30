import { createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../config/supabaseClient";
import { setError, setItem } from "./tableSlice";

export const fetchTable = createAsyncThunk(
  "table/fetchTableStatus",
  async (currentTable: string, thunkAPI) => {
    const { data, error } = await supabase.from(currentTable).select().order("id");

    if (data) {
      thunkAPI.dispatch(setError(""));
    }

    if (error) {
      thunkAPI.dispatch(setError(`Fetching error! ${error.message}`));
    }
    return { data, currentTable };
  }
);

type FetchItems = {
  currentTable: string;
  key: string;
  value: string;
  id: string;
};

export const updateItem = createAsyncThunk(
  "table/updateItemStatus",
  async (params: FetchItems, thunkAPI) => {
    const { currentTable, key, value, id } = params;
    const { data, error } = await supabase
      .from(currentTable)
      .update({ [key]: value })
      .eq("id", id)
      .select();

    if (data) {
      thunkAPI.dispatch(setError(""));
      thunkAPI.dispatch(setItem({ id: Number(id), key, value }));
    }

    if (error) {
      thunkAPI.dispatch(setError(`Fetching error! ${error.message}`));
    }

    return data;
  }
);
