import { createSlice } from "@reduxjs/toolkit";

const userSliceC = createSlice({
  name: "user-c",
  initialState: { isLoading: true, error: null, users: [] },
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setData: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.users = action.payload;
    },
  },
});

export const { setLoading, setError, setData } = userSliceC.actions;

export default userSliceC.reducer;
