import NoteComponent from "./NoteComponent";
import { Grommet, Box, Text, Button, TextArea } from "grommet";
import { Checkmark } from "grommet-icons";
import { useEffect, useState } from "react";
import { Note } from "../../core/notes/Note";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../core/notes/NoteSlice";

export default function NotesWrapper({ propertyId }) {
  const notes = useSelector((state: any) => {
    return state.notes.notes.filter((n) => n.property_id == propertyId);
  });
  const dispatch = useDispatch();
  const [note, setNote] = useState<string>("");

  return (
    <>
      <Box
        margin="small"
        direction="row-responsive"
        style={{ minHeight: "100px" }}
      >
        <Box
          pad={{ left: "small" }}
          className="notes-box"
          round={{ size: "8px" }}
          fill
          border={{ color: "#e9ecf1", size: "small" }}
        >
          <Text
            color="#99A3C0"
            textAlign="start"
            size="xsmall"
            className="notes-style"
            margin="xsmall"
          >
            Notes{" "}
          </Text>

          <TextArea
            plain
            className="notes-style"
            resize={false}
            fill={true}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            size="medium"
          />
        </Box>
        <Box
          margin="xsmall"
          color="blue"
          round
          align="center"
          alignSelf="center"
        >
          <Button
            plain={false}
            color="#00FF00"
            hoverIndicator={true}
            icon={<Checkmark color="#00FF00" />}
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
          />
        </Box>
      </Box>
      <Text
        margin="small"
        size="large"
        color="#43588F"
        className="comment-header"
      >
        Comments:
      </Text>
      <Box margin="xsmall" color="blue" round style={{ overflowY: "auto" }}>
        {notes?.map((note) => (
          <NoteComponent
            onChange={(e) => {
              setNote(e.target.value);
            }}
            note={note}
          />
        ))}
      </Box>
    </>
  );
}
