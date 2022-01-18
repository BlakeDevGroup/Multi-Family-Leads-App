import INotification from "./INotification";
import INotificationProvider from "./INotificationProvider";
import INotificationProviderScope from "./INotificationProviderScope";
import { NotificationParameters } from "./NotificationParameters";

export default interface INotificationFactory {
  createNotification(
    parameters: NotificationParameters
  ): INotification | undefined;
  createNotificationProvider(
    scope: INotificationProviderScope
  ): INotificationProvider | undefined;
}
