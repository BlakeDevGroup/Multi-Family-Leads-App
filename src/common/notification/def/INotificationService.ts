import INotificationProvider from "./INotificationProvider";
import { INotificationSession } from "./INotificationSession";
import { NotificationParameters } from "./NotificationParameters";

export interface INotificationService {
  makeNotificationSession(
    parameters: NotificationParameters,
    providerId: string
  ): INotificationSession;

  getOrMakeProvider(id: string): INotificationProvider;
}
