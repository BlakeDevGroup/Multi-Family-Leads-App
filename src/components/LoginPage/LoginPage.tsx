import { Box, TextInput, Button, Text } from "grommet";
import { Checkmark, View, Hide } from "grommet-icons";
import { useState } from "react";
import "./LoginPage.css";

export default function LoginPage() {
  const [reveal, setReveal] = useState(false);
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
            label={
              <Text className="button-label" color="white">
                Login
              </Text>
            }
            plain={true}
            primary
            fill={true}
          />
        </Box>
      </Box>
    </Box>
  );
}
