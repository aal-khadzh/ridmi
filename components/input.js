import { TextInput, Combobox, Pane, Button } from "evergreen-ui";
import PropTypes from "prop-types";

const Input = ({
  comboboxItems,
  placeholder,
  comboboxOnChange,
  inputValue,
  inputOnChange,
  buttonOnClick
}) => (
  <Pane display={"flex"}>
    <Combobox
      width="100%"
      openOnFocus
      items={comboboxItems}
      placeholder={placeholder}
      onChange={comboboxOnChange}
    />
    <TextInput width="100%" value={inputValue} onChange={inputOnChange} />
    <Button onClick={buttonOnClick}>Add</Button>
  </Pane>
);

Input.propTypes = {
  placeholder: PropTypes.string,
  comboboxItems: PropTypes.array,
  comboboxOnChange: PropTypes.func,
  inputValue: PropTypes.string,
  inputOnChange: PropTypes.func,
  buttonOnClick: PropTypes.func
};

export default Input;
