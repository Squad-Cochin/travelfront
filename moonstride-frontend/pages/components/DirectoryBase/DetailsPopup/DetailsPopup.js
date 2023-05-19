import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaWeight } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import DetailsPopupSlider from "../DetailsPopupSlider/DetailsPopupSlider";
import Styles from "./DetailsPopup.module.scss";

function MyVerticallyCenteredModal(props) {
  return (
    
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        {/* closeButton -->  If close button required add this to next line after Modal.Header  */}
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter" >
            {/* Kamakura Tour */}
            <DetailsPopupSlider />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Row>
            <Col xs={6} md={4}>
              <div className={Styles.sidebar}>
                <div className={Styles.sideBarOptions}>
                  <FaWeight /> <span className={Styles.title}> Duration </span>
                  <br></br>
                  <span className={Styles.SideBarOptionValue}>3Hrs</span>
                </div>

                <div className={Styles.sideBarOptions}>
                  <FaMapMarkerAlt /> <span className={Styles.title}> Location </span>
                  <br></br>
                  <span className={Styles.SideBarOptionValue}>
                    Address 01 Address 01 Address 01
                  </span>
                </div>

                <div className={Styles.sideBarOptions}>
                  <FaRegCalendarCheck />{" "}
                  <span className={Styles.title}> Included </span>
                  <br></br>
                  <span className={Styles.SideBarOptionValue}>English, Spanish</span>
                </div>

                <div className={Styles.sideBarOptions}>
                  <FaMobile />{" "}
                  <span className={Styles.title}> Mobile </span>
                  <br></br>
                  <span className={Styles.SideBarOptionValue}>+91 97 xxx xxx 05</span>
                </div>

              </div>
            </Col>
            <Col xs={12} md={8}>
              <h3>About Activity</h3>
              <p>
                
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. 
              </p>

              <p>
                
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p> <br></br>

              <h5>About Activity</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. 
              </p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <div className={Styles.CloseButton}>
             <Button className={Styles.btntype1} onClick={props.onHide}>Close</Button>
          </div>  
        </Modal.Footer>
      </Modal>
    
  );
}

export default MyVerticallyCenteredModal;
