import { Header } from "grommet";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Brand } from "../Brand/Brand";
import AuthService from "../../common/auth/AuthService";
import "../NavBar/NavBar.css";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../common/auth/AuthSlice";
import AddIcon from "@mui/icons-material/Add";
import "./Header.css";
import PropertyAPI from "../../core/property/Property.api";
import { FileDownload } from "@mui/icons-material";

const authService = new AuthService();
const propertyApi = new PropertyAPI();
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
      <div className="header-links-wrapper">
        <div className="branding">
          <Link to="/">
            <Brand sizing="header-styles" wrapper="logo-wrapper" />
          </Link>
        </div>
        <div className="header-links-wrapper">
          <div className="home-link">
            <Button
              component={Link}
              to={"/"}
              disableRipple
              size="small"
              style={{ backgroundColor: "transparent" }}
              variant="text"
            >
              Properties
            </Button>
          </div>
          ||
          <div className="owner-link">
            <Button
              component={Link}
              to={"/owner"}
              disableRipple
              size="small"
              style={{ backgroundColor: "transparent" }}
              variant="text"
            >
              Owners
            </Button>
          </div>
        </div>
      </div>
      <div className="button-wrapper">
        <div className="button-styles">
          {props.view !== "owner" && (
            <Button
              onClick={async () => {
                const response = new Blob(
                  [await propertyApi.downloadExport()],
                  { type: "text/csv" }
                );

                const link = document.createElement("a");
                link.href = window.URL.createObjectURL(response);
                link.download = `Export-${new Date().toLocaleDateString()}.csv`;
                link.click();

                link.remove();
              }}
              size="small"
              variant="contained"
              startIcon={<FileDownload />}
            >
              Export
            </Button>
          )}
        </div>
        <div className="button-styles">
          {props.view !== "owner" && (
            <Button
              onClick={props.onOpen}
              size="small"
              variant="contained"
              startIcon={<AddIcon />}
            >
              Create
            </Button>
          )}
        </div>
        <Link to="/login" style={{ textDecoration: "none" }}>
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
        </Link>
      </div>
    </Header>
  );
}
