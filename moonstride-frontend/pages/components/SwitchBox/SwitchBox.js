// { This page is for reusing the checkbox input }

//We installed react-bootstrap and used the form component from the library.
import Form from "react-bootstrap/Form";

//Css page 
import Styles from "./SwitchBox.module.scss";

const SwitchBoxType = (props) => {
  return (
    <div key={props.id} className= "mb-3">
      <label>
        <Form.Switch className={props.className} value={props.value} type={props.type} label={props.label} name={props.group} onClick={props.onClick}/>
      </label>
    </div>
  );
};

const SwitchBoxTypeCustom = (props) => {
  return (
    <label
      className={Styles.radioLabel}
    >
      <input type="radio" name="Innerradio"/>
      <div className={Styles.radioinnerBox}>
        {props.title ?<h3 className={Styles.radioTitle}>{props.title}</h3>:null}
      </div>
    </label>
  );
};

CheckboxType.defaultprops = {
  type: "radio",
  label: "Label",
  mandatory: "*",
  active: false,
  class: "radio",
  group:"",
  value:"",
  onClick:"",
  className: ""
};

CheckboxTypeCustom.defaultprops = {
  title: "Select"
};

export default SwitchBoxType;
export { SwitchBoxTypeCustom };
