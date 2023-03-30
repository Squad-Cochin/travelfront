import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../components/DirectoryBase/Header/Header";
import DetailSlider from "../../components/DirectoryBase/DetailSlider/DetailSlider";
import AccordionType from "../../components/DirectoryBase/AccordionType/AccordionType";
import AccordionType1 from "../../components/DirectoryBase/AccordionType/AccordionType1";
import { MainMenu } from "../../components/DirectoryBase/MainMenu/MainMenu";
import BreadcrumbType from "../../components/DirectoryBase/BreadcrumbType/BreadcrumbType";
import BackTopage from "../../components/DirectoryBase/BackTopage/BackTopage";
import MeetingSection from "../../components/DirectoryBase/MeetingSection/MeetingSection";
import AvailabilityPopupContent from "../../components/DirectoryBase/AvailabilityPopup/AvailabilityPopup";
import ButtonType from "../../components/Button/Button";
import { FeatureTable } from "../../components/DirectoryBase/FeatureTable/FeatureTable";
import DetailContent from "../../components/DirectoryBase/DetailContent/DetailContent";
import { TimelineMap } from "../../components/DirectoryBase/TimelineMap/TimelineMap";
import Styles from "./Detail.module.scss";
import React, { useState ,useEffect, useRef} from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
const DetailPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [divHeight, setDivHeight] = useState(0);
  const ref = useRef(divHeight);
  useEffect(() => {
    setDivHeight(ref.current.offsetHeight);
    console.log('height: ', ref.current.offsetHeight);
  }, []);
  
  return (
    <>
      <div id="header" className={Styles.mainHeader} ref={ref} >
        <Header />
        <BackTopage label="See all Activities" href="/" />
        <MainMenu />
      </div>
      <div className={Styles.detailpage}>
        <BreadcrumbType wishlist={false} />
        <Container>
          <DetailSlider />
          <Row className="mt-5">
            <Col lg={8} md={7}>
              <div className={Styles.productDesc}>
                <h2 className="header-type2">
                  Barcelona Sailing Experience - Sunset
                </h2>
                <div className={Styles.byTravelText}>
                  <u>By Julia Travel - Gray Line Spain</u>
                </div>
                <div className="mt-4">
                  <b>4.5/5</b> (68 ratings)
                </div>
                <div className="mt-1">
                  <a href="#" className="link-type1">
                    See all reviews
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={4} md={5}>
              <div className={Styles.priceSection}>
                <h2 className="header-type2">From $85.60 per adult</h2>
                <div className={Styles.duration}>
                  Offer ID: 98292{" "}
                  <span className={Styles.durationSeparator}></span> Exp:
                  1/31/2022
                </div>
                <div className={`${Styles.freeText} mt-2`}>
                  Free cancellation available
                </div>
                <ButtonType
                  variant="primary"
                  onClick={handleShow}
                  className="btntype1 mt-4"
                  name= "Check availability"
                />
              </div>
            </Col>
          </Row>
          <FeatureTable />
          <DetailContent />
          <MeetingSection></MeetingSection>
          <TimelineMap />
          <AccordionType className="plusicon" />
          <div className={Styles.faqssection}>
            <h2 className="header-type2">
              Frequently Asked Questions about Barcelona Sailing Experience -
              Sunset
            </h2>
            <AccordionType1 />
          </div>
        </Container>
        <Offcanvas className={Styles.offcanvasBox} show={show} onHide={handleClose} placement="end" >
          <Offcanvas.Header className={Styles.offcanvasHead} closeButton>
          </Offcanvas.Header>
          <Offcanvas.Body className={Styles.offcanvasinnerBox}>
            <AvailabilityPopupContent />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default DetailPage;
