import { Header, Anchor, Box } from "grommet";
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
          icon={<GrommetIcon color="#43588F" />}
          label="Company Name"
          color="#43588F"
        />
      </div>
      <div></div>
      <div></div>
    </Header>
  );
}
