import { Tablist, Tab } from "evergreen-ui";
import PropTypes from "prop-types";

export const Menu = ({ children }) => <Tablist>{children}</Tablist>;

export const MenuItem = ({ tabName, activeTab, handleMenuItemSelection }) => (
  <Tab
    marginLeft={0}
    key={tabName}
    id={tabName}
    isSelected={tabName === activeTab}
    onSelect={() => handleMenuItemSelection(tabName)}
  >
    {tabName}
  </Tab>
);

Menu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

MenuItem.propTypes = {
  tabName: PropTypes.string,
  activeTab: PropTypes.string,
  handleMenuItemSelection: PropTypes.func
};
