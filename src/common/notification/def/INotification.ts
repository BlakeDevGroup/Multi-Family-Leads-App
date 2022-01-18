import { NotificationParameters } from "./NotificationParameters";

export default interface INotification {
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
}
