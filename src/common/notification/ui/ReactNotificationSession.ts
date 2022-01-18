import INotification from "../def/INotification";
import INotificationProvider from "../def/INotificationProvider";
import { NotificationSession } from "../impl/NotificationSession";
import { setNotifications } from "./NotificationSlice";
import NotificationStore from "./NotificationStore";

export class ReactNotificationSession extends NotificationSession {
  constructor(notification: INotification, provider: INotificationProvider) {
    super(notification, provider);
  }

  notify(): void {
    this.provider.addNotification(this.notification);

    if (this.notification.onOpen) this.notification.onOpen();

    this.updateStore();
  }
  close(): void {
    this.provider.removeNotification(this.notification);

    if (this.notification.onClose) this.notification.onClose();

    this.updateStore();
  }

  private updateStore() {
    NotificationStore.dispatch(
      setNotifications({
        id: this.provider.id,
        notifications: Array.from(this.provider.Notifications),
      })
    );
  }
}
