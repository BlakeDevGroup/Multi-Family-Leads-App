import { Button, Box } from "grommet";
import { Checkmark } from "grommet-icons";

export default function NoteButton(props) {
  return (
    <Box margin="xsmall" color="blue" round>
      <Button
        plain={false}
        color="#00FF00"
        hoverIndicator={true}
        icon={<Checkmark color="#00FF00" />}
        onClick={(e) => {
          e;
        }}
      />
    </Box>
  );
}
