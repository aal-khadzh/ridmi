import { TextInput, Combobox, Pane, Button } from "evergreen-ui";

const Input = props => (
  <Pane display={"flex"}>
    <Combobox
      width="100%"
      openOnFocus
      items={props.comboboxItems}
      onChange={props.comboboxOnChange}
      placeholder={props.placeholder}
    />
    <TextInput
      width="100%"
      onChange={props.inputOnChange}
      value={props.inputValue}
    />
    <Button onClick={props.buttonOnClick}>Add</Button>
  </Pane>
);

export default Input;
