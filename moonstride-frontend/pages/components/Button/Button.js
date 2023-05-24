//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
//                           This component can be reused for buttons                           //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////


import Button from "react-bootstrap/Button";
import Styles from "./Button.module.scss";

// FUNCTION FOR A BUTTON COMPONENT
const ButtonType = (props) => {
  return (
    <>
      <Button
        variant="primary"
        type="button"
        value={props.value}
        className={props.className ?? `${Styles.btntype1}`}
        onClick={props.onClick}
        >
          {props.icon}
          {props.name}
        </Button>
    </>
  );
};

ButtonType.defaultProps = {
  width: "auto",
  icon: "",
  name: "",
  value: "Submit",
  disabled: false,
  className: "btntype2",
  onClick: function(){},
};

export default ButtonType;
