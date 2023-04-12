import Accordion from "react-bootstrap/Accordion";
import Styles from "./AccordionType.module.scss";

function AccordionType(props) {

  const inclusions = props.productData.inclusions
  const additionalInfo = props.productData.additionalInfo
  var inclusionsHtml = `<ul class="aminities">`;
  var additionalInfoHtml = `<ul class="aminities">`;
  inclusions.forEach(async (element) => {
    if(element.otherDescription){
      inclusionsHtml += `<li class="inclusiveitem">${element.otherDescription}</li>`
    }
    else if(element.description){
      inclusionsHtml += `<li class="inclusiveitem">${element.description}</li>`
    }
    
  });
  if(props.productData.exclusions){
    const exclusions = props.productData.exclusions
    exclusions.forEach(async (element) => {
      if(element.otherDescription){
        inclusionsHtml += `<li class="exclusiveitem">${element.otherDescription}</li>`
      }
      else if(element.description){
        inclusionsHtml += `<li class="exclusiveitem">${element.description}</li>`
      }
    });
  }
  
  additionalInfo.forEach(async (element) => {
    additionalInfoHtml += `<li class="inclusiveitem">${element.description}</li>`
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
    // {
    //   Key: 1,
    //   header:
    //     "What you can expect",
    //   bodycon:
    //     'Flamenco Show at Tablao Flamenco Cordobes Barcelona in Las Ramblas is hosted by Flamenco Barcelona - Tablao Flamenco Cordobes. Read reviews, discover additonal experiences or contact Flamenco Barcelona - Tablao Flamenco Cordobes on Tripadvisor. Discover and book Flamenco Show at Tablao Flamenco Cordobes Barcelona in Las Ramblas on Tripadvisor',
    // },
    {
      Key: 2,
      header:
        "Know before you book / Additional information",
      bodycon:
      additionalInfoHtml,
    },
  ];
  const myList = (props.faqsList ? faqsList : faqsList).map((faqlist) => (
    // eslint-disable-next-line react/jsx-key
    <Accordion.Item className={Styles.accordionPlus} eventKey={faqlist.Key}>
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
};
export default AccordionType;
