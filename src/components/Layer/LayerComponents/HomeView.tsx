import { Box } from "grommet";
import LayerContacts from "./LayerContacts";
import LayerHeader from "./LayerHeader";
import LayerUnits from "./LayerUnits";
import LayerAddress from "./LayerAddress";
import "../Layer.css";
import NotesWrapper from "../../Notes/NotesWrapper";

export default function HomeView(props) {
  console.log(new Date().toString());
  return (
    <Box width="large" overflow="hidden" fill="vertical" direction="column">
      <Box style={{ maxHeight: "50vh", minHeight: "unset" }}>
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
            text="Street"
            placeholder="123 Main St"
            value={
              props.data && props.data.address ? props.data.address.street : ""
            }
          />
          <LayerContacts
            text="City"
            value={
              props.data && props.data.address ? props.data.address.city : ""
            }
          />
        </Box>
        <Box direction="row-responsive" margin="small">
          <LayerContacts
            text="State"
            value={
              props.data && props.data.address ? props.data.address.state : ""
            }
          />
          <LayerContacts
            text="Zip Code"
            placeholder="xxxxx"
            value={
              props.data && props.data.address
                ? props.data.address.zip_code
                : ""
            }
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
      </Box>
      <Box style={{ maxHeight: "50vh" }}>
        <NotesWrapper />
      </Box>
    </Box>
  );
}
