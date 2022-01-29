import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import OwnerAPI from "./Owner.api";
import { Owner } from "./Owner";
const api = new OwnerAPI();

export const addOwner = createAsyncThunk(
    "owner/add",
    async (data: any, thunkAPI) => {
      const result = await api.create(data);
  
      if (result.data.error) return;
  
      return Object.assign({}, data, result.data);
    }
  );
  
  export const updateOwner = createAsyncThunk(
    "owner/update",
    async (data: any, thunkAPI) => {
      const result = await api.put(data.id, data);
  
      if (result.data.error) return;
  
      return result.data;
    }
  );
  
  export const deleteOwner = createAsyncThunk(
    "owner/delete",
    async (id: string, thunkAPI) => {
      const result = await api.delete(id);
  
      if (result.data.error) return;
  
      return id;
    }
  );
  
  export const OwnerSlice = createSlice({
    name: "owner",
    initialState: {
      owners: [] as Owner[],
    },
    reducers: {
      setOwners: (state, action) => {
        state.owners = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(addOwner.fulfilled, (state, action) => {
        state.owners.push(action.payload);
      });
  
      builder.addCase(updateOwner.fulfilled, (state, action) => {
        state.owners = state.owners.map((p) => {
          if (p.ownder_id == action.payload.id) return action.payload;
          return p;
        });
      })
      ;
  
      builder.addCase(deleteOwner.fulfilled, (state, action) => {
        state.owners = state.owners.filter(
          (p) => p.ownder_id !== action.payload
        );
      });
    },
  });
  
  export const { setOwners } = OwnerSlice.actions;
  
  export default OwnerSlice.reducer;