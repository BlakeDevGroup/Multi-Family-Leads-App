import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./common/auth/AuthSlice";
import PropertyReducer from "./core/property/PropertySlice";
import NoteReducer from "./core/notes/NoteSlice";
import OwnerReducer from "./core/owner/OwnerSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    properties: PropertyReducer,
    notes: NoteReducer,
    owners: OwnerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export default store;