import { Text, DataTable } from "grommet";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OwnerAPI from "../../core/owner/Owner.api";
import { setOwners } from "../../core/owner/OwnerSlice";
import Cover from "../Cover/Cover";
import "./Owner.css";
import OwnerPage from "./OwnerPage";
import { WebsiteLevelHeader } from "../Headers/WebsiteLevelHeader";
import PropertyWorkflow from "../PropertiesWorkflow/PropertyWorkflow";

const ownerAPI = new OwnerAPI();
const columns = [
  {
    property: "name",
    header: <Text color="#99A3C0">Name</Text>,
    search: true,
  },
  {
    property: "entity",
    header: <Text color="#99A3C0">Entity</Text>,
    search: true,
  },
  {
    property: "number",
    header: <Text color="#99A3C0">Phone Number</Text>,
    search: true,
  },
  {
    property: "email",
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
    return state.owners?.owners;
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

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <>
      <WebsiteLevelHeader
        onOpen={() => {
          setOpen(true);
          setComponent(<PropertyWorkflow />);
        }}
      />
      <div className="owner-content">
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
