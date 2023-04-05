import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../components/DirectoryBase/Header/Header";
import DetailSlider from "../../components/DirectoryBase/DetailSlider/DetailSlider";
import AccordionType from "../../components/DirectoryBase/AccordionType/AccordionType";
import AccordionType1 from "../../components/DirectoryBase/AccordionType/AccordionType1";
import AccordionTypeReview from "../../components/DirectoryBase/AccordionType/AccordionTypeReview";
import { MainMenu } from "../../components/DirectoryBase/MainMenu/MainMenu";
import BreadcrumbType from "../../components/DirectoryBase/BreadcrumbType/BreadcrumbType";
import BackTopage from "../../components/DirectoryBase/BackTopage/BackTopage";
import MeetingSection from "../../components/DirectoryBase/MeetingSection/MeetingSection";
import AvailabilityPopupContent from "../../components/DirectoryBase/AvailabilityPopup/AvailabilityPopup";
import ButtonType from "../../components/Button/Button";
import { FeatureTable } from "../../components/DirectoryBase/FeatureTable/FeatureTable";
import DetailContent from "../../components/DirectoryBase/DetailContent/DetailContent";
import { TimelineMap } from "../../components/DirectoryBase/TimelineMap/TimelineMap";

import { tourPackageDetail } from "../../api/tourPackages";
import { useRouter } from 'next/router'
import Styles from "./Detail.module.scss";
import React, { useState ,useEffect, useRef} from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const DetailPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [divHeight, setDivHeight] = useState(0);
  const ref = useRef(divHeight);
  const [productData, setproductData] = useState([]);
  const router = useRouter();
  const param1  = router.query
  console.log("check this:")
  console.log(productData)
  
  useEffect(() => {
    setDivHeight(ref.current.offsetHeight);
    const getPageData = async () => {
      const productId  = router.query
      const details = await tourPackageDetail(productId.productId);
      if(details == undefined){
        setproductData([])
      }
      else{
        console.log("test:")
        console.log(details)
        setproductData(details)
      }
      
    }
    getPageData();
  }, [router.query]);
  if (productData.length == 0) {
    return <div>Loading...</div>; 
  }
  else{
    console.log("imp")
    console.log(productData)
    return (
      <>
        <div id="header" className={Styles.mainHeader} ref={ref} >
          <Header />
          <BackTopage label="See all Activities" href="/" />
          <MainMenu  price={param1.price}/>
        </div>
        <div className={Styles.detailpage}>
          <BreadcrumbType wishlist={false} />
          <Container>
            <DetailSlider images={productData.images}/>
            <Row className="mt-5">
              <Col lg={8} md={7}>
                <div className={Styles.productDesc}>
                  <h2 className="header-type2">
                  {productData.title}
                  </h2>
                  <div className={Styles.byTravelText}>
                    <u>By {productData.supplier.name}</u>
                  </div>
                  <div className="mt-4">
                    {productData.reviews.totalReviews > 0 ? (<div><b>{productData.reviews.combinedAverageRating.toFixed(1)}/5</b>({productData.reviews.totalReviews} ratings)</div>):<h1></h1>} 
                  </div>
                  <div className="mt-1">
                    <a  className="link-type1 experience-review">
                      <AccordionTypeReview review = "There is No content now."/> 
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={5}>
                <div className={Styles.priceSection}>
                  <h2 className="header-type2">From ${param1.price}</h2>
                  <div className={Styles.duration}>
                    Offer ID: {param1.productId}{" "}
                    <span className={Styles.durationSeparator}></span> Exp:
                    1/31/2022
                  </div>
                  <div className={`${Styles.freeText} mt-2`}>
                    {productData.cancellationPolicy.description}
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
            <FeatureTable productData={productData}/>
            <DetailContent productData={productData}/>
            <MeetingSection></MeetingSection>
            <TimelineMap />
            <AccordionType className="plusicon" productData={productData}/>
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
  }
  
};

export default DetailPage;
