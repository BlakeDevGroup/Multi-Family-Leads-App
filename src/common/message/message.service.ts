import { log } from "winston";

export interface IMessage {
  message: string;
}

interface ISuccessPayload extends IMessage {
  data?: any;
}

interface IErrorPayload extends IMessage {
  type?: string;
  statusCode?: number;
}

export type ServerResponsePayload = ISuccessPayload & IErrorPayload;

export const sendSuccess = (
  message: string,
  data: any = []
): ISuccessPayload => {
  log("info", message);
  return {
    message,
    data,
  };
};

export const sendFailure = (
  message: string,
  type: string,
  statusCode: number
): IErrorPayload => {
  log("error", message);
  return {
    message,
    type,
    statusCode,
  };
};
