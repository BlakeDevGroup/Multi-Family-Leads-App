import { TextInput, Text, Box, Menu, Select, Grommet } from "grommet";
import { useState } from "react";
import "../Layer.css";

export default function StateDropdown(props) {
  const [isValidated, setIsValidated] = useState(true);
  const [options, setOptions] = useState(states);
  return (
    <Grommet
      theme={{
        global: {
          colors: {
            selected: "#43588f",
          },
        },
        select: {
          icons: {
            color: "#43588f",
          },
        },
      }}
    >
      <Box
        className="input-text"
        fill={props.fill}
        margin={{ bottom: "xsmall" }}
        border={{ color: "#e9ecf1", size: "small" }}
        pad="8px"
        round={{ size: "8px" }}
      >
        <Text
          color="#99A3C0"
          textAlign="start"
          size="xsmall"
          margin={{ left: "5px" }}
          className="input-header"
        >
          {props.text}
        </Text>
        <Select
          options={options}
          placeholder={props.placeholder}
          className={`text-input mf-layer__input-text ${
            isValidated ? "" : "input-not-validated"
          }`}
          value={props.value}
          onChange={props.onChange}
          onSearch={(text) => {
            setOptions(
              states.filter((state) =>
                state.toLowerCase().includes(text.toLowerCase())
              )
            );
          }}
          onOpen={() => setOptions(states)}
          onBlur={() => {
            if (props.validationFn) {
              setIsValidated(props.validationFn(props.value));
            }
          }}
          plain
        ></Select>

        <Text
          color="#f44336"
          textAlign="start"
          size="xsmall"
          margin={{ left: "5px" }}
          className="input-header"
          style={{
            visibility: `${isValidated ? "hidden" : "visible"}`,
            whiteSpace: "nowrap",
            minHeight: "18px",
          }}
        >
          {props.validationText}
        </Text>
      </Box>
    </Grommet>
  );
}

const states = [
  "AL",
  "AK",
  "AS",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FM",
  "FL",
  "GA",
  "GU",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MH",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "MP",
  "OH",
  "OK",
  "OR",
  "PW",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VI",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];
