import PropertyAPI from "../../core/property/Property.api";
import NoteApi from "../../core/notes/Note.api";
import OwnerAPI from "../../core/owner/Owner.api";
import { useEffect, useState } from "react";
import { EmailValidationScope } from "../../common/validation/impl/scopes/EmailValidationScope";
import ValidationBroker from "../../common/validation/impl/ValidationBroker";
import { ControlledInput } from "../../common/UI/Form/ControlledInput";
import "./Owner.css";
import { Button } from "@mui/material";
import { PhoneNumberInput } from "../../common/UI/Form/PhoneNumberInput";
import { Owner } from "../../core/owner/Owner";
import { Property } from "../../core/property/Property";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import NoteComponent from "../Notes/NoteComponent";
import SectionTitle from "../Typography/SectionTitle";
import { deleteOwner, updateOwner } from "../../core/owner/OwnerSlice";
const propertyAPI = new PropertyAPI();
const noteAPI = new NoteApi();
const ownerAPI = new OwnerAPI();

const columns: GridColDef[] = [
  {
    field: "street",
    headerName: "Street",
    width: 150,
    sortable: true,
    hideable: false,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "city",
    headerName: "City",
    width: 150,
    sortable: true,
    hideable: false,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "state",
    headerName: "State",
    width: 150,
    sortable: true,
    hideable: false,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "zip_code",
    headerName: "Zip Code",
    width: 150,
    sortable: true,
    hideable: false,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "units",
    headerName: "Units",
    width: 150,
    sortable: true,
    hideable: false,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "purchase_price",
    headerName: "Purchase Price",
    width: 150,
    sortable: true,
    hideable: false,
    headerAlign: "center",
    align: "center",
    type: "number",
  },
  {
    field: "purchase_date",
    headerName: "Purchase Year",
    width: 150,
    sortable: true,
    hideable: false,
    headerAlign: "center",
    align: "center",
  },
];

type OwnerPageProps = {
  setOpen: Function;
  action?: string;
  data: Owner;
};

export default function OwnerPage({
  setOpen,
  action = "put",
  data,
}: OwnerPageProps) {
  const [name, setName] = useState("");
  const [entity, setEntity] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [ownerProperties, setOwnerProperties] = useState<Property[]>([]);
  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => {
    return state.notes.notes.filter((note) => {
      let returnNote = false;

      for (let i = 0; i < (ownerProperties?.length || 0); i++) {
        if (ownerProperties[i].id == note.property_id) {
          returnNote = true;
        }
      }

      if (returnNote) {
        return returnNote;
      }

      return false;
    });
  });

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  useEffect(() => {
    setName(data?.name);
    setEmail(data?.email);
    setEntity(data?.entity);
    setNumber(data?.phone_number);
  }, [data]);

  useEffect(() => {
    console.log(data);
    if (data?.id) {
      ownerAPI.getProperties(data.id).then((data) => {
        setOwnerProperties(data);
      });
    }
  }, [data]);

  useEffect(() => {
    console.log(notes);
  }, [ownerProperties]);

  return (
    <>
      <div className="owner-page-wrapper">
        <div className="owner-page-content-wrapper">
          <div className="owner-page-inputs-wrapper">
            <div className="header-layout">
              <SectionTitle label="Owner Details" />
              <div className="submit-layout">
                <Button
                  sx={{ m: 1 }}
                  className="sumbit-layout"
                  variant="contained"
                  color="primary"
                  onClick={(e) => {
                    dispatch(
                      updateOwner({
                        name: name,
                        email: email,
                        entity: entity,
                        phone_number: number,
                        id: data.id,
                      })
                    );
                    setOpen(false);
                  }}
                >
                  Submit
                </Button>
                <Button
                  className="sumbit-layout"
                  variant="contained"
                  color="error"
                  onClick={(e) => {
                    dispatch(deleteOwner(data.id || ""));
                    setOpen(false);
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
            <div className="inputs-layout">
              <div className="single-input">
                <ControlledInput
                  label="Name"
                  placeholder="Owner Name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="single-input">
                <ControlledInput
                  label="Entity"
                  value={entity}
                  onChange={(e) => setEntity(e.target.value)}
                />
              </div>
            </div>
            <div className="inputs-layout">
              <div className="single-input">
                <ControlledInput
                  label="Email"
                  placeholder="xxxxx"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  validationFn={(value) =>
                    ValidationBroker.validate(new EmailValidationScope(value))
                  }
                  validationText="Please enter a valid email address"
                />
              </div>
              <div className="single-input">
                <PhoneNumberInput
                  text="Phone Number"
                  value={number}
                  onChange={setNumber}
                />
              </div>
            </div>
          </div>

          <div className="owner-page-notes-wrapper">
            <div className="owner-page-notes-header">
              <SectionTitle label="Comments" />
            </div>
            <div>
              {notes?.map((note) => (
                <NoteComponent note={note} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {action == "put" && (
        <div className="owner-table-wrapper">
          <div className="owner-table-glass"></div>
          <div
            className="owner-data-table"
            style={{ boxShadow: "rgb(0 0 0 / 20%) 1px 1px 5px" }}
          >
            <div
              style={{
                height: "90vh",
                width: "100%",
              }}
            >
              <DataGrid
                style={{ borderRadius: "10px" }}
                disableSelectionOnClick={true}
                rows={ownerProperties || []}
                columns={columns}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
