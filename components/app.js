import React from "react";

import { Pane } from "evergreen-ui";

import { Menu, MenuItem } from "./menu";
import Previewer from "./sections/previewer";
import Constructor from "./sections/constructor";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Previewer"
    };
    this.handleMenuItemSelection = this.handleMenuItemSelection.bind(this);
  }

  handleMenuItemSelection(tabName) {
    this.setState({
      activeTab: tabName
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="window">
          <Menu>
            <MenuItem
              tabName="Previewer"
              activeTab={this.state.activeTab}
              handleMenuItemSelection={this.handleMenuItemSelection}
            />
            <MenuItem
              tabName="Constructor"
              activeTab={this.state.activeTab}
              handleMenuItemSelection={this.handleMenuItemSelection}
            />
          </Menu>
          <Pane height="100%" background="blueTint">
            {this.state.activeTab == "Previewer" && <Previewer />}
            {this.state.activeTab == "Constructor" && <Constructor />}
          </Pane>
        </div>
        <style>{`
        .window {
          width: 100vw;
          height: 100vh;
          padding: 64px;
        }
      `}</style>
      </React.Fragment>
    );
  }
}

export default App;
