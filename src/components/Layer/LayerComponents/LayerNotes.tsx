import { TextArea, Box } from "grommet";
import { useState } from "react";

export default function LayerNotes(props) {
  const [note, setNote] = useState("");
  return (
    <Box
      pad={{ left: "small" }}
      className="notes-box"
      round
      fill
      border={{ color: "#e9ecf1", size: "small" }}
    >
      <TextArea
        plain
        className="notes-style"
        resize={false}
        placeholder="Notes"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </Box>
  );
}
