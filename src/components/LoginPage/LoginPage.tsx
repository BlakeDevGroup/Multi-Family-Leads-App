import { Box, TextInput, Button, Text } from "grommet";
import { Checkmark, View, Hide } from "grommet-icons";
import { useEffect, useState } from "react";
import "./LoginPage.css";
import { authenticateUser } from "../../common/auth/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router";
import useAuth from "../Routes/useAuth";

export default function LoginPage() {
  const [reveal, setReveal] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const token = useAuth();

  function handleSubmit(e) {
    dispatch(authenticateUser({ userName: userName, password: password }));
  }

  useEffect(() => {
    if (token)
      navigate(location.state?.from?.pathname || "/", { replace: true });
  }, [token]);

  return (
    <Box fill={true} background="transparent" align="center">
      <Box
        elevation="small"
        height="40vh"
        width="20vw"
        border={{ color: "#EEF1F7", size: "small" }}
        background="white"
        color="red"
        margin={{ top: "20vh" }}
      >
        <Box
          className="login-page-text-color"
          round="small"
          margin={{ top: "large", left: "medium", right: "medium" }}
          border={{ size: "small", color: "#EEF1F7" }}
        >
          <TextInput
            size="xsmall"
            color="#43588f"
            plain={true}
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></TextInput>
        </Box>
        <Box
          className="login-page-text-color"
          direction="row"
          round="small"
          margin={{
            top: "small",
            bottom: "large",
            left: "medium",
            right: "medium",
          }}
          border={{ size: "small", color: "#EEF1F7" }}
        >
          <TextInput
            size="xsmall"
            color="#43588f"
            plain
            placeholder="Password"
            type={reveal ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextInput>
          <Button
            icon={
              reveal ? (
                <View color="#43588f" size="small" />
              ) : (
                <Hide color="#43588f" size="small" />
              )
            }
            onClick={() => setReveal(!reveal)}
          />
        </Box>
        <Box margin={{ left: "medium", right: "medium" }}>
          <Button
            className="button-style"
            justify="center"
            size="small"
            margin={{ right: "medium" }}
            color="#43588f"
            hoverIndicator="#5E7CC8"
            label={
              <Text className="button-label" color="white">
                Login
              </Text>
            }
            plain={true}
            primary
            fill={true}
            onClick={handleSubmit}
          />
        </Box>
      </Box>
    </Box>
  );
}
