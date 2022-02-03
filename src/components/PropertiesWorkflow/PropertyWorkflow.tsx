import { Breadcrumbs, Link } from "@mui/material";
import "./PropertyWorkflow.css";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import OwnerComponent from "./OwnerComponent";
import PropertyComponent from "./PropertyComponent";
import ConfirmationComponent from "./ConfirmationComponent";
import { useState } from "react";

type PropertyWorkflowProps = {
  onConfirm?: Function;
};

export default function PropertyWorkflow({ onConfirm }: PropertyWorkflowProps) {
  const [activePage, setActivePage] = useState("owner");

  const ActiveComponent = (value) => {
    if (value === "owner") {
      return (
        <OwnerComponent
          onNext={() => {
            setActivePage("property");
          }}
        />
      );
    } else if (value === "property") {
      return (
        <PropertyComponent
          onNext={() => {
            setActivePage("confirmation");
          }}
          onBack={() => {
            setActivePage("owner");
          }}
        />
      );
    } else if (value === "confirmation") {
      return (
        <ConfirmationComponent
          onConfirm={() => {
            if (onConfirm) onConfirm();
          }}
          onBack={() => {
            setActivePage("property");
          }}
        />
      );
    }
  };
  return (
    <div className="workflow-wrapper">
      <div className="breadcrumb-wrapper">
        <Breadcrumbs separator={<NavigateNextRoundedIcon fontSize="small" />}>
          <Link
            color={activePage === "owner" ? "secondary" : "primary"}
            underline="hover"
          >
            Owner Info
          </Link>
          <Link
            color={activePage === "property" ? "secondary" : "primary"}
            underline="hover"
          >
            Property Info
          </Link>
          <Link
            color={activePage === "confirmation" ? "secondary" : "primary"}
            underline="hover"
          >
            Confirmation
          </Link>
        </Breadcrumbs>
      </div>
      <div className="active-component">{ActiveComponent(activePage)}</div>
    </div>
  );
}
