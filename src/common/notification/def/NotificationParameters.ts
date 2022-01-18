export class NotificationParameters {
  icon: string | undefined;
  onClose: Function | undefined;
  onOpen: Function | undefined;
  progress: number | undefined;
  loading: boolean | undefined;
  title: string | undefined;
  duration: number | undefined;
  message: string;
  severity: "success" | "info" | "warning" | "error";
  onDispose: Function | undefined;

  constructor(
    message: string,
    title?: string,
    duration: number = 1000,
    icon?: string,
    onClose?: Function,
    onOpen?: Function,
    progress?: number,
    loading?: boolean,
    severity: "success" | "info" | "warning" | "error" = "info"
  ) {
    this.message = message;
    this.icon = icon;
    this.onClose = onClose;
    this.onOpen = onOpen;
    this.progress = progress;
    this.loading = loading;
    this.title = title;
    this.duration = duration;
    this.severity = severity;
  }
}
