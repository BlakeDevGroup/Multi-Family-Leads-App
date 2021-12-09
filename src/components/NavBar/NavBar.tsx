import { Header, Anchor, Box, WorldMap } from "grommet";
import { Globe } from "grommet-icons";
import LeftLayerButton from "../Layer/LayerComponents/TestLayerButton";
import "./NavBar.css";

export default function MainNavBar(props) {
  return (
    <Header
      className="navbar"
      background="#ffffff"
      pad="small"
      height="xxsmall"
      elevation="xsmall"
      // margin={{ left: "96px" }}
    >
      <Box>
        <Anchor
          icon={<Globe color="#43588F" />}
          label="Central Property Valley Advisers"
          color="#43588F"
        />
      </Box>
      <Box>
        <LeftLayerButton onOpen={props.onOpen} />
      </Box>
      <Box> </Box>
    </Header>
  );
}
