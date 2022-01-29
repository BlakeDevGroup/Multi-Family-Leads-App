import { Box, Anchor, Header, Button } from "grommet";
import { Globe } from "grommet-icons";
import PropertyAPI from "../../../core/property/Property.api";
import "./SubmitButton.css";
import {
  updateProperty,
  addProperty,
  deleteProperty,
} from "../../../core/property/PropertySlice";
import { useDispatch } from "react-redux";
import useUser from "../../Routes/useUser";

const api = new PropertyAPI();

export default function LayerHeader(props) {
  const dispatch = useDispatch();
  const user = useUser();
  return (
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
      <Box pad="small" direction="row">
        <Button
          className="text-color"
          label="Submit"
          color="#E9ECF1"
          size="medium"
          onClick={(e) => {
            if (props.action == "create") {
              dispatch(addProperty(props.resource));
            } else if (props.action == "put") {
              dispatch(updateProperty(props.resource));
            }
            props.setOpen(false);
          }}
          margin={{ right: "5px" }}
        />
        <Button
          className="delete-button"
          label="Delete"
          color="#fe3839"
          size="medium"
          disabled={user.user_name == "user" ? true : false}
          onClick={(e) => {
            dispatch(deleteProperty(props.resource.id));
            props.setOpen(false);
          }}
        />
      </Box>
    </Header>
  );
}
