import { Header, Anchor, Box, WorldMap, Button } from "grommet";
import { Globe } from "grommet-icons";
import { Link } from "react-router-dom";
import LeftLayerButton from "../Layer/LayerComponents/TestLayerButton";
import AuthService from "../../common/auth/AuthService";
import "./NavBar.css";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../common/auth/AuthSlice";

const authService = new AuthService();

export default function MainNavBar(props) {
  const dispatch = useDispatch();
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
        <Link to="/">
          <Anchor
            icon={<Globe color="#43588F" />}
            label="Central Valley Property Advisors"
            color="#43588F"
          />
        </Link>
      </Box>
      <Box direction="row-responsive" justify="center">
        <LeftLayerButton onOpen={props.onOpen} />
        <Link to="/login">
          <Button
            margin={{ left: "50px" }}
            label="sign out"
            className="text-color"
            color="#E9ECF1"
            onClick={() => dispatch(logoutUser())}
            hoverIndicator={false}
            size="small"
          ></Button>
        </Link>
      </Box>
    </Header>
  );
}
