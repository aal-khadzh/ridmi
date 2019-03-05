import { Tablist, Tab } from "evergreen-ui";

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
