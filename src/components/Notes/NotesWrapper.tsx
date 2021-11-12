import NoteComponent from "./NoteComponent";
import { Grommet, Box, Text, Button, TextArea } from "grommet";
import { Checkmark } from "grommet-icons";
import { NoteItem } from "./NoteComponent";
import { useState } from "react";



export default function NotesWrapper() {
    const [notes, setNotes] = useState<NoteItem[]>([]);
    const [note, setNote] = useState<string>("");
    return (
        <Grommet>
      <Box margin="small" direction="row-responsive" height="xsmall">
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
        >
          Notes
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
      <Box margin="xsmall" color="blue" round align="center"
      alignSelf="center">
        <Button
          plain={false}
          color="#00FF00"
          hoverIndicator={true}
          icon={<Checkmark color="#00FF00" />}
          onClick={(e) => {
            setNotes(
              [{ note: note, dateCreated: new Date().toDateString(), timeCreated: `${new Date().getHours()}:${new Date().getMinutes()}`  }].concat(
                notes
              )
            ), setNote("");
          }}
        />
      </Box>
    </Box>
    <Text margin="small" size="large" color="#43588F" className="comment-headerj">Comments:</Text>
    <Box margin="xsmall" color="blue" round>
      {notes.map(note => <NoteComponent note={note} />)}
      
    </Box>
    </Grommet>
    );
}
    
    
