import INotification from "../def/INotification";
import INotificationProvider from "../def/INotificationProvider";
import { INotificationSession } from "../def/INotificationSession";

export class NotificationSession implements INotificationSession {
  notification: INotification;
  provider: INotificationProvider;

  constructor(notification: INotification, provider: INotificationProvider) {
    this.notification = notification;
    this.provider = provider;
  }

  notify(): void {
    this.provider.addNotification(this.notification);

    if (this.notification.onOpen) this.notification.onOpen();
  }
  close(): void {
    this.provider.removeNotification(this.notification);

    if (this.notification.onClose) this.notification.onClose();
  }
}
