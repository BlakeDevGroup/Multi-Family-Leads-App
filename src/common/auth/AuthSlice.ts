import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "./AuthService";
import jwt from "jsonwebtoken";
import { create } from "domain";

const authService = new AuthService();

export const authenticateUser = createAsyncThunk(
  "auth/authUser",
  async (data: any, thunkAPI) => {
    const result = await authService.login(data.email, data.password);

    if (result.data.error) return;

    const user = jwt.verify(
      result.data,
      "42616896-e9e6-4fd7-80af-e0c1b325899b" || ""
    );
    return { token: result.data, user: user };
  }
);

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (data: string, thunkAPI) => {
    // console.log(data);
    const user = jwt.verify(data, "42616896-e9e6-4fd7-80af-e0c1b325899b" || "");

    // console.log({ user: user });
    return { user: user };
  }
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  authService.logout();
});
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

    builder.addCase(getUser.fulfilled, (state, action) => {
      // state.user = action.payload?.user;
    });

    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.token = "";
    });
  },
});

export default AuthCalendarSlice.reducer;
