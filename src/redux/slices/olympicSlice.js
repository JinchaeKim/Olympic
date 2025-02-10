import { createSlice } from "@reduxjs/toolkit";

const defaultNation = [];

const olympicSlice = createSlice({
  name: "olympic",
  defaultNation,
  reducers: {
    addNewItem: (state, action) => {
      return [...state, action.payload];
    },
    removeNation: (state, action) => {
      return state.filter((i) => {
        return i.id !== action.payload.id;
      });
    },
    upDate: (state, action) => {
      const findNation = state.find((el) => {
        return el.name === action.payload.name;
      });
      const mapNation = state.map((el) => {
        if (el.name === findNation.name) {
          return { ...state, id: el.id };
        }
        return [...state, mapNation];
      });
    },
  },
});

export const { addNewItem, removeNation } = olympicSlice.actions;

export default olympicSlice.reducer;
