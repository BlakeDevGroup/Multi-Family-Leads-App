import { Text, Box, DataTable, Anchor, Header, Button } from "grommet";
import { Globe } from "grommet-icons";
import { useEffect, useState } from "react";
import { EmailValidationScope } from "../../common/validation/impl/scopes/EmailValidationScope";
import { NumericValidationScope } from "../../common/validation/impl/scopes/NumericValidationScope";
import ValidationBroker from "../../common/validation/impl/ValidationBroker";
import LayerContacts from "../Layer/LayerComponents/LayerContacts";
import LayerHeader from "../Layer/LayerComponents/LayerHeader";
import LayerNumber from "../Layer/LayerComponents/LayerNumber";

const columns = [
  {
    property: "street",
    header: <Text color="#99A3C0">Street</Text>,
    search: true,
  },
  {
    property: "city",
    header: <Text color="#99A3C0">City</Text>,
    search: true,
  },
  {
    property: "state",
    header: <Text color="#99A3C0">State</Text>,
    search: true,
  },
  {
    property: "zip_code",
    header: <Text color="#99A3C0">Zip Code</Text>,
    search: true,
  },
  {
    property: "units",
    header: <Text color="#99A3C0">Units</Text>,
    search: true,
  },
];

const testData = [
  {
    street: "1960 De La Palma Ave",
    city: "Bartow",
    state: "FL",
    zip_code: "33830",
    units: "1",
  },
  {
    street: "300 73rd Ave N",
    city: "St Petersburg",
    state: "FL",
    zip_code: "33706",
    units: "300",
  },
  {
    street: "6214 E Lake Sammamish PKWY NE",
    city: "Redmond",
    state: "WA",
    zip_code: "98052",
    units: "50",
  },
];
export default function OwnerPage({ setOpen, action = "create", data }) {
  const [name, setName] = useState("");
  const [entity, setEntity] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    setName(data?.owner_name);
    setEntity(data?.owner_entity);
    setEmail(data?.owner_email);
    setNumber(data?.owner_number);
  }, [data]);

  return (
    <>
      <Box
        width="large"
        overflow="hidden"
        fill="vertical"
        pad={{ right: "10px" }}
        margin="auto"
      >
        <Box
          style={{ maxHeight: "50vh", minHeight: "unset" }}
          direction="column"
          align="center"
        >
          <Header
            className="navbar"
            background="#ffffff"
            pad="small"
            height="xxsmall"
            fill="horizontal"
            // elevation="xsmall"
          >
            <Box>
              <Anchor
                icon={<Globe color="#43588F" />}
                label="Central Valley Property Advisors"
                color="#43588F"
              />
            </Box>
            <Box pad="small" height="xxsmall">
              <Button
                className="text-color"
                label="Submit"
                color="#E9ECF1"
                size="medium"
                onClick={(e) => {
                  setOpen(false);
                }}
              />
            </Box>
          </Header>
        </Box>
        <Box direction="row-responsive" margin="small">
          <LayerContacts
            text="Name"
            placeholder="Owner Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <LayerContacts
            text="Entity"
            value={entity}
            onChange={(e) => setEntity(e.target.value)}
          />
        </Box>
        <Box direction="row-responsive" margin="small">
          <LayerContacts
            text="Email"
            placeholder="xxxxx"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            validationFn={(value) =>
              ValidationBroker.validate(new EmailValidationScope(value))
            }
            validationText="Please enter a valid email address"
          />
          <LayerNumber
            text="Phone Number"
            value={number}
            onChange={setNumber}
            validationFn={(value) =>
              ValidationBroker.validate(new NumericValidationScope(value))
            }
            validationText="Phone Number can only contain numbers"
          />
        </Box>
      </Box>
      {action == "put" && (
        <Box
          overflow="hidden"
          fill="vertical"
          background="#f1f5f8"
          style={{ boxShadow: "0px 1px 2px rgb(0 0 0 / 20%) inset" }}
        >
          <Box
            direction="column"
            pad={{ right: "10px" }}
            justify="start"
            background="white"
            margin="10px"
            style={{ boxShadow: "rgb(0 0 0 / 20%) 1px 1px 5px" }}
          >
            <DataTable
              border={{ side: "bottom", color: "#EEF1F7", size: "small" }}
              paginate={{ size: "medium" }}
              columns={columns}
              data={testData}
            ></DataTable>
          </Box>
        </Box>
      )}
    </>
  );
}
