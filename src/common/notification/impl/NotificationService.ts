import INotificationFactory from "../def/INotificationFactory";
import INotificationProvider from "../def/INotificationProvider";
import { INotificationProviderRegistry } from "../def/INotificationProviderRegistry";
import { INotificationService } from "../def/INotificationService";
import { INotificationSession } from "../def/INotificationSession";
import { NotificationParameters } from "../def/NotificationParameters";
import { NotificationFactory } from "./NotificationFactory";
import { NotificationProviderRegistry } from "./NotificationProviderRegistry";
import NotificationProviderScope from "./NotificationProviderScopes/NotificationProviderScope";
import { NotificationSession } from "./NotificationSession";

export class NotificationService implements INotificationService {
  private _factory: INotificationFactory;
  private _registry: INotificationProviderRegistry;

  constructor() {
    this._factory = new NotificationFactory();
    this._registry = new NotificationProviderRegistry();
  }
  makeNotificationSession(
    parameters: NotificationParameters,
    providerId: string
  ): INotificationSession {
    return new NotificationSession(
      this.makeNotification(parameters),
      this.getOrMakeProvider(providerId)
    );
  }

  getOrMakeProvider(id: string): INotificationProvider {
    return this._registry.retrieve(id) || this.makeProvider(id);
  }

  private makeProvider(id: string): INotificationProvider {
    const provider = this._factory.createNotificationProvider(
      new NotificationProviderScope(id)
    );

    if (provider == null) throw new Error("Notification provider is null");

    this._registry.register(provider);
    return provider;
  }

  private makeNotification(parameters: NotificationParameters) {
    const notification = this._factory.createNotification(parameters);

    if (notification == null) throw new Error("Notification is null");

    return notification;
  }
}
