import { Box, Text, Button, Nav, Avatar } from "grommet";
import { User, Home, Document, Calculator } from "grommet-icons";
// import "./SideBar.css"

export default function FixedSideBarComponent(props) {
  return (
    <Box background="#030848" pad="15px" style={{maxWidth: "90px", minWidth: "90px", height: "calc(100vh - 48px)"}}  >
      <Nav  gap="large" margin={{ top: "xlarge" }}>
        <Button
          color="#2A2C64"
          plain={false}
          icon={<Home color="#9394B0" />}
          hoverIndicator
          onClick={() => {}}
      tip={{
        plain: true,
        dropProps: { align: { bottom: 'top' } },
        content: (
          <Box
            pad="xxsmall"
            elevation="xsmall"
            // round="xsmall"
            background="#9394B0"
            margin="xsmall"
            // overflow="hidden"
            align="center"
          >
            <Text color="#2A2C64"  size="small">Home View </Text>
          </Box>)}}
        />
        <Button
          color="#2A2C64"
          plain={false}
          icon={<User color="#9394B0" />}
          hoverIndicator
          onClick={() => {}}
      tip={{
        plain: true,
        dropProps: { align: { bottom: 'top' } },
        content: (
          <Box
            pad="xxsmall"
            elevation="xsmall"
            // round="xsmall"
            background="#9394B0"
            margin="xsmall"
            // overflow="hidden"
            align="center"
          >
            <Text color="#2A2C64" size="small">Owner View </Text>
          </Box>)}}
        />
        <Button
          color="#2A2C64"
          plain={false}
          icon={<Document color="#9394B0" />}
          hoverIndicator
      onClick={() => {}}
      tip={{
        plain: true,
        dropProps: { align: { bottom: 'top' } },
        content: (
          <Box
            pad="xxsmall"
            elevation="xsmall"
            // round="xsmall"
            background="#9394B0"
            margin="xsmall"
            // overflow="hidden"
            align="center"
          >
            <Text color="#2A2C64"  size="small">Filler View </Text>
            
          </Box>)}}
        />
      </Nav>
    </Box>
  );
}
