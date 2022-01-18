import { configureStore } from "@reduxjs/toolkit";
import NotificationReducer from "./NotificationSlice";
const store = configureStore({
  reducer: {
    notifications: NotificationReducer,
  },
});

export default store;

export type NotificationState = ReturnType<typeof store.getState>;
