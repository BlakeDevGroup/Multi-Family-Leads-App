import { Box, Sidebar, Button, Nav, Avatar } from "grommet";
import { User, LinkNext, Home, Document, Transaction } from "grommet-icons";

export default function FixedSideBarComponent(props) {
  //   const [showSidebar, setShowSidebar] = useState(true);
  return (
    <Sidebar
      background="#030848"
      header={
        <Button
          border-color="#green"
          icon={<Transaction color="#9394B0" />}
          hoverIndicator
        />
      }
    >
      <Nav gap="large" margin={{ top: "xlarge" }}>
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
  );
}
