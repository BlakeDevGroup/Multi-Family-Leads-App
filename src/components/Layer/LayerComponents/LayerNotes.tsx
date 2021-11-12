import { TextArea, Box, Text } from "grommet";
import { useState } from "react";

export default function LayerNotes(props) {
  const [note, setNote] = useState("");
  return (
    <Box
      pad={{ left: "small" }}
      className="notes-box"
      round={{ size: "8px" }}
      fill
      border={{ color: "red", size: "small" }}
    >
      <Text
        color="#99A3C0"
        textAlign="start"
        size="xsmall"
        // margin={{ left: "5px" }}
        className="notes-style"
      >
        Notes
      </Text>
      <TextArea
        plain
        className="notes-style"
        resize={false}
        // placeholder="Notes"
        value={props.note}
        onChange={(e) => props.setNote(e.target.value)}
      />
    </Box>
  );
}
