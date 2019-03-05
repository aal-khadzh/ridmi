import { TextInput, Combobox, Pane, Button } from "evergreen-ui";

const Input = props => (
  <Pane display={"flex"}>
    <Combobox
      width="100%"
      openOnFocus
      items={props.comboboxItems}
      placeholder={props.placeholder}
      onChange={props.comboboxOnChange}
    />
    <TextInput
      width="100%"
      value={props.inputValue}
      onChange={props.inputOnChange}
    />
    <Button onClick={props.buttonOnClick}>Add</Button>
  </Pane>
);

export default Input;
