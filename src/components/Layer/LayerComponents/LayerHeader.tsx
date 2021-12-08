import { Box, Anchor, Header, Button } from "grommet";
import { Globe } from "grommet-icons";
import PropertyAPI from "../../../core/property/Property.api";
import "./SubmitButton.css";

const api = new PropertyAPI();

export default function LayerHeader(props) {
  return (
    <Header
      className="navbar"
      background="#ffffff"
      pad="small"
      height="xxsmall"
      fill="horizontal"
      // elevation="xsmall"
    >
      <Box>
        <Anchor
          icon={<Globe color="#43588F" />}
          label="Central Property Valley Advisers"
          color="#43588F"
        />
      </Box>
      <Box pad="small" height="xxsmall">
        <Button
          className="text-color"
          label="Submit"
          color="#E9ECF1"
          size="medium"
          onClick={(e) => {
            if (props.action == "create") {
              api.create(props.resource);
            } else if (props.action == "put") {
              api.put(props.resource.id, props.resource);
            }
            props.setOpen(false);
          }}
        />
      </Box>
    </Header>
  );
}
