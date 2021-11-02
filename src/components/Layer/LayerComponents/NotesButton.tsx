import { Button, Box } from "grommet";
import { Checkmark } from "grommet-icons";

export default function NoteButton(props) {
  return (
    <Box margin="xsmall" color="blue">
      <Button
        plain={false}
        color="#e9ecf1"
        icon={<Checkmark color="#00FF00" />}
        onClick={(e) => {
          e;
        }}
      />
    </Box>
  );
}
