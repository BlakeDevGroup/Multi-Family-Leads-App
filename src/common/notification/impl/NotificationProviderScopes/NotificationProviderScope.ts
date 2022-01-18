import INotificationProviderScope from "../../def/INotificationProviderScope";

export default class NotificationProviderScope
  implements INotificationProviderScope
{
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}
