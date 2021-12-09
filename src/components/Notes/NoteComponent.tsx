import { Box, Text, Button, TextArea } from "grommet";
import { Edit, Trash } from "grommet-icons";
import NoteApi from "../../core/notes/Note.api";
import { Note } from "../../core/notes/Note";
import { is } from "@reduxjs/toolkit/node_modules/immer/dist/internal";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateNote, deleteNote } from "../../core/notes/NoteSlice";

export default function NoteComponent(props) {
  const [note, setNote] = useState("");
  const dispatch = useDispatch();

  useEffect(() => setNote(props.note.note), [props.note]);

  return (
    <Box
      className="input-text"
      fill={props.fill}
      margin="xsmall"
      align="start"
      border={{ color: "#e9ecf1", size: "small" }}
      pad="8px"
      round={{ size: "8px" }}
      style={{ minHeight: "75px", maxWidth: "95%" }}
    >
      <Box direction="row-responsive" justify="between" fill="horizontal">
        <Box direction="row-responsive">
          <Text
            margin={{ right: "xsmall" }}
            size="small"
            color="#99A3C0"
            style={{ lineHeight: 1.5 }}
          >
            {props.note?.dateCreated?.substring(4)}
          </Text>
          <Text size="small" color="#99A3C0" style={{ lineHeight: 1.5 }}>
            {props.note?.timeCreated}
          </Text>
        </Box>
        <Box direction="row-responsive">
          <Button
            hoverIndicator="background"
            icon={<Edit size="13px" color="#99A3C0" />}
            color="#99A3C0"
            onClick={(e) => {
              dispatch(
                updateNote(
                  Object.assign({}, props.note, {
                    note: note,
                    last_modified: new Date().toUTCString(),
                    modified_by: "user",
                  })
                )
              );
            }}
          />
          <Button
            hoverIndicator="background"
            onClick={(e) => {
              dispatch(deleteNote(props.note));
            }}
            icon={<Trash size="13px" color="#99A3C0" />}
            color="#99A3C0"
          />
        </Box>
      </Box>
      <Box style={{ lineHeight: 1.5 }} fill pad={{ top: "medium" }}>
        <TextArea
          plain
          className="notes-style"
          resize={false}
          fill={true}
          size="medium"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </Box>
    </Box>
  );
}
