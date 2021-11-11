import { Box, Sidebar, Button, Nav, Avatar } from "grommet";
import { User, LinkNext, Home, Document, Transaction } from "grommet-icons";
import "./SideBar.css"

export default function FixedSideBarComponent(props) {
  //   const [showSidebar, setShowSidebar] = useState(true);
  return (
    <Box className="sidebar-box" >
    <Sidebar className="sidebar-box"  background="#030848">
      <Nav  gap="large" margin={{ top: "xlarge" }}>
        <Button
          color="#2A2C64"
          plain={false}
          icon={<Home color="#9394B0" />}
          hoverIndicator
        />
        <Button
          color="#2A2C64"
          plain={false}
          icon={<User color="#9394B0" />}
          hoverIndicator
        />
        <Button
          color="#2A2C64"
          plain={false}
          icon={<Document color="#9394B0" />}
          hoverIndicator
        />
      </Nav>
    </Sidebar>
    </Box>
  );
}
