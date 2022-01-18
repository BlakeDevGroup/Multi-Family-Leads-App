import { Alert, AlertColor, AlertTitle, LinearProgress } from "@mui/material";
import { current } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

declare type NotificationProps = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClose?: Function;
  severity?: AlertColor;
  onOpen?: Function;
  progress?: number;
  loading?: boolean;
  title?: string;
  message: string;
  duration?: number;
};

export default function Notification({
  children,
  icon,
  onClose,
  severity = "info",
  onOpen,
  progress,
  loading = false,
  title,
  message,
  duration = 1000,
}: NotificationProps) {
  return (
    <>
      <Alert severity={severity} onClose={() => {}} icon={icon}>
        {title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </Alert>
      {(loading || progress) && (
        <LinearProgress
          variant={progress ? "determinate" : "indeterminate"}
          value={progress}
          color={severity}
        />
      )}
    </>
  );
}
