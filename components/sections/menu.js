import { Tablist, Tab } from "evergreen-ui";

const Menu = props => (
  <Tablist>
    {props.menuItems.map(tab => (
      <Tab
        marginLeft={0}
        key={tab}
        id={tab}
        onSelect={() => props.onSelect(tab)}
        isSelected={tab === props.isSelected}
      >
        {tab}
      </Tab>
    ))}
  </Tablist>
);

export default Menu;
