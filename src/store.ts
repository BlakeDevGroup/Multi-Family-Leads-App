import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./common/auth/AuthSlice";
import PropertyReducer from "./core/property/PropertySlice";
import NoteReducer from "./core/notes/NoteSlice";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    properties: PropertyReducer,
    notes: NoteReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
