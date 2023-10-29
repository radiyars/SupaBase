import { createAsyncThunk } from "@reduxjs/toolkit";
import { Tables } from "../types/types";

export type FetchItems = {
  currentTable: string;
  sortProperty: string;
};

// export const fetchTable = createAsyncThunk<Tables, FetchItems>(
//   "items/fetchItemsStatus",
//   async (params) => {
//     const { currentPage, categoryId, sortProperty, search } = params;
//     const { data } = await axios.get<Item[]>(
//       `https://64dc883ce64a8525a0f6a48c.mockapi.io/items?page=${currentPage}&limit=4&
// 		${categoryId}&sortBy=${sortProperty}&${search}`
//     );
//     return data;
//   }
// );

// export const fetchItems = createAsyncThunk<Item[], FetchItems>(
//   "items/fetchItemsStatus",
//   async (params) => {
//     const { currentPage, categoryId, sortProperty, search } = params;
//     const { data } = await axios.get<Item[]>(
//       `https://64dc883ce64a8525a0f6a48c.mockapi.io/items?page=${currentPage}&limit=4&
// 		  ${categoryId}&sortBy=${sortProperty}&${search}`
//     );
//     return data;
//   }
// );
