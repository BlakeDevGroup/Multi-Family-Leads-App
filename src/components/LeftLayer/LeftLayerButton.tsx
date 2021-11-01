import { Button, Text } from "grommet";
import { Add } from "grommet-icons";

export default function LeftLayerButton(props) {
  return (
    <Button
      icon={<Add color="brand" />}
      label={
        <Text>
          <strong>Add Corner Layer</strong>
        </Text>
      }
      onClick={props.onOpen}
      plain
    />
  );
}
