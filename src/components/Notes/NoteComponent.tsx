import { Box, Text, Button, TextArea } from "grommet";
import { Edit, Trash } from "grommet-icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateNote, deleteNote } from "../../core/notes/NoteSlice";
import useUser from "../Routes/useUser";

export default function NoteComponent(props) {
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  const user = useUser();

  useEffect(() => setNote(props.note.note), [props.note]);
  useEffect(() => console.log(user), [user]);
  return (
    <Box
      className="input-text"
      fill={props.fill}
      margin="xsmall"
      align="start"
      border={{ color: "#e9ecf1", size: "small" }}
      pad="8px"
      round={{ size: "8px" }}
      style={{ minHeight: "75px", maxWidth: "95%" }}
    >
      <Box direction="row-responsive" justify="between" fill="horizontal">
        <Text
          margin={{ right: "xsmall" }}
          size="small"
          color="#708090"
          style={{ lineHeight: 1.5 }}
        >
          {new Date(props.note?.last_modified).toLocaleString()}
        </Text>
        <Box direction="row-responsive">
          <Box>
            <Button
              hoverIndicator="background"
              icon={<Edit size="small" color="#708090" />}
              color="#708090"
              onClick={(e) => {
                dispatch(
                  updateNote(
                    Object.assign({}, props.note, {
                      note: note,
                      last_modified: new Date(),
                      modified_by: "user",
                    })
                  )
                );
              }}
            />
          </Box>
          <Box>
            <Button
              hoverIndicator="background"
              onClick={(e) => {
                dispatch(deleteNote(props.note));
              }}
              disabled={user.user_name == "user" ? true : false}
              icon={<Trash size="small" color="#708090" />}
              color="#708090"
            />
          </Box>
        </Box>
      </Box>
      <Box style={{ lineHeight: 1.5 }} fill pad={{ top: "medium" }}>
        <TextArea
          plain
          className="notes-style"
          resize={false}
          fill={true}
          size="medium"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </Box>
    </Box>
  );
}
