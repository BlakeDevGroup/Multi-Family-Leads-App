import { Box, Layer, TextInput, Text } from "grommet";
import LeftLayerHeader from "./LeftLayerComponents/LeftLayerHeader";
import LeftLayerInput from "./LeftLayerComponents/LeftLayerInput";
export default function LeftLayer(props) {
  return (
    <Box>
      {props.open && (
        <Layer full="vertical" position="right" onClickOutside={props.onClose}>
          <Box width="large" overflow="auto" fill="vertical">
            <Box>
              <LeftLayerHeader />
            </Box>
            <Box direction="row-responsive" overflow="">
              <LeftLayerInput text="Contact Person" placeholder="First Last" />
              <LeftLayerInput
                text="Contact Number"
                placeholder="xxx-xxx-xxxx"
              />
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  );
}
