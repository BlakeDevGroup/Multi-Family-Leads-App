import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import INotification from "../def/INotification";
import Notification from "./Notification";
import NotificationProvider from "./NotificationProvider";
import { NotificationState } from "./NotificationStore";

type NotificationPresenterProps = {
  id: string;
};
export default function NotificationPresenter({
  id,
}: NotificationPresenterProps) {
  const dictionary = useSelector(
    (state: NotificationState) => state.notifications.notifications
  );

  const [notifications, setNotifications] = useState<INotification[]>([]);

  useEffect(() => {
    console.log(dictionary[id]);
    setNotifications(dictionary[id]);
  }, [dictionary]);

  const renderNotifications = (): React.ReactNode =>
    notifications?.map((notification: INotification) => (
      <Notification
        message={notification.message}
        duration={notification.duration}
        severity={notification.severity}
        loading={notification.loading}
        icon={notification.icon}
        key={notification.id}
        onClose={notification.onClose}
        onOpen={notification.onOpen}
        progress={notification.progress}
        title={notification.title}
      />
    ));

  return <div>{renderNotifications()}</div>;
}
