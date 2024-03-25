import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  name: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    changeFilter: {
      reducer: (state, action) => {
        state.name = action.payload;
      },
    },
  },
});

export const selectFilter = (state) => state.filters.name;

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
