import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Container } from "react-bootstrap";
import ButtonType from "../../Button/Button";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
/*import CanvasPopup from "../AvailabilityPopup/AvailabilityPopupState";*/
import Styles from "./MainMenu.module.scss";
import Offcanvas from "react-bootstrap/Offcanvas";
import AvailabilityPopupContent from "../AvailabilityPopup/AvailabilityPopup";
function Menu(props) {
  return (
    <li className={Styles.menuItem}>
      <Link href="/">{props.brand}</Link>
    </li>
  );
}
export const MainMenu = (props) => {
  const menuitems = ["About", "Important information", "Itenerary", "Reviews"];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let price = '';
  if(props.price){
    price = props.price
  }

  /*const a = useContext(CanvasPopup);*/
  return (
    <>
      <section className={Styles.headerMenu}>
        <Container>
          <div className={Styles.mainMenu}>
            <ul className={Styles.leftMenu}>
              {menuitems.map((menuitem) => (
                <Menu key="1" brand={menuitem} />
              ))}
            </ul>
            <div className={Styles.rightMenu}>
              <div className={Styles.headerPrice}>
                From ${price} 
               </div>
              <ButtonType
                variant="primary"
                onClick={handleShow}
                className={`btntype1 mt-4 ${Styles.headerBtn}`}
                name= "Check availability"
              />
              <Offcanvas
                className={Styles.offcanvasBox}
                show={show}
                onHide={handleClose}
                placement="end"
              >
                <Offcanvas.Header
                  className={Styles.offcanvasHead}
                  closeButton
                ></Offcanvas.Header>
                <Offcanvas.Body className={Styles.offcanvasinnerBox}>
                  <AvailabilityPopupContent />
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>
          {/*<div>{a}</div>*/}
        </Container>
      </section>
    </>
  );
};
export default MainMenu;
