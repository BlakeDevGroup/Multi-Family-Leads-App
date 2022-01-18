import INotification from "../def/INotification";
import INotificationFactory from "../def/INotificationFactory";
import INotificationProviderScope from "../def/INotificationProviderScope";
import NotificationProviderScope from "./NotificationProviderScopes/NotificationProviderScope";
import { NotificationParameters } from "../def/NotificationParameters";
import NotificationProvider from "./NotificationProvider";
import { Notification } from "./Notification/Notification";

export class NotificationFactory implements INotificationFactory {
  createNotification(
    parameters: NotificationParameters
  ): INotification | undefined {
    return new Notification(parameters).toSerializable();
  }
  createNotificationProvider(
    scope: INotificationProviderScope
  ): NotificationProvider | undefined {
    if (scope instanceof NotificationProviderScope) {
      return new NotificationProvider(scope);
    }

    return undefined;
  }
}
