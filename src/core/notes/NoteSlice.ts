import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import NoteApi from "./Note.api";
import { Note } from "./Note";
import { current } from "immer";

const api = new NoteApi();

export const addNote = createAsyncThunk(
  "note/add",
  async (data: any, thunkAPI) => {
    const result = await api.create(data);

    if (result.data.error) return;

    return result.data;
  }
);

export const updateNote = createAsyncThunk(
  "note/update",
  async (data: any, thunkAPI) => {
    const result = await api.put(data.id, data);

    if (result.data.error) return;

    return result.data;
  }
);

export const deleteNote = createAsyncThunk(
  "note/delete",
  async (data: any, thunkAPI) => {
    const result = await api.delete(data.property_id, data.id);

    if (result.data.error) return;

    return data;
  }
);

export const NoteSlice = createSlice({
  name: "note",
  initialState: {
    notes: [] as Note[],
  },
  reducers: {
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addNote.fulfilled, (state, action) => {
      state.notes.push(action.payload);
    });

    builder.addCase(updateNote.fulfilled, (state, action) => {
      state.notes = state.notes.map((note) => {
        if (note.id == action.payload.id) return action.payload;
        return note;
      });
    });

    builder.addCase(deleteNote.fulfilled, (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
    });
  },
});

export const { setNotes } = NoteSlice.actions;
export default NoteSlice.reducer;
