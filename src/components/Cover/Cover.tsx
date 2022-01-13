import { Box, Layer } from "grommet";
import React, { useEffect, useState } from "react";
import { Close } from "grommet-icons";
export default function Cover({ isOpen = false, onClickOutside, children }) {
  return (
    <>
      {isOpen && (
        <Layer
          full
          modal={false}
          animation="slide"
          onClickOutside={onClickOutside}
        >
          <Close
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              fontSize: "25px",
              cursor: "pointer",
            }}
            onClick={onClickOutside}
          ></Close>

          {children}
        </Layer>
      )}
    </>
  );
}
