import { Text, Box, DataTable } from "grommet";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OwnerAPI from "../../core/owner/Owner.api";
import { setOwners } from "../../core/owner/OwnerSlice";
import Cover from "../Cover/Cover";
import MainLayer from "../Layer/Layer";
import NavBar from "../NavBar/NavBar";
import "./Owner.css";
import OwnerPage from "./OwnerPage";
const ownerAPI = new OwnerAPI();
import { WebsiteLevelHeader } from "../Headers/WebsiteLevelHeader";

const columns = [
  {
    property: "owner_name",
    header: <Text color="#99A3C0">Name</Text>,
    search: true,
  },
  {
    property: "owner_entity",
    header: <Text color="#99A3C0">Entity</Text>,
    search: true,
  },
  {
    property: "owner_number",
    header: <Text color="#99A3C0">Phone Number</Text>,
    search: true,
  },
  {
    property: "owner_email",
    header: <Text color="#99A3C0">Email</Text>,
    search: true,
  },
];

const data = [
  {
    owner_name: "Caleb Blake",
    owner_entity: "CodeX",
    owner_number: "8635129916",
    owner_email: "cdblake31@gmail.com",
  },
];
export default function Owner(props) {
  const [open, setOpen] = useState(false);
  const [component, setComponent] = useState({});
  const data = useSelector((state: any) => {
    return state.properties?.properties;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    // propertyAPI.getAll().then((data) => {
    //   dispatch(setProperties(data));
    // });

    ownerAPI.getAll().then((data) => {
      dispatch(setOwners(data));
    });
  }, []);
  
  return (
    <>
      <WebsiteLevelHeader
        onOpen={() => {
          setOpen(true);
          setComponent(
            <OwnerPage setOpen={setOpen} data={{}} action="create" />
          );
        }}
      />
      <div 
      className="owner-content"
      >
        <DataTable
          border={{ side: "bottom", color: "#EEF1F7", size: "small" }}
          paginate={{ size: "medium" }}
          columns={columns}
          data={data}
          onClickRow={({ datum }) => {
            setOpen(true);
            setComponent(
              <OwnerPage setOpen={setOpen} data={datum} action="put" />
            );
          }}
        />
        <Cover isOpen={open} onClickOutside={() => setOpen(false)}>
          {component}
        </Cover>
      </div>
    </>
  );
}
