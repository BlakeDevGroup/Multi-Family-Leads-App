import { Box, Layer, TextInput, Text } from "grommet";
import { useState } from "react";
import LeftLayerNotes from "./LayerNotes";
import LayerContacts from "./LayerContacts";
import LayerNotes from "./LayerNotes";
import LayerHeader from "./LayerHeader";
import NoteButton from "./NotesButton";
import "../Layer.css";

export default function HomeView(props) {
  return (
    <Box width="large" overflow="auto" fill="vertical">
      <Box>
        <LayerHeader />
      </Box>
      <Box direction="row-responsive" margin="small">
        <LayerContacts
          fill={"horizontal"}
          text="Contact Person"
          placeholder="First Last"
        />
        <LayerContacts
          fill={"horizontal"}
          text="Contact Number"
          placeholder="xxx-xxx-xxxx"
        />
      </Box>
      <Box direction="row-responsive">
        <Box
          direction="column"
          margin={{
            top: "small",
            bottom: "small",
            left: "small",
            right: "xxsmall",
          }}
          fill="horizontal"
        >
          <LayerContacts text="Street" placeholder="First Last" />
          <LayerContacts text="City" placeholder="First Last" />
        </Box>
        <Box
          basis="small"
          direction="column"
          margin={{
            top: "small",
            bottom: "small",
            left: "xxsmall",
            right: "small",
          }}
          fill="horizontal"
        >
          <LayerContacts text="State" placeholder="CA" />
          <LayerContacts text="Zip Code" placeholder="xxxxx" />
        </Box>
      </Box>
      <Box margin="small" direction="row-responsive">
        <LayerNotes />
        <NoteButton />
      </Box>
    </Box>
  );
}
