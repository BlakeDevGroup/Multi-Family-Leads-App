import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PropertyAPI from "./Property.api";
import { Property } from "./Property";

const api = new PropertyAPI();

export const addProperty = createAsyncThunk(
  "property/add",
  async (data: any, thunkAPI) => {
    const result = await api.create(data);

    if (result.data.error) return;

    return Object.assign({}, data, result.data);
  }
);

export const updateProperty = createAsyncThunk(
  "property/update",
  async (data: any, thunkAPI) => {
    const result = await api.put(data.id, data);

    if (result.data.error) return;

    return result.data;
  }
);

export const deleteProperty = createAsyncThunk(
  "property/delete",
  async (data: any, thunkAPI) => {
    const result = await api.delete(data.id);

    if (result.data.error) return;

    return data.id;
  }
);

export const PropertySlice = createSlice({
  name: "property",
  initialState: {
    properties: [] as Property[],
  },
  reducers: {
    setProperties: (state, action) => {
      state.properties = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addProperty.fulfilled, (state, action) => {
      state.properties.push(action.payload);
    });

    builder.addCase(updateProperty.fulfilled, (state, action) => {
      state.properties = state.properties.map((p) => {
        if (p.id == action.payload.id) return action.payload;
        return p;
      });
    });

    builder.addCase(deleteProperty.fulfilled, (state, action) => {
      state.properties = state.properties.filter(
        (p) => p.id !== action.payload
      );
    });
  },
});

export const { setProperties } = PropertySlice.actions;

export default PropertySlice.reducer;
