import { Header, Anchor, Box, ResponsiveContext, Menu } from "grommet";
import { Globe as GrommetIcon, Menu as MenuIcon } from "grommet-icons";

export default function ResponsiveNavBar() {
  return (
    <Header
      background="#ffffff"
      pad="small"
      height="xxsmall"
      elevation="medium"
    >
      <div>
        <Anchor
          href="https://tools.grommet.io/"
          icon={<GrommetIcon color="#6658ff" />}
          label="Company Name"
          color="#6658ff"
        />
      </div>
      <div></div>
      <div></div>
    </Header>
  );
}
