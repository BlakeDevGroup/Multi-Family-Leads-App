import INotification from "./INotification";

export default interface INotificationProvider {
  id: string;
  increment: number;
  Notifications: INotification[];
  addNotification(notification: INotification): void;
  removeNotification(notification: INotification): void;
}
