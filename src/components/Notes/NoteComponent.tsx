import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNote, deleteNote, addNote } from "../../core/notes/NoteSlice";
import useUser from "../Routes/useUser";
import {
  Button,
  FilledInput,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./NotesComponent.css";
import React from "react";
import ConfirmationModal from "./ConfirmationModal";

export default function NoteComponent(props, { propertyId }) {
  const [note, setNote] = useState("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [readOnly, setReadOnly] = useState(true);
  const [disabledEdit, setDisabledEdit] = useState(true);
  const [commentState, setCommentState] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [removeNote, setRemoveNote] = useState(false);

  const noteInput: React.RefObject<HTMLInputElement> = React.createRef();

  const commentComponents = {
    Comment: (
      <TextField
        variant="standard"
        InputProps={{
          disableUnderline: true,
          readOnly: readOnly,
        }}
        fullWidth
        multiline={true}
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    ),
    EditableComment: (
      <FilledInput
        inputRef={(input) => {
          if (input) {
            input.focus();
            input.selectionStart = note.length;
            input.selectionEnd = note.length;
          }
        }}
        readOnly={false}
        value={note}
        fullWidth
        multiline={true}
        disableUnderline={true}
        onKeyDown={(e) => {
          if (e.shiftKey == true && e.key == "Enter") return;
          if (e.key !== "Enter") return;
          if (e.key === "Enter") {
            setCommentState(false);
            setDisabledEdit(true);
            setReadOnly(true);
          }
          e.preventDefault();
          const date = new Date();
          dispatch(
            addNote({
              note: note,
              created_timestamp: date,
              created_by: "user",
              property_id: propertyId,
              last_modified: date,
              modified_by: "user",
            })
          );
        }}
        onChange={(e) => {
          setNote(e.target.value);
        }}
      />
    ),
  };

  const dispatch = useDispatch();
  const user = useUser();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const notes = useSelector((state: any) => {
    return state.notes.notes.filter((n) => n.property_id == propertyId);
  });

  useEffect(() => setNote(props.note.note), [props.note]);
  // useEffect(() => console.log(user), [user]);
  return (
    <div>
      <div>
        <div className="more-actions-button">
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              className="menu__action-button-group"
              color="primary"
              onClick={(e) => {
                dispatch(
                  updateNote(
                    Object.assign({}, props.note, {
                      note: note,
                      last_modified: new Date(),
                      modified_by: "user",
                    })
                  )
                );
                setDisabledEdit(false);
                setReadOnly(false);
                setCommentState(true);
                handleClose();
              }}
            >
              <Typography
                variant="button"
                color="primary"
                className="menu__action-button-typography"
                fontSize="small"
              >
                Edit
              </Typography>
              <EditOutlinedIcon color="primary" fontSize="small" />
            </MenuItem>
            <MenuItem
              className="menu__action-button-group"
              onClick={(e) => {
                // dispatch(deleteNote(props.note));
                setShowDeleteModal(true);
                handleClose();
              }}
            >
              <Typography
                variant="button"
                color="primary"
                className="menu__action-button-typography"
                fontSize="small"
              >
                Delete
              </Typography>
              <DeleteOutlineSharpIcon color="primary" fontSize="small" />
            </MenuItem>
          </Menu>
          <ConfirmationModal
            open={showDeleteModal}
            onClose={() => {
              setShowDeleteModal(false);
            }}
            mainTitle={"Confirm Deletion?"}
            subTitle={"Are you sure you want to delete comment?"}
            onConfirm={() => {
              dispatch(deleteNote(props.note));
            }}
          />
        </div>
        <div className="note-box">
          {commentState === true && commentComponents.EditableComment}
          {commentState === false && commentComponents.Comment}
        </div>
        <div className="date-edit-container">
          <div className="note-date">
            <Typography variant="subtitle2">
              {new Date(props.note?.last_modified).toLocaleString()}
            </Typography>
          </div>
          <div className="edit-save-button">
            <Button
              size="small"
              disabled={disabledEdit}
              onClick={(e) => {
                setCommentState(false);
                setDisabledEdit(true);
                setReadOnly(true);
              }}
            >
              Save
            </Button>
            <Button
              size="small"
              disabled={disabledEdit}
              onClick={(e) => {
                setCommentState(false);
                setDisabledEdit(true);
                setReadOnly(true);
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
