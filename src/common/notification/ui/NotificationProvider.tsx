import Notification from "./Notification";
import INotification from "../def/INotification";
import { ReactNotificationService } from "./ReactNotificationService";
import React from "react";
import { Provider, useSelector } from "react-redux";
import NotificationStore, { NotificationState } from "./NotificationStore";
import NotificationPresenter from "./NotificationPresenter";
type NotificationProviderProps = {
  id: string;
};
export default function NotificationProvider({
  id,
}: NotificationProviderProps) {
  return (
    <Provider store={NotificationStore}>
      <div
        style={{
          position: "fixed",
          top: "1%",
          right: "20px",
          zIndex: 10,
        }}
      >
        <NotificationPresenter id={id} />
      </div>
    </Provider>
  );
}
