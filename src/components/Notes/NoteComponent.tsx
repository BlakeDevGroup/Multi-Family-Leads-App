import { Grommet, Box, Text, TextArea, Button  } from "grommet";
import { Edit, Trash } from "grommet-icons";



export default function NoteComponent(props) {

    return (
          <Box
            className="input-text"
            fill={props.fill}
            margin="xsmall"
            border={{ color: "#e9ecf1", size: "small" }}
            pad="8px"
            round={{ size: "8px" }}
          >
            <Box direction="column" >
              <Box direction="row-responsive" justify="between"  >
                <Box direction="row-responsive" >
                  <Text  size="small" color="#99A3C0" margin="xxsmall">
                    {props.note.dateCreated.substring(4)}
                  </Text>
                  <Text size="small" color="#99A3C0" margin="xxsmall">
                    {props.note.timeCreated}
                  </Text>
                  </Box>
                  <Box direction="row-responsive" >
                  <Button hoverIndicator="background" icon={<Edit size="15px" color="#99A3C0" />}  color="#99A3C0" >
                    
                  </Button>
                  <Text alignSelf="center" color="#99A3C0"  >|</Text>
                  <Button hoverIndicator="background"  onClick={(e) => {console.log(props.notes)}} icon={<Trash size="15px" color="#99A3C0" />}  color="#99A3C0" >
                  </Button>
                </Box>
              </Box>
              <Text size="small" margin="small">
                {props.note.note}
              </Text>
            </Box>
              
          </Box>
  
    )
}