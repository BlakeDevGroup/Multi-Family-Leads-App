import INotification from "./INotification";
import INotificationProvider from "./INotificationProvider";

export interface INotificationSession {
  notification: INotification;
  provider: INotificationProvider;

  notify(): void;
  close(): void;
}
