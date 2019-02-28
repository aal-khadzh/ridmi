import { Textarea as EvergreenTextarea } from "evergreen-ui";

const Textarea = props => (
  <EvergreenTextarea
    height="100%"
    style={{ resize: "none" }}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
  />
);

export default Textarea;
