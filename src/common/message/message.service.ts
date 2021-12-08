import { log } from "winston";

export interface IMessage {
  message: string;
}

interface IPayload extends IMessage {
  data?: any;
  type?: string;
  status?: number;
}

export type ServerResponsePayload = IPayload;

export const sendSuccess = (message: string, data: any = []): IPayload => {
  log("info", message);
  return {
    message,
    data,
  };
};

export const sendFailure = (
  message: string,
  type: string,
  status: number
): IPayload => {
  log("error", message);
  return {
    message,
    type,
    status,
  };
};
