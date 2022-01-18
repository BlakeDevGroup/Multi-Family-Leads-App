import INotification from "../def/INotification";
import INotificationProvider from "../def/INotificationProvider";
import INotificationProviderScope from "../def/INotificationProviderScope";

export default class NotificationProvider implements INotificationProvider {
  id: string;
  Notifications: INotification[] = [];
  increment: number;

  constructor(scope: INotificationProviderScope) {
    this.id = scope.id;
    this.increment = 0;
  }

  addNotification(notification: INotification): void {
    this.Notifications.push(notification);

    this.Notifications = Array.from(this.Notifications);
    this.increment++;
  }

  removeNotification(notification: INotification): void {
    this.Notifications = this.Notifications.filter(
      (notification) => notification !== notification
    );

    this.increment++;
  }
}
