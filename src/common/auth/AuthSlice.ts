import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "./AuthService";
import jwt from "jsonwebtoken";

const authService = new AuthService();

export const authenticateUser = createAsyncThunk(
  "auth/authUser",
  async (data: any, thunkAPI) => {
    const result = await authService.login(data.userName, data.password);

    if (result.data.error) return;

    const user = jwt.verify(
      result.data,
      "42616896-e9e6-4fd7-80af-e0c1b325899b" || ""
    );
    return { token: result.data, user: user };
  }
);
export const AuthCalendarSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    token: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      state.token = action.payload?.token;

      if (action.payload?.user) {
        state.user = action.payload?.user;
      }
    });
  },
});

export default AuthCalendarSlice.reducer;
