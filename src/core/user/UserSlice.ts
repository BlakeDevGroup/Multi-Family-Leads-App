import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserAPI from "./User.api";
import { User } from "./User";
import { startTimer } from "winston";
const api = new UserAPI();

export const addUser = createAsyncThunk(
  "user/add",
  async (data: User, thunkAPI) => {
    const result: any = await api.create(data);
    console.log(result.data);
    if (result.type) return result.type;

    return Object.assign({}, data, result.data);
  }
);

export const updateUser = createAsyncThunk(
  "user/update",
  async (data: User, thunkAPI) => {
    if (data?.id) {
      const result = await api.put(data.id, data);
      if (result.data.error) return;

      return result.data;
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/delete",
  async (id: string, thunkAPI) => {
    const result = await api.delete(id);

    if (result.data.error) return;

    return id;
  }
);

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    users: [] as User[],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });

    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.users = state.users.map((p) => {
        if (p.id == action.payload.id) return action.payload;
        return p;
      });
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.users = state.users.filter((p) => p.id !== action.payload);
    });
  },
});
