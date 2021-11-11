import {
  Box,
  Layer,
  TextInput,
  Text,
  TextArea,
  Button,
  DataTable,
} from "grommet";
import { Checkmark } from "grommet-icons";
import { useState } from "react";
import LeftLayerNotes from "./LayerNotes";
import LayerContacts from "./LayerContacts";
import LayerNotes from "./LayerNotes";
import LayerHeader from "./LayerHeader";
import NoteButton from "./NotesButton";
import LayerUnits from "./LayerUnits";
import LayerAddress from "./LayerAddress";
import "../Layer.css";

type NoteItem = {
  note: string;
  created: string;
};
export default function HomeView(props) {
  const [notes, setNotes] = useState<NoteItem[]>([]);
  const [note, setNote] = useState<string>("");
  return (
    <Box width="large" overflow="auto" fill="vertical">
      <Box
        direction="row-responsive"
        margin={{ top: "small", right: "large", bottom: "small" }}
      >
        <Box fill>
          <LayerHeader />
        </Box>
      </Box>

      <Box direction="row-responsive" margin="small">
        <LayerContacts
          fill={"horizontal"}
          text="Contact Person"
          placeholder="First Last"
          value={props.data ? props.data.owner_name : ""}
        />
        <LayerContacts
          fill={"horizontal"}
          text="Contact Number"
          placeholder="xxx-xxx-xxxx"
          value={props.data ? props.data.owner_number : ""}
        />
      </Box>
      <Box direction="row-responsive" margin="small">
        <LayerContacts
          fill={"horizontal"}
          text="Ownership Entity"
          placeholder="Company"
          value={props.data ? props.data.owner_entity : ""}
        />
        <LayerContacts
          fill={"horizontal"}
          text="Contact Email"
          placeholder="Email@email.com"
          value={props.data ? props.data.owner_email : ""}
        />
      </Box>
      <LayerUnits value={props.data ? props.data.units : ""} />
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
          <LayerAddress
            text="Street"
            placeholder="123 Main St"
            value={props.data ? props.data.address.street : ""}
          />
          <LayerAddress
            text="City"
            value={props.data ? props.data.address.city : ""}
          />
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
          <LayerAddress
            text="State"
            value={props.data ? props.data.address.state : ""}
          />
          <LayerAddress
            text="Zip Code"
            placeholder="xxxxx"
            value={props.data ? props.data.address.zip_code : ""}
          />
        </Box>
      </Box>
      <Box margin="small" direction="row-responsive" height="xsmall">
        <Box
          pad={{ left: "small" }}
          className="notes-box"
          round={{ size: "8px" }}
          fill
          border={{ color: "#e9ecf1", size: "small" }}
        >
          <Text
            color="#99A3C0"
            textAlign="start"
            size="xsmall"
            // margin={{ left: "5px" }}
            className="notes-style"
          >
            Notes
          </Text>
          <TextArea
            plain
            className="notes-style"
            resize={false}
            fill={true}
            // placeholder="Notes"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            size="medium"
          />
        </Box>
        <Box margin="xsmall" color="blue" round align="center"
        alignSelf="center">
          <Button
            plain={false}
            color="#00FF00"
            hoverIndicator={true}
            icon={<Checkmark color="#00FF00" />}
            onClick={(e) => {
              setNotes(
                [{ note: note, created: new Date().toDateString() }].concat(
                  notes
                )
              ), setNote("");
            }}
          />
        </Box>
        {/* <LayerNotes setNotes={setNotes}/>
        <NoteButton /> */}
      </Box>
      <Box margin="xsmall" color="blue" round>
        {notes.map((note) => (
          <Box direction="row">
            <Box
              className="input-text"
              fill={props.fill}
              margin={{ bottom: "xsmall", left: "xsmall"  }}
              border={{ color: "#e9ecf1", size: "small" }}
              pad="8px"
              round={{ size: "8px" }}
              width="70%"
            >
              {note.note}
            </Box>
            <Box
              
              className="input-text"
              fill={props.fill}
              margin={{ bottom: "xsmall", left: "xsmall" , right: "xxsmall" }}
              align="center"
              border={{ color: "#e9ecf1", size: "small" }}
              pad="8px"
              round={{ size: "8px" }}
              width="30%"
            >
              {note.created}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
