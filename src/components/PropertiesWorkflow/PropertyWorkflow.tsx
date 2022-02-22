import { Breadcrumbs, Link } from "@mui/material";
import "./PropertyWorkflow.css";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import OwnerComponent from "./OwnerComponent";
import PropertyComponent from "./PropertyComponent";
import ConfirmationComponent from "./ConfirmationComponent";
import { useEffect, useState } from "react";
import { addProperty } from "../../core/property/PropertySlice";
import { addOwner } from "../../core/owner/OwnerSlice";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { AsyncThunkAction, unwrapResult } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../store";
import { Owner } from "../../core/owner/Owner";

// export const useUnwrapAsyncThunk = () => {
//   const dispatch = useDispatch();
//   return useCallback(
//     <R extends any>(asyncThunk: AsyncThunkAction<R, any, any>): Promise<R> =>
//       dispatch(asyncThunk).then(unwrapResult),
//     [dispatch]
//   );
// };

type PropertyWorkflowProps = {
  onConfirm?: Function;
};

export default function PropertyWorkflow({ onConfirm }: PropertyWorkflowProps) {
  const [activePage, setActivePage] = useState("owner");
  const [newOwnerName, setNewOwnerName] = useState("");
  const [entity, setEntity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [existingOwner, setExistingOwner] = useState<Owner>();
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [units, setUnits] = useState("");
  const [purchaseDate, setPurchaseDate] = useState<Date | undefined>();
  const [purchasePrice, setPurchasePrice] = useState("");
  const [currentOwner, setCurrentOwner] = useState<Owner>();
  const dispatch = useAppDispatch();

  const completeWorkflow = async () => {
    /// IF OWNER_ID is FALSE, FIRST CREATE OWNER
    let owner_id;
    console.log(existingOwner?.id);
    if (!existingOwner) {
      const payload = await dispatch(
        addOwner({
          name: newOwnerName,
          entity: entity,
          email: email,
          phone_number: phone,
        })
      );
      owner_id = payload.payload.id;
    } else {
      owner_id = existingOwner.id;
    }

    dispatch(
      addProperty({
        city: city,
        street: street,
        state: state,
        units: parseInt(units),
        zip_code: zipcode,
        owner_id: owner_id,
        purchase_price: parseInt(purchasePrice),
        purchase_date: purchaseDate?.getFullYear() || undefined,
      })
    );
  };
  useEffect(() => {
    console.log(existingOwner);
  }, [existingOwner]);
  const ActiveComponent = (value) => {
    if (value === "owner") {
      return (
        <OwnerComponent
          onNext={() => {
            setActivePage("property");
          }}
          setNewOwnerName={setNewOwnerName}
          newOwnerName={newOwnerName}
          setEntity={setEntity}
          entity={entity}
          setEmail={setEmail}
          email={email}
          setPhone={setPhone}
          phone={phone}
          setExistingOwner={setExistingOwner}
          currentOwner={currentOwner}
          setCurrentOwner={setCurrentOwner}
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
          setStreet={setStreet}
          street={street}
          setCity={setCity}
          city={city}
          setState={setState}
          state={state}
          setZipcode={setZipcode}
          zipcode={zipcode}
          setPurchaseDate={setPurchaseDate}
          purchaseDate={purchaseDate}
          setUnits={setUnits}
          units={units}
          setPurchasePrice={setPurchasePrice}
          purchasePrice={purchasePrice}
        />
      );
    } else if (value === "confirmation") {
      return (
        <ConfirmationComponent
          newOwnerName={newOwnerName}
          entity={entity}
          email={email}
          phone={phone}
          street={street}
          city={city}
          state={state}
          zipcode={zipcode}
          purchasePrice={purchasePrice}
          purchaseDate={purchaseDate}
          units={units}
          currentOwner={currentOwner}
          onConfirm={() => {
            completeWorkflow();
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
