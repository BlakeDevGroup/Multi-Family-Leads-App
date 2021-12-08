import { Box, Text, Button } from "grommet";
import { Edit, Trash } from "grommet-icons";

export type NoteItem = {
  note: string;
  dateCreated: string;
  timeCreated: string;
};

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
          />
          <Button
            hoverIndicator="background"
            onClick={(e) => {
              console.log(props.notes);
            }}
            icon={<Trash size="13px" color="#99A3C0" />}
            color="#99A3C0"
          />
        </Box>
      </Box>
      <Box style={{ lineHeight: 1.5 }}>
        <Text size="small" margin="small">
          {props.note.note}
        </Text>
      </Box>
    </Box>
  );
}
