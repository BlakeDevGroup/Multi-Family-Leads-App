import { Header } from "grommet";
import {
  Button,
  Avatar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Brand } from "../Brand/Brand";
import AuthService from "../../common/auth/AuthService";
import "../NavBar/NavBar.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../common/auth/AuthSlice";
import AddIcon from "@mui/icons-material/Add";
import "./Header.css";
import UserAPI from "../../core/user/User.api";
const userAPI = new UserAPI();
const authService = new AuthService();
import useUser from "../Routes/useUser";

function stringToColor(string: string) {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export function WebsiteLevelHeader(props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const user = useUser();

  console.log(user);
  // console.log(stringAvatar(user.first_name));

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  // const avatarLetters = user.first_name[0] + user.last_name[0];
  // console.log(avatarLetters);

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Header
      className="navbar"
      background="#ffffff"
      pad="small"
      height="xxsmall"
      elevation="xsmall"
    >
      <div className="header-links-wrapper">
        <div className="branding">
          <Link to="/">
            <Brand sizing="header-styles" wrapper="logo-wrapper" />
          </Link>
        </div>
        {/* <div className="header-links-wrapper"> */}
        <div className="home-link">
          <Button
            component={Link}
            to={"/"}
            disableRipple
            size="small"
            style={{ backgroundColor: "transparent" }}
            variant="text"
          >
            <Typography variant="caption" color="#000000">
              Properties
            </Typography>
          </Button>
        </div>

        <div className="owner-link">
          <Button
            component={Link}
            to={"/owner"}
            disableRipple
            size="small"
            style={{ backgroundColor: "transparent" }}
            variant="text"
          >
            <Typography variant="caption" color="#000000">
              Owners
            </Typography>
          </Button>
        </div>
        {/* </div> */}
      </div>
      <div className="button-wrapper">
        <div className="button-styles">
          {props.view !== "owner" && (
            <Button
              onClick={props.onOpen}
              size="small"
              variant="contained"
              startIcon={<AddIcon htmlColor="#ffffff" />}
            >
              <Typography color="#ffffff">Create</Typography>
            </Button>
          )}
        </div>
        <div style={{ marginLeft: "10px" }}>
          <IconButton disableRipple size="small" onClick={handleClick}>
            <Avatar sx={{ width: 35, height: 35 }}>
              {/* {avatarLetters} */}
              </Avatar>
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              className="menu__action-button-group"
              color="primary"
              onClick={(e) => {
                handleClose();
              }}
            >
              <Typography
                variant="button"
                color="primary"
                className="menu__action-button-typography"
                fontSize="small"
              >
                Account Details
              </Typography>
            </MenuItem>
            <MenuItem
              className="menu__action-button-group"
              onClick={(e) => {
                handleClose();
              }}
            >
              <Typography
                onClick={() => dispatch(logoutUser())}
                variant="button"
                color="primary"
                className="menu__action-button-typography"
                fontSize="small"
              >
                Sign Out
              </Typography>
            </MenuItem>
          </Menu>
        </div>

        {/* <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="button-styles">
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={() => dispatch(logoutUser())}
            >
              Sign out
            </Button>
          </div>
        </Link> */}
      </div>
    </Header>
  );
}
