import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaWeight } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import DetailsPopupSlider from "../DetailsPopupSlider/DetailsPopupSlider";
import Styles from "./DetailsPopup.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-bootstrap/Dropdown";
import Select,{components} from 'react-select';
import ButtonType from "../../Button/Button";
import ReactDOM from "react-dom"


function MyVerticallyCenteredModal(props) {

  const [show, setShow] = useState(false);
  const handleOpen = () => {
    setShow(!show); // Toggle accordion
  };
 
  const [childCount, setchildCount] = useState([]);
  const [searchDetails, setsearchDetails] = useState({});
  const [children, setchildren] = useState(0);
  const [adult, setAdult] = useState(1);
  const [visible, setVisible] = useState(false)


  const sortByOptions = [
    { value: "1", label: "1" ,key:"1"},
    { value: "2", label: "2" ,key:"2"},
    { value: "3", label: "3" ,key:"3"},
    { value: "4", label: "4" ,key:"4"},
    { value: "5", label: "5" ,key:"5"},
    { value: "6", label: "6" ,key:"6"}
  ];
  const childcountOptions = [
    { value: "0", label: "0" ,key:"0"},
    { value: "1", label: "1" ,key:"1"},
    { value: "2", label: "2" ,key:"2"},
    { value: "3", label: "3" ,key:"3"},
    { value: "4", label: "4" ,key:"4"},

  ];
  const childageOptions = [
    { value: "1", label: "1" ,key:"1"},
    { value: "2", label: "2" ,key:"2"},
    { value: "3", label: "3" ,key:"3"},
    { value: "4", label: "4" ,key:"4"},
    { value: "5", label: "5" ,key:"5"},
    { value: "6", label: "6" ,key:"6"},
    { value: "7", label: "7" ,key:"7"},
    { value: "8", label: "8" ,key:"8"},
    { value: "9", label: "9" ,key:"9"},
    { value: "10", label: "10" ,key:"10"},
    { value: "11", label: "11" ,key:"11"},
    { value: "12", label: "12" ,key:"12"}

  ]
 
  const handleCountChild = (e) => {
    setchildren(e.value);
    const elements = Array.from({ length: e.value }, (_, index) => {
      return index;
    });
    setchildCount(elements)
  }
  
  const handleCountChildAges = (e) => {
    
  }

  const handleAdultCount = (e) => {
    setAdult(e.value);
  }

  const setChildAge = (e) => {
    let detailPersons = {};
    detailPersons.adult = adult;
    detailPersons.children = children;
    detailPersons.childAge = [];
    let ages = document.querySelectorAll(".select-age");
    ages.forEach((item) => {
      detailPersons.childAge.push(item.innerText)
    })

    var parent = document.querySelector(".dropdown-menu");
    parent.classList.remove("show");

    document.getElementById('dropdown-basic').innerText = `${adult} Adults`;
    setsearchDetails(detailPersons);
  }
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
             Al Majles Resort Day Pass
            <DetailsPopupSlider />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <div className={Styles.Availability}>
              <Row>
                    <Col xs={6} md={3}>
                      <div className={Styles.price}>
                        From <span className={Styles.value}> ₹3,703.64</span>
                      </div>
                    </Col>

                    <Col xs={6} md={3}> 
                       <div className="position-relative">
                          <div className={Styles.date_fromtext}></div>
                          <label>
                            {/* From date */}
                            <DatePicker
                              dateFormat="MMM dd"
                              // selected={startDate}
                              // onChange={(date) => {
                              //                 setStartDate(date); 
                              //                 setEndDate(date);
                              //           }}
                              // selectsStart
                              // startDate={startDate}
                              // endDate={startDate}
                              // minDate={startDate}
                            />
                          </label>
                        </div>
                    
                    </Col>

                    <Col xs={6} md={3}> 
                    <Dropdown className={Styles.selecttraveller_box}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  0 Adults
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {/* We are displaying this data in a dropdown. */}
                  <Row className="g-3">
                    <Col xs={6}>
                      <span className={Styles.label}>Adult</span>
                      <Select class="d-inline-block sort-select" defaultValue={sortByOptions[0]} onChange={handleAdultCount} options={sortByOptions}/>
                      {/* <SelectType label="Adult" /> */}
                    </Col>
                    <Col xs={6}>
                      <span className={Styles.label}>Children</span>
                      <Select class="d-inline-block sort-select" onChange={handleCountChild} defaultValue={childcountOptions[0]} options={childcountOptions}/>
                      {/* <SelectType label="Children" /> */}
                    </Col>
                    {childCount.map((item, index) => {
                      return(
                  
                    <Col xs={6} className="mt-3 custom" key={index}>
                      <span className={Styles.label}>Child age </span>
                      <Select className="d-inline-block sort-select select-age" onChange={handleCountChildAges} options={childageOptions}/>
                      {/* <SelectType label="child's age on the date of travel" /> */}
                    </Col>
                  )
                  })}


                  </Row>
                  <div className="mt-3">
                    <ButtonType className={`${Styles.applyButton} btntype2`} onClick={setChildAge} name="Apply" />
                  </div>
                </Dropdown.Menu>
              </Dropdown>
                    </Col>

                    <Col xs={6} md={3}> 
                    
                      <Button onClick={handleOpen} className={Styles.btntype1} variant="primary"> {show ? 'Close' : 'Check Availability'} </Button>
                      
                    </Col>
               </Row>
               <div className="app">
                <div className={Styles.accordian}>
                  {show && (
                    <div className={Styles.accordian_body}>
                        <div className={Styles.radioinnerBox}>
                              <div className={Styles.checkbox}>
                               <input type="checkbox" id="vehicle1" className={Styles.input_check_box}></input>
                               <span className={Styles.checkmark}></span>
                              </div>
                            <h3 className={Styles.radioTitle}>Foreigner Tickets</h3>
                            <div className={Styles.radioContent}>Include: Entry Tickets to Mahal for Foreigners (Other than SAARC or BIMSTEC countries)</div>
                            <h4 className={Styles.radioSubhd}>Total $15.24 ,$15.24 per adult</h4>
                            <div className={Styles.radioSubdesc}>1 Adults x $15.24</div>
                        </div>
                        <div className={Styles.radioinnerBox}>
                        <div className={Styles.checkbox}>
                               <input type="checkbox" id="vehicle2" className={Styles.input_check_box}></input>
                               <span className={Styles.checkmark}></span>
                              </div>
                            <h3 className={Styles.radioTitle}>INDIAN, SAARC & BIMSTEC Ticket</h3>
                            <div className={Styles.radioContent}>Include: Tickets for Indian & Countries like (Afghanistan,Bangladesh, Bhutan, Maldives, Nepal, Pakistan, Sri Lanka)</div>
                            <h4 className={Styles.radioSubhd}>Total $3.05 ,$3.05 per adult</h4>
                            <div className={Styles.radioSubdesc}>1 Adults x $3.05</div>
                        </div>
                        <button type="button" value="Submit" className={Styles.btntype2}>Add to Cart</button>
                    </div>
                  )}
                </div>
              </div>
          </div> 

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
                    Address 01  <br></br>Address 01 Address 01 
                  </span>
                </div>

                <div className={Styles.sideBarOptions}>
                  <FaRegCalendarCheck />{" "}
                  <span className={Styles.title}> Language </span>
                  <br></br>
                  <span className={Styles.SideBarOptionValue}>English, Spanish</span>
                </div>

                <div className={Styles.sideBarOptions}>
                  <FaMobile />{" "}
                  <span className={Styles.title}> Mobile </span>
                  <br></br>
                  <span className={Styles.SideBarOptionValue}>+91 97 xxx xxx 05</span>
                </div>

                <div className={Styles.sideBarOptions}>
                  <FaUserAlt />{" "}
                  <span className={Styles.title}> Supplier Name </span>
                  <br></br>
                  <span className={Styles.SideBarOptionValue}>+91 97 xxx xxx 05</span>
                </div>

                <div className={Styles.sideBarOptions}>
                  <FaEnvelopeSquare />{" "}
                  <span className={Styles.title}> Supplier Mail ID </span>
                  <br></br>
                  <span className={Styles.SideBarOptionValue}>+91 97 xxx xxx 05</span>
                </div>

                <div className={Styles.sideBarOptions}>
                  <FaSortAmountUpAlt />{" "}
                  <span className={Styles.title}> Average Range </span>
                  <br></br>
                  <span className={Styles.SideBarOptionValue}>+91 97 xxx xxx 05</span>
                </div>

                <div className={Styles.sideBarOptions}>
                  <FaWalking />{" "}
                  <span className={Styles.title}> Activity Type </span>
                  <br></br>
                  <span className={Styles.SideBarOptionValue}>+91 97 xxx xxx 05</span>
                </div>

                <div className={Styles.sideBarOptions}>
                  <FaRoute />{" "}
                  <span className={Styles.title}> Starting and Finishing </span>
                  <br></br>
                  <span className={Styles.SideBarOptionValue}>+91 97 xxx xxx 05</span>
                </div>

                <div className={Styles.sideBarOptions}>
                  <FaUsers />{" "}
                  <span className={Styles.title}> Group Size </span>
                  <br></br>
                  <span className={Styles.SideBarOptionValue}>+91 97 xxx xxx 05</span>
                </div>

                <div className={Styles.sideBarOptions}>
                  <FaListUl />{" "}
                  <span className={Styles.title}> Guide Options </span>
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
