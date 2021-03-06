import { Button, Text } from "grommet";
import { Add } from "grommet-icons";

export default function LayerButton(props) {
  return (
    <Button
      icon={<Add color="brand" />}
      label={
        <Text>
          <strong>Create</strong>
        </Text>
      }
      onClick={props.onOpen}
      plain
    />
  );
}
