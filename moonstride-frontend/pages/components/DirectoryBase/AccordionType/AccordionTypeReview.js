import Accordion from 'react-bootstrap/Accordion';
import Styles from "./AccordionType.module.scss";
const faqsList = [
  {
    Key: 0, 
    header: 'See all reviews', 
    bodycon: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    footer: 'view-more',
  },
];

function AccordionType(props) {
  const myLists = props.myLists;  
  return (
    <Accordion defaultActiveKey="0" flush className={`${Styles.accordiontype} ${props.className}`}>
      {faqsList.map((faqlist) =>
        // eslint-disable-next-line react/jsx-key
        <Accordion.Item eventKey={faqlist.Key}>
            <Accordion.Header>{faqlist.header}</Accordion.Header>
            <Accordion.Body>{props.review}</Accordion.Body>
        </Accordion.Item>


      )}
    </Accordion>
  );
}
AccordionType.defaultProps = {
  className:"",
}
export default AccordionType;