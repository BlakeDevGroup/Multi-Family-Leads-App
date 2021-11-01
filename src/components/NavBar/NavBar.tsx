import { Header, Anchor, Box, WorldMap } from "grommet";
import { Globe as GrommetIcon, Menu as MenuIcon } from "grommet-icons";
import LeftLayerButton from "../LeftLayer/LeftLayerButton";

export default function MainNavBar(props) {
  return (
    <Header
      background="#ffffff"
      pad="small"
      height="xxsmall"
      elevation="xsmall"
      // margin={{ left: "96px" }}
    >
      <Box>
        <Anchor
          href="https://tools.grommet.io/"
          icon={<GrommetIcon color="#43588F" />}
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
