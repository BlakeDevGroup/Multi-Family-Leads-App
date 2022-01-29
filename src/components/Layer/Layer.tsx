import { Box, Layer } from "grommet";
export default function MainLayer(props) {
  return (
    <Box>
      {props.open && (
        <Layer full="vertical" position="right">
          {props.children}
        </Layer>
      )}
    </Box>
  );
}
