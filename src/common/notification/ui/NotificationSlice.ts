import { createSlice } from "@reduxjs/toolkit";
import INotification from "../def/INotification";
import INotificationProvider from "../def/INotificationProvider";

export const NotificationSlice = createSlice({
  name: "notifications",
  initialState: {
    notifications: {} as { [id: number]: INotification[] },
  },
  reducers: {
    setNotifications: (
      state,
      action: {
        type: string;
        payload: { id: string; notifications: INotification[] };
      }
    ) => {
      state.notifications[action.payload?.id] = action.payload?.notifications;
      console.log(state.notifications);
    },
  },
});

export const { setNotifications } = NotificationSlice.actions;
export default NotificationSlice.reducer;
