// { This page is for reusing the checkbox input }

//We installed react-bootstrap and used the form component from the library.
import Form from "react-bootstrap/Form";

//Css page 
import Styles from "./Checkbox.module.scss";

const CheckboxType = (props) => {
  return (
    <div key={props.id} className= "mb-3">
      <label>
        <Form.Check className={props.className} value={props.value} type={props.type} label={props.label} name={props.group} onClick={props.onClick}/>
      </label>
    </div>
  );
};

const CheckboxTypeCustom = (props) => {
  return (
    <div key={props.id} className= "mb-3">
      <label>
        <Form.Check className={props.className} value={props.value} type="radio" label={props.label} name={props.name} onClick={props.onClick}/>
      </label>
    </div>
  );
  
  // return (
  //   <label
  //     className={Styles.radioLabel}
  //   >
  //     <input type="radio" name="Innerradio"/>
  //     <div className={Styles.radioinnerBox}>
  //       {props.title ?<h3 className={Styles.radioTitle}>{props.title}</h3>:null}
  //     </div>
  //   </label>
  // );
};

CheckboxType.defaultprops = {
  type: "checkbox",
  label: "Label",
  mandatory: "*",
  active: false,
  class: "checkbox",
  group:"",
  value:"",
  onClick:"",
  className: ""
};

CheckboxTypeCustom.defaultprops = {
  title: "Select",
  name: ""
};

export default CheckboxType;
export { CheckboxTypeCustom };
