import INotification from "./INotification";
import INotificationProvider from "./INotificationProvider";

export interface INotificationProviderRegistry {
  register(provider: INotificationProvider): void;

  unregister(provider: INotificationProvider): void;

  retrieve(id: string): INotificationProvider | undefined;
}
