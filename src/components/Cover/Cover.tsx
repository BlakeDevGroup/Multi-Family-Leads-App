import { Layer } from "grommet";
import { Close } from "grommet-icons";
import { useEffect } from "react";
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
          <Close
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
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
