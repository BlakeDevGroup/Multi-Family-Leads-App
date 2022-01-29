import { Button, Dialog, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { deleteNote } from "../../core/notes/NoteSlice";
import { useDispatch } from "react-redux";

type ConfirmationModalProps = {
  open: boolean;
  onClose: Function;
  mainTitle: string;
  subTitle: string;
  onConfirm: Function;
};

export default function ConfirmationModal({
  open,
  onClose,
  mainTitle,
  subTitle,
  onConfirm,
}: ConfirmationModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsOpen(open);
  }, [open]);
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => {
          onClose();
        }}
      >
        <div className="delete-modal-container">
          <Typography variant="h6">{mainTitle}</Typography>

          <Typography variant="subtitle2">
            {subTitle}
            {/* Are you sure you would like to delete this comment? */}
          </Typography>
        </div>
        <div></div>
        <Divider variant="middle" />
        <div className="delete-modal-button delete-modal-container">
          <Button
            onClick={() => {
              onClose();
            }}
            variant="contained"
            size="small"
          >
            Cancel
          </Button>

          <Button
            onClick={(e) => {
              onConfirm();
              onClose();
            }}
            variant="contained"
            color="error"
            size="small"
          >
            Delete
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
