import NoteComponent from "./NoteComponent";
import { Grommet, Box, Text, Button, TextArea } from "grommet";
import { Checkmark } from "grommet-icons";
import { useState } from "react";
import { Note } from "../../core/notes/Note";

export default function NotesWrapper() {
  const [notes, setNotes] = useState<Note[]>([]);
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
              const newNote: Note = {
                note: note,
                dateCreated: new Date().toDateString(),
                timeCreated: `${new Date().getHours()}:${new Date().getMinutes()}`,
              };
              setNotes([newNote].concat(notes));
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
        {notes.map((note) => (
          <NoteComponent note={note} />
        ))}
      </Box>
    </>
  );
}
