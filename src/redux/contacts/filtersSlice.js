import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  name: "",
  number: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    changeFilter: {
      reducer: (state, action) => {
        state.name = action.payload;
        state.number = action.payload;
      },
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
