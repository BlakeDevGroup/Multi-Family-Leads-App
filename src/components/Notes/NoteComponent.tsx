import { Box, Text, Button, TextInput } from "grommet";
import { Edit, Trash } from "grommet-icons";
import NoteApi from "../../core/notes/Note.api";
import { Note } from "../../core/notes/Note";

const api = new NoteApi();

export default function NoteComponent(props) {
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
            {props.note.dateCreated.substring(4)}
          </Text>
          <Text size="small" color="#99A3C0" style={{ lineHeight: 1.5 }}>
            {props.note.timeCreated}
          </Text>
        </Box>
        <Box direction="row-responsive">
          <Button
            hoverIndicator="background"
            icon={<Edit size="13px" color="#99A3C0" />}
            color="#99A3C0"
            onClick={(e) => {
              api.put(props.note.id, props.note);
            }}
          />
          <Button
            hoverIndicator="background"
            onClick={(e) => {
              api.delete(props.note.id);
            }}
            icon={<Trash size="13px" color="#99A3C0" />}
            color="#99A3C0"
          />
        </Box>
      </Box>
      <Box style={{ lineHeight: 1.5 }}>
        <TextInput size="small" value={props.note.note} />
      </Box>
    </Box>
  );
}
