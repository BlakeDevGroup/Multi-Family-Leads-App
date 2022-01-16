import NoteComponent from "./NoteComponent";
import { Grommet, Box, Text, Button, TextArea } from "grommet";
import { Checkmark } from "grommet-icons";
import { useEffect, useState } from "react";
import { Note } from "../../core/notes/Note";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../core/notes/NoteSlice";
import SectionTitle from "../Typography/SectionTitle";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

export default function NotesWrapper({ propertyId }) {
  const notes = useSelector((state: any) => {
    return state.notes.notes.filter((n) => n.property_id == propertyId);
  });
  const dispatch = useDispatch();
  const [note, setNote] = useState<string>("");

  // const handleClickAddComment = () => {
  //   setValues({
  //     ...values,
  //     showPassword: !values.showPassword,
  //   });
  // };

  return (
    <>
      <SectionTitle label={"Comments"} />

      <FormControl
        variant="outlined"
        style={{ display: "flex", gap: "1%", margin: "10px" }}
      >
        <FilledInput
          value={note}
          multiline={true}
          onKeyDown={(e) => {
            if (e.shiftKey == true && e.key == "Enter") return;
            if (e.key !== "Enter") return;
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

            setNote("");
          }}
          onChange={(e) => {
            setNote(e.target.value);
          }}
          placeholder={"Type comment here"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                color="primary"
                onClick={(e) => {
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

                  setNote("");
                }}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                <SendRoundedIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      {notes?.map((note) => (
        <NoteComponent
          onChange={(e) => {
            setNote(e.target.value);
          }}
          note={note}
        />
      ))}
    </>
  );
}
