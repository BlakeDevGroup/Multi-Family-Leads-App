import INotification from "../../def/INotification";
import { NotificationParameters } from "../../def/NotificationParameters";
import { uuid } from "uuidv4";

export class Notification implements INotification {
  id: string;
  message: string;
  icon?: string | undefined;
  onClose?: Function | undefined;
  onOpen?: Function | undefined;
  progress?: number | undefined;
  loading?: boolean | undefined;
  title?: string | undefined;
  duration?: number | undefined;
  severity: "error" | "warning" | "info" | "success";

  constructor(parameters: NotificationParameters) {
    this.id = uuid();
    this.message = parameters.message;
    this.icon = parameters.icon;
    this.onClose = parameters.onClose;
    this.onOpen = parameters.onOpen;
    this.progress = parameters.progress;
    this.loading = parameters.loading;
    this.title = parameters.title;
    this.duration = parameters.duration;
    this.severity = parameters.severity;
  }

  toSerializable(): INotification {
    return {
      id: this.id,
      message: this.message,
      icon: this.icon,
      onClose: this.onClose,
      onOpen: this.onOpen,
      progress: this.progress,
      loading: this.loading,
      title: this.title,
      duration: this.duration,
      severity: this.severity,
    };
  }
}
