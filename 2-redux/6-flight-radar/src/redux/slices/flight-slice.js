import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions";

const initialState = {
  isLoading: true,
  error: null,
  flights: [],
  searchTerm: "",
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFlights.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFlights.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
    builder.addCase(getFlights.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.flights = payload;
    });
  },
});

export const { setSearchTerm } = flightSlice.actions;
export default flightSlice.reducer;
