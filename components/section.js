import React from "react";

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

export default Section;
