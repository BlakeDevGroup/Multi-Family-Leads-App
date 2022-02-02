import { Main } from "grommet";
import { useState } from "react";
import FixedSideBarComponent from "../SideBar/FixedSideBar";
import "./shell.css";

export default function Shell({ view }) {
  const [open, setOpen] = useState(false);

  return (
    <Main background="#f1f5f8" overflow="hidden">
      <div className="mfl-shell-container">
        <div className="mfl-shell-content-body">{view}</div>
      </div>
    </Main>
  );
}
