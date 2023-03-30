import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import MapImage from "../../../../public/images/map-img.jpg";
import Styles from "./MeetingSection.module.scss";
const locationlist = [
  {
    id: 1,
    label: "Plaça Catalunya Plaça de Catalunya Barcelona Catalunya 08002",
  },
  {
    id: 2,
    label:
      "Camp Nou (FC Barcelona) 10 Carrer d'Aristides Maillol Barcelona Catalunya 08028",
  },
  {
    id: 3,
    label:
      "La Sagrada Família 401 Carrer de Mallorca Barcelona Barcelona 08013",
  },
  { id: 4, label: "Park Güell 16 Carrer d'Olot Barcelona Catalunya 08024" },
];
function meetingsection() {
  return (
    <div className={Styles.meetingsection}>
      <Row>
        <Col lg={3} md={4}>
          <div className={Styles.meetingContent}>
            <h2 className="header-type1 mb-4">Meeting/Redemption Point</h2>
            <ul className={Styles.locationlist}>
              {locationlist.map((list) => (
                <li key={list.id} id={list.id}>
                  {list.label}
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col lg={9} md={8}>
          <div className={Styles.mapimg}>
            <Image src={MapImage} alt="Meeting/Redemption Point" />
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default meetingsection;
