import INotification from "../def/INotification";
import INotificationProvider from "../def/INotificationProvider";
import { INotificationProviderRegistry } from "../def/INotificationProviderRegistry";

export class NotificationProviderRegistry
  implements INotificationProviderRegistry
{
  registry!: INotificationProvider[];

  constructor() {
    this.registry = [];
  }
  register(provider: INotificationProvider): void {
    //return if provider is already registered
    if (
      this.registry.find((registrant) => {
        registrant.id == provider.id;
      })
    )
      return;

    this.registry.push(provider);
  }
  unregister(provider: INotificationProvider): void {
    this.registry = this.registry.filter((registrant) => {
      registrant != provider;
    });
  }
  retrieve(id: string): INotificationProvider | undefined {
    const provider = this.registry.find((registrant) => registrant.id == id);

    return provider;
  }
}
