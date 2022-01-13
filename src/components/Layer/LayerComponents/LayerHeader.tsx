import { Box, Anchor, Header, Button } from "grommet";
import { Globe } from "grommet-icons";
import PropertyAPI from "../../../core/property/Property.api";
import "./SubmitButton.css";
import {
  updateProperty,
  addProperty,
} from "../../../core/property/PropertySlice";
import { useDispatch } from "react-redux";

const api = new PropertyAPI();

export default function LayerHeader(props) {
  const dispatch = useDispatch();
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
      <Box pad="small" height="xxsmall">
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
        />
      </Box>
    </Header>
  );
}
