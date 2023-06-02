///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
//          FILE FOR SHOWING BASIC DETAILS AT THE BOTTAM OF DETAILS PAGE                     //
//                                IN A DROPDOWN                                              //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////

import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// IMPORT PAGES
import AvailabilityFilter, { WithoutTime, WithoutLanguage, WithoutBoth } from "../AvailabilityFilter/AvailabilityFilter";
import Styles from "./AccordionType.module.scss";

// FUNCTION FOR ACCORDIAN TYPE COMPONENT
function AccordionType(props) {
  // COMPONENT ON THE BASIS OF AVAILABILITY
  const myList = 'bookableItems' in props.availabilty ? (props.availabilty.bookableItems).map((faqlist,index) => (
    <Accordion.Item  key={index} className={Styles.accordionPlus} eventKey={index}>
      <Accordion.Header>  
        <div className={Styles.Availability}>        
          <Row>
            <Col xs={6} md={7}>
                <div className={Styles.title}>{faqlist.title}</div>
            </Col>
            <Col xs={6} md={2}>
              <div className={Styles.price}>
                <span className={Styles.value}> ${faqlist.priceSummary.recommendedRetailPrice}</span>
              </div>
            </Col>
            <Col xs={6} md={3}> 
              <Button className={Styles.btntype1} variant="primary"> Choose</Button>
            </Col>
          </Row>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        {faqlist.available ? <div >{props.bookingerrormsg ? props.bookingerrormsg : ""} 	
        <div className={Styles.DetailsContent}> <p>{ faqlist.description.replace(/<br\/>/g, "\n") }</p></div>
        {(faqlist.startTime.length == 0) && (faqlist.languageGuides[0].languages.length == 0) ? <WithoutBoth propData = {props} index = {index} faqlist = {faqlist} /> 
          : faqlist.startTime.length == 0 ? <WithoutTime propData = {props} index = {index} faqlist = {faqlist} /> 
          : faqlist.languageGuides[0].languages.length == 0 ? <WithoutLanguage propData = {props} index = {index} faqlist = {faqlist} /> 
          : <AvailabilityFilter propData = {props} index = {index} faqlist = {faqlist} />
        }
        </div>
        : <div className={Styles.Errormsg}>{faqlist.unavailableReason}</div>
        }
      </Accordion.Body>
    </Accordion.Item>
  )) : 
  <Accordion.Item   className={Styles.accordionPlus} >
    <Accordion.Header>  
      <div className={Styles.Availability}>        
        <Row>
          <Col xs={6} md={7}>
            <div className={Styles.title}>No bookable items found for this product</div>
          </Col>
        </Row>
      </div>
    </Accordion.Header>
  </Accordion.Item>  

  return (
    <Accordion
      defaultActiveKey={props.bookingerror}
      flush
      className={`${Styles.accordiontype} ${props.className}`}
    >
      {myList}
    </Accordion>
  );
}

// DEFAULT ACCORDIANTYPE PROPERTIES
AccordionType.defaultProps = {
  className: "",
  productDataFull: {
    inclusions: [],
    exclusions: [],
    additionalInformation: []
  },
  availabilty : {}
};

export default AccordionType;
