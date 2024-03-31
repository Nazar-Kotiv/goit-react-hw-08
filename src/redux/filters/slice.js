import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  values: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    changeFilter: {
      reducer: (state, action) => {
        state.values = action.payload;
      },
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
