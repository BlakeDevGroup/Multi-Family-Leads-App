import { Box, Anchor, Header, Button } from "grommet";
import { Globe } from "grommet-icons";
import PropertyAPI from "../../../core/property/Property.api";

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
      <Box>
        <Button
          onClick={(e) => {
            api.put(props.resource.id, props.resource);
          }}
        />
      </Box>
    </Header>
  );
}
