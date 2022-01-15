import { Box, Layer } from "grommet";
import React from "react";
export default function MainLayer(props) {
  return (
    <Box>
      {props.open && (
        <Layer full="vertical" position="right" onClickOutside={props.onClose}>
          {props.children}
        </Layer>
      )}
    </Box>
  );
}
