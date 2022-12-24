import { ControlledInput } from "../../common/UI/Form/ControlledInput";
import { PhoneNumberInput } from "../../common/UI/Form/PhoneNumberInput";
import {
  Button,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import "./CreateAccountPage.css";
import { useEffect, useState } from "react";
import { addUser } from "../../core/user/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router";
import useAuth from "../Routes/useAuth";
import CreatePageImg from "../../assets/myPassword.svg";
import { Link as routerLink } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useAppDispatch } from "../../store";

export default function CreateAccountPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [missingValue, setMissingValue] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [uniqueEmail, setUniqueEmail] = useState(true);

  const token = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const appDispatch = useAppDispatch();

  function handleSumbit() {
    appDispatch(
      addUser({
        first_name: firstName,
        last_name: lastName,
        // phone: phone,
        email: email,
        password: password,
      })
    ).then((res: any) => {
      setUniqueEmail(false);
    });
  }

  useEffect(() => {
    if (token)
      navigate(location.state?.from?.pathname || "/", { replace: true });
  }, [token]);

  const dispatch = useDispatch();
  return (
    <div>
      <div className="split-create create-page-left-container">
        <img
          src={CreatePageImg}
          height={"600px"}
          width={"900px"}
          alt="Create Image"
        />
      </div>
      <div className="split-create create-page-right-container">
        <div className="create-page-credentials-container">
          <div className="create-page-header">
            <Typography variant="h6">Create your Login</Typography>
          </div>
          <div className="create-page-inputs">
            <div className="create-page-first-last-column">
              <TextField
                inputProps={{ style: { fontSize: 15 } }}
                value={firstName}
                label="First Name"
                sx={{ margin: "20px 0 20px 0", width: "25ch" }}
                size="small"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <TextField
                inputProps={{ style: { fontSize: 15 } }}
                value={lastName}
                label="Last Name"
                sx={{ margin: "20px 0 20px 0", width: "25ch" }}
                size="small"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
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
            <div className="create-page-password-fields">
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
            </div>
            <Typography variant="subtitle2">
              Already have an account?{" "}
              <Link component={routerLink} to="/login">
                Login
              </Link>
            </Typography>
            {!uniqueEmail ? (
              <div style={{ color: "#ff3333" }}>
                An account already exists with this email.
              </div>
            ) : null}
            {missingValue ? (
              <div style={{ color: "#ff3333" }}>
                Please enter the required fields.
              </div>
            ) : null}
            {passwordError ? (
              <div style={{ color: "#ff3333" }}>
                Your password must be at least 10 characters.
              </div>
            ) : null}
          </div>
          <div className="create-page-button">
            <Button
              disableElevation
              fullWidth
              size="large"
              variant="contained"
              onClick={() => {
                if (!firstName || !lastName || !email) {
                  setUniqueEmail(true);
                  setPasswordError(false);
                  setMissingValue(true);
                } else if (password.length < 10) {
                  // setMissingValue(true)
                  setUniqueEmail(true);
                  setMissingValue(false);
                  setPasswordError(true);
                } else {
                  setUniqueEmail(true);
                  setPasswordError(false);
                  setMissingValue(false);
                  console.log(firstName, lastName, email, password);
                  handleSumbit();
                }
              }}
            >
              Create Account
            </Button>
          </div>
          <div className="create-page-login-link"></div>
        </div>
      </div>
    </div>

    // <div className="create-account-container">
    //   <div className="create-account-input-container">
    //     <div className="create-account-title">
    //       <Typography variant="h4">Create Account:</Typography>
    //       <div className="existing-account">
    //         <Typography variant="subtitle1">
    //           Already have an account?
    //         </Typography>
    //         <Button
    //           // sx={{}}
    //           component={Link}
    //           to={"/login"}
    //           disableRipple
    //           style={{
    //             padding: 0,
    //             backgroundColor: "transparent",
    //             height: "30px",
    //           }}
    //           variant="text"
    //         >
    //           Sign in
    //         </Button>
    //       </div>
    //     </div>
    //     <div className="input-row">
    //       <ControlledInput
    //         onChange={(e) => {
    //           setFirstName(e.target.value);
    //         }}
    //         value={firstName}
    //         label="First Name"
    //       />
    //       <ControlledInput
    //         onChange={(e) => {
    //           setLastName(e.target.value);
    //         }}
    //         value={lastName}
    //         label="Last Name"
    //       />
    //     </div>
    //     <div className="input-row">
    //       <ControlledInput
    //         onChange={(e) => {
    //           setEmail(e.target.value);
    //         }}
    //         value={email}
    //         label="Email"
    //       />
    //       <PhoneNumberInput
    //         onChange={(e) => {
    //           setPhone(e);
    //         }}
    //         value={phone}
    //         text="Phone Number"
    //       />
    //     </div>
    //     <div className="create-account-error">
    //       <div
    //         className="input-row create-account-button-margin"
    //         style={{ marginBottom: "10px" }}
    //       >
    //         <ControlledInput
    //           onChange={(e) => {
    //             setPassword(e.target.value);
    //           }}
    //           value={password}
    //           label="Password"
    //         />
    //         <ControlledInput
    //           onChange={(e) => {
    //             setConfirmedPassword(e.target.value);
    //           }}
    //           value={confirmedPassword}
    //           label="Confirm Password"
    //         />
    //       </div>
    //       {missingValue ? (
    //         <div style={{ color: "red" }}>
    //           All required fields must be filled out!
    //         </div>
    //       ) : null}
    //       {passwordError ? (
    //         <div style={{ color: "red" }}>
    //           Passwords must be an exact match!
    //         </div>
    //       ) : null}
    //     </div>
    //     <Button
    //       style={{ marginBottom: "10px" }}
    //       onClick={() => {
    //         if (!firstName || !lastName || !email || !password) {
    //           setPasswordError(false);
    //           setMissingValue(true);
    //         } else if (password !== confirmedPassword) {
    //           // setMissingValue(true)
    //           setMissingValue(false);
    //           setPasswordError(true);
    //         } else {
    //           setPasswordError(false);
    //           setMissingValue(false);
    //           console.log(firstName, lastName, email, phone, password);
    //
    //         }
    //       }}
    //       variant="contained"
    //       className="create-account-button"
    //     >
    //       Create Account
    //     </Button>
    //     <Typography className="create-account-required-text" variant="caption">
    //       *Required
    //     </Typography>
    //   </div>
    // </div>
  );
}
