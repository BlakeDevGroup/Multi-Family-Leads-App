import { Box, Text, Button, TextArea } from "grommet";
import { Edit, Trash } from "grommet-icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateNote, deleteNote } from "../../core/notes/NoteSlice";
import useUser from "../Routes/useUser";
import {
  IconButton,
  OutlinedInputProps,
  TextField,
  Typography,
} from "@mui/material";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { alpha, styled } from "@mui/material/styles";
import { TextFieldProps } from "@mui/material/TextField";
import "./NotesComponent.css";

export default function NoteComponent(props) {
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  const user = useUser();

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
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
        <div className="note-box">
          <TextField
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            fullWidth
            multiline={true}
            size="medium"
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
