///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
//          FILE FOR SHOWING BASIC DETAILS AT THE BOTTAM OF DETAILS PAGE                     //
//                                IN A DROPDOWN                                              //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////


import Accordion from "react-bootstrap/Accordion";
import Styles from "./AccordionType.module.scss";
import DatePicker from "react-datepicker";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// FUNCTION FOR ACCORDIAN TYPE COMPONENT
function AccordionType(props) {
  
  const inclusions = props.productDataFull.inclusions
  const exclusions = props.productDataFull.exclusions
  const additionalInfo = props.productDataFull.additionalInformation
  var inclusionsHtml = `<ul class="aminities">`;
  var additionalInfoHtml = `<ul class="aminities">`;
  inclusions.forEach(async (element) => {
    if(element){
      inclusionsHtml += `<li class="inclusiveitem">${element}</li>`
    }
  });
  
  exclusions.forEach(async (element) => {
    if(element){
      inclusionsHtml += `<li class="exclusiveitem">${element}</li>`
    }
  });  
  additionalInfo.forEach(async (element) => {
    additionalInfoHtml += `<li class="inclusiveitem">${element}</li>`
  });

inclusionsHtml += `</u>`;
additionalInfoHtml += `</u>`;

  const faqsList = [
    {
      Key: 0,
      header:
        "Double Quad Bike & BBQ Dinner",
      price:
        "$150.00", 
      bodycon: 
        "The Golden Triangle is so called because of the triangular shape formed by the locations of New Delhi, Agra and Rajasthan on a map. The trips usually start in Delhi moving south to the site of Taj Mahal at Agra, then west, to the desert landscapes of Rajasthan. ",
      inclusionsHtml,
    },
    {
      Key: 1,
      header:
      "Axe Throwing in Indianapolis",
      price:
      "$150.00", 
      bodycon: 
        "An early morning adventure to watch Calcutta wake up. Experience Calcutta like Local and not just a tourist. Try different modes of transport, Local spots and blend into Calcutta's narrative just like a Local. This tour is not the usual Heritage walk but an An ",
        additionalInfoHtml,
    },
  
  ];
  const myList = (props.faqsList ? faqsList : faqsList).map((faqlist,index) => (
    <Accordion.Item  key={index} className={Styles.accordionPlus} eventKey={faqlist.Key}>
      <Accordion.Header>  
          <div className={Styles.Availability}>        
                   <Row>
                        <Col xs={6} md={7}>
                            <div className={Styles.title}>{faqlist.header}</div>
                        </Col>
                       
                        <Col xs={6} md={2}>
                          <div className={Styles.price}>
                            <span className={Styles.value}> {faqlist.price}</span>
                          </div>
                        </Col>

                        <Col xs={6} md={3}> 
                        
                          <Button className={Styles.btntype1} variant="primary"> Choose</Button>
                          
                        </Col>
                  </Row>
           </div>
      </Accordion.Header>
      <Accordion.Body>
            <div className={Styles.DetailsContent}> {faqlist.bodycon}</div>
            <div className={Styles.radioinnerBox_bottom}>
                              <div className={Styles.event_date}>
                                  <div className="position-relative">
                                  <div className={Styles.date_fromtext}>
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
                                </div>
                              </div>
                              <div className={Styles.radioSubdesc}>
                                <button className={Styles.btntype1}>Book</button>

                              </div>
                          </div>
      </Accordion.Body>
    </Accordion.Item>
  ));
  return (
    <Accordion
      defaultActiveKey="0"
      flush
      className={`${Styles.accordiontype} ${props.className}`}
    >
      {myList}
    </Accordion>
  );
}
AccordionType.defaultProps = {
  className: "",
  productDataFull: {
      inclusions: [],
      exclusions: [],
      additionalInformation: []
  }
};
export default AccordionType;
