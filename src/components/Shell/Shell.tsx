import { Main } from "grommet";
import { useState } from "react";
import FixedSideBarComponent from "../SideBar/FixedSideBar";
import "./shell.css";
import { NotificationParameters } from "../../common/notification/def/NotificationParameters";
import { ReactNotificationService } from "../../common/notification/ui/ReactNotificationService";
import NotificationProvider from "../../common/notification/ui/NotificationProvider";

const notificationService = new ReactNotificationService();
export default function Shell({ view }) {
  const [open, setOpen] = useState(false);

  return (
    <Main background="#f1f5f8" overflow="hidden">
      <NotificationProvider id="presenter1" />
      <div className="mfl-shell-container">
        <FixedSideBarComponent />
        <div className="mfl-shell-content-body">{view}</div>
      </div>
    </Main>
  );
}

setInterval(() => {
  const session = notificationService.makeNotificationSession(
    {
      message: "Some Notification",
      duration: 2000,
      loading: true,
    } as NotificationParameters,
    "presenter1"
  );

  if (session.provider.Notifications.length < 10) session.notify();
}, 1000);
