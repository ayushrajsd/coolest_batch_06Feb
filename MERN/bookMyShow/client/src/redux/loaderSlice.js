import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader", // name of the slice, used for action types,
  initialState: {
    loading: false, // initial state
  },
  reducers: {
    ShowLoading: (state) => {
      state.loading = true; // mutable way of changing the state - immer.js
    },
    HideLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { ShowLoading, HideLoading } = loaderSlice.actions;
export default loaderSlice.reducer; // reducer function
