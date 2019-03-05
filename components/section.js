import React from "react";
import PropTypes from "prop-types";

import { Pane } from "evergreen-ui";

const Section = ({ children }) => (
  <Pane
    width="100%"
    height="100%"
    display="flex"
    justifyContent="spaceBetween"
    alignItems="center"
  >
    {children}
  </Pane>
);

Section.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

export default Section;
