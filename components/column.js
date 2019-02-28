import { Pane } from "evergreen-ui";

const Column = props => (
  <Pane
    overflow={props.overflow}
    height="100%"
    padding="1%"
    flex={1}
    display={props.display}
    flexDirection={props.flexDirection}
    justifyContent={props.justifyContent}
  >
    {props.children}
  </Pane>
);

export default Column;
