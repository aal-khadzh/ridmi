import { Textarea as EvergreenTextarea } from "evergreen-ui";
import PropTypes from "prop-types";

export const Textarea = ({ placeholder, value, onChange }) => (
  <EvergreenTextarea
    height="100%"
    style={{ resize: "none" }}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

Textarea.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Textarea;
