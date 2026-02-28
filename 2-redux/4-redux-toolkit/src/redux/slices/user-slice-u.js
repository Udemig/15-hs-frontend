import { createSlice } from "@reduxjs/toolkit";

const userSliceU = createSlice({
  name: "user-c",
  initialState: { isLoading: true, error: null, users: [] },
  reducers: {},
});

export default userSliceU.reducer;
