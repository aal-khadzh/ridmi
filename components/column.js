import { Pane } from "evergreen-ui";
import PropTypes from "prop-types";

const Column = ({
  overflow,
  display,
  flexDirection,
  justifyContent,
  children
}) => (
  <Pane
    overflow={overflow}
    height="100%"
    padding="1%"
    flex={1}
    display={display}
    flexDirection={flexDirection}
    justifyContent={justifyContent}
  >
    {children}
  </Pane>
);

Column.propTypes = {
  overflow: PropTypes.string,
  display: PropTypes.string,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  children: PropTypes.element
};

export default Column;
