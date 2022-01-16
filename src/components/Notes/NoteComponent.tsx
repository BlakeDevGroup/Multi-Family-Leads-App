import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateNote, deleteNote } from "../../core/notes/NoteSlice";
import useUser from "../Routes/useUser";
import { IconButton, Menu, TextField, Typography } from "@mui/material";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./NotesComponent.css";
import React from "react";

export default function NoteComponent(props) {
  const [note, setNote] = useState("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
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

  useEffect(() => setNote(props.note.note), [props.note]);
  useEffect(() => console.log(user), [user]);
  return (
    <div>
      <div>
        {/* <Box>
          <Button
            hoverIndicator="background"
            icon={<Edit size="small" color="#708090" />}
            color="#708090"
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
            }}
          />
        </Box>
        <Box>
          <Button
            hoverIndicator="background"
            onClick={(e) => {
              dispatch(deleteNote(props.note));
            }}
            disabled={user.user_name == "user" ? true : false}
            icon={<Trash size="small" color="#708090" />}
            color="#708090"
          />
        </Box> */}
      </div>

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
            <IconButton
              size="small"
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
              }}
            >
              <EditOutlinedIcon />
            </IconButton>
            <IconButton
              size="small"
              onClick={(e) => {
                dispatch(deleteNote(props.note));
              }}
              disabled={user.user_name == "user" ? true : false}
            >
              <DeleteOutlineSharpIcon />
            </IconButton>
          </Menu>
        </div>
        <div className="note-box">
          <TextField
            variant="standard"
            InputProps={{
              disableUnderline: true,
              readOnly: true,
            }}
            fullWidth
            multiline={true}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <div className="note-date">
          <Typography variant="subtitle2">
            {new Date(props.note?.last_modified).toLocaleString()}
          </Typography>
        </div>
      </div>
    </div>
  );
}
