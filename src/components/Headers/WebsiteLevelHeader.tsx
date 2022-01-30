import { Header, Anchor, Box } from "grommet";
import { Button } from "@mui/material";
import { Globe } from "grommet-icons";
import { Link } from "react-router-dom";
import LeftLayerButton from "../Layer/LayerComponents/TestLayerButton";
import { Brand } from "../Brand/Brand";
import AuthService from "../../common/auth/AuthService";
import "../NavBar/NavBar.css";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../common/auth/AuthSlice";  
import AddIcon from '@mui/icons-material/Add';
import "./Header.css"

const authService = new AuthService();

export function WebsiteLevelHeader(props) {
  const dispatch = useDispatch();
  return (
    <Header
      className="navbar"
      background="#ffffff"
      pad="small"
      height="xxsmall"
      elevation="xsmall"
    >
      <Box>
        <Link to="/" >
          {/* <Anchor
            icon={<Globe color="#43588F" />}
            label="Central Valley Property Advisors"
            color="#43588F"
          /> */}
          <Brand sizing="header-styles" />
        </Link>
      </Box>
      <Box direction="row-responsive" justify="center">
        {/* <LeftLayerButton  /> */}
        <div className="button-wrapper">
          <Button onClick={props.onOpen} size="small"  variant="contained" startIcon={<AddIcon />}>Create</Button>
        </div>
        <Link to="/login" style={{ textDecoration: 'none'}}>
          <div className="button-wrapper" >
          <Button size="small"  variant="contained" color="secondary" onClick={() => dispatch(logoutUser())}>Sign out</Button>
          </div>
        </Link>
      </Box>
    </Header>
  );
}
