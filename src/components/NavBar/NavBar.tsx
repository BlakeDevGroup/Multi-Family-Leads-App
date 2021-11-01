import { Header, Anchor, Box, Button } from "grommet";
import { Globe as GrommetIcon, Menu as MenuIcon } from "grommet-icons";

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
      <Box></Box>
      <Box>
        <Button
          hoverIndicator
          onClick={() => {
            props.setShowSidebar(false);
          }}
        />
      </Box>
    </Header>
  );
}
