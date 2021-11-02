import { Box, Layer } from "grommet";
import { useState } from "react";
import HomeView from "./LayerComponents/HomeView";
export default function MainLayer(props) {
  return (
    <Box>
      {props.open && (
        <Layer full="vertical" position="right" onClickOutside={props.onClose}>
          <HomeView note={props.note} setNote={props.setNote} />
        </Layer>
      )}
    </Box>
  );
}
