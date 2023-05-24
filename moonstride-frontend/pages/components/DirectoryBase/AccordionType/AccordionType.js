///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
//          FILE FOR SHOWING BASIC DETAILS AT THE BOTTAM OF DETAILS PAGE                     //
//                                IN A DROPDOWN                                              //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////


import Accordion from "react-bootstrap/Accordion";
import Styles from "./AccordionType.module.scss";

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
        "Inclusions / Exclusions",
      bodycon:
      inclusionsHtml,
    },
    {
      Key: 2,
      header:
        "Know before you book / Additional information",
      bodycon:
      additionalInfoHtml,
    },
  ];
  const myList = (props.faqsList ? faqsList : faqsList).map((faqlist,index) => (
    <Accordion.Item  key={index} className={Styles.accordionPlus} eventKey={faqlist.Key}>
      <Accordion.Header>{faqlist.header}</Accordion.Header>
      <Accordion.Body
        dangerouslySetInnerHTML={{ __html: faqlist.bodycon }}
      ></Accordion.Body>
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
