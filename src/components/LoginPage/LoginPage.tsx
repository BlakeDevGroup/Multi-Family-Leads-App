// import { Box, TextInput, Button, Text } from "grommet";
// import { Checkmark, View, Hide } from "grommet-icons";
import { useEffect, useState } from "react";
import "./LoginPage.css";
import { authenticateUser } from "../../common/auth/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router";
import useAuth from "../Routes/useAuth";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoginPageImg from "../../assets/businessDeal.svg";
import SectionTitle from "../Typography/SectionTitle";
import { Link as routerLink } from "react-router-dom";

import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";

export default function LoginPage() {
  const [reveal, setReveal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const token = useAuth();

  function handleSubmit(e) {
    dispatch(authenticateUser({ email: email, password: password }));
  }

  useEffect(() => {
    if (token)
      navigate(location.state?.from?.pathname || "/", { replace: true });
  }, [token]);

  return (
    <div>
      <div className="split-login login-page-left-container">
        <img
          src={LoginPageImg}
          height={"600px"}
          width={"900px"}
          alt="Login Image"
        />
      </div>
      <div className="split-login login-page-right-container">
        <div className="login-page-credentials-container">
          <div className="login-page-header">
            <Typography variant="h6">Log in to "Company Name"</Typography>
          </div>
          <div className="login-page-inputs">
            <TextField
              inputProps={{ style: { fontSize: 15 } }}
              value={email}
              label="Email"
              sx={{ margin: "20px 0 20px 0", width: "50ch" }}
              size="small"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              inputProps={{ style: { fontSize: 15 } }}
              value={password}
              type={reveal ? "text" : "password"}
              label="Password"
              size="small"
              sx={{ margin: "20px 0 20px 0", width: "50ch" }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={() => setReveal(!reveal)}
                      // onMouseDown={}
                      edge="end"
                    >
                      {reveal ? (
                        <VisibilityOffIcon sx={{ fontSize: "1rem" }} />
                      ) : (
                        <VisibilityIcon sx={{ fontSize: "1rem" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Link variant="subtitle2">Forgot your password?</Link>
          </div>
          <div className="login-page-button">
            <Button
              disableElevation
              fullWidth
              size="large"
              variant="contained"
              onClick={handleSubmit}
            >
              Log In
            </Button>
          </div>
          <div className="login-page-create-account-link">
            <Typography variant="subtitle2">
              Not on "Company Name"?{" "}
              <Link component={routerLink} to="/create_account">
                Create an account
              </Link>
            </Typography>
          </div>
        </div>
      </div>
    </div>

    // <Box fill={true} background="transparent" align="center">
    //   <Box
    //     elevation="small"
    //     height="40vh"
    //     width="100%"
    //     border={{ color: "#EEF1F7", size: "small" }}
    //     background="white"
    //     color="red"
    //     margin={{ top: "20vh" }}
    //   >
    //     <Box
    //       className="login-page-text-color"
    //       round="small"
    //       margin={{ top: "large", left: "medium", right: "medium" }}
    //       border={{ size: "small", color: "#EEF1F7" }}
    //     >
    //       <TextInput
    //         size="xsmall"
    //         color="#43588f"
    //         plain={true}
    //         placeholder="Username"
    //         value={userName}
    //         onChange={(e) => setUserName(e.target.value)}
    //       ></TextInput>
    //     </Box>
    //     <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
    //       <InputLabel htmlFor="outlined-adornment-password">
    //         Password
    //       </InputLabel>
    //       <OutlinedInput
    //         id="outlined-adornment-password"
    //         // type={values.showPassword ? "text" : "password"}
    //         value={password}
    //         onChange={(e) => {
    //           setPassword(e.target.value);
    //         }}
    //         endAdornment={
    //           <InputAdornment position="end">
    //             <IconButton
    //               size="small"
    //               // aria-label="toggle password visibility"
    //               onClick={() => setReveal(!reveal)}
    //               // onMouseDown={}
    //               edge="end"
    //             >
    //               {reveal ? <VisibilityOffIcon /> : <VisibilityIcon />}
    //             </IconButton>
    //           </InputAdornment>
    //         }
    //         label="Password"
    //       />
    //     </FormControl>
    //     {/* <TextInput
    //         size="xsmall"
    //         color="#43588f"
    //         plain
    //         placeholder="Password"
    //         type={reveal ? "text" : "password"}
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       ></TextInput> */}
    //     {/* <Button
    //         icon={
    //           reveal ? (
    //             <View color="#43588f" size="small" />
    //           ) : (
    //             <Hide color="#43588f" size="small" />
    //           )
    //         }
    //         onClick={() => setReveal(!reveal)}
    //       /> */}
    //     <Box margin={{ left: "medium", right: "medium" }}>
    //       <Button
    //         className="button-style"
    //         justify="center"
    //         size="small"
    //         margin={{ right: "medium" }}
    //         color="#43588f"
    //         hoverIndicator="#5E7CC8"
    //         label={
    //           <Text className="button-label" color="white">
    //             Login
    //           </Text>
    //         }
    //         plain={true}
    //         primary
    //         fill={true}
    //         onClick={handleSubmit}
    //       />
    //     </Box>
    //   </Box>
    // </Box>
  );
}
