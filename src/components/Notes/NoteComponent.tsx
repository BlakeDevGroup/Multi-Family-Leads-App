import { Grommet, Box, Text, TextArea, Button  } from "grommet";
import { Checkmark } from "grommet-icons";


export type NoteItem = {
  note: string;
  dateCreated: string;
  timeCreated: string;
};

export default function NoteComponent(props) {

    return (
<Box direction="row">
          <Box
            className="input-text"
            fill={props.fill}
            margin="xsmall"
            align="start"
            border={{ color: "#e9ecf1", size: "small" }}
            pad="8px"
            round={{ size: "8px" }}
            width="100%"
          >
            <Box direction="row-responsive">
            <Text>
            {props.note.dateCreated.substring(4)}
            </Text>
            <Text size="small" color="#99A3C0" margin="xxsmall">
              {props.note.timeCreated}
            </Text>

            </Box>
            <Text size="small" margin="small">
            {props.note.note}
            </Text>
          </Box>
        </Box>
    )
}