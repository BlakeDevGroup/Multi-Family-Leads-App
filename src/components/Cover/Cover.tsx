import { IconButton } from "@mui/material";
import { Layer } from "grommet";
import { Close } from "grommet-icons";
import { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Cover.css";

export default function Cover({ isOpen = false, onClickOutside, children }) {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        onClickOutside();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <>
      {isOpen && (
        <Layer
          full
          margin="medium"
          modal={true}
          position="center"
          animation="slide"
          // onClickOutside={onClickOutside}
        >
          <div className="cover-close-button">
            <IconButton onClick={onClickOutside} size="large">
              <CloseIcon />
            </IconButton>
          </div>

          {children}
        </Layer>
      )}
    </>
  );
}
