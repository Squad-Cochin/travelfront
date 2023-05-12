import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../components/DirectoryBase/Header/Header";
import DetailSlider from "../../components/DirectoryBase/DetailSlider/DetailSlider";
import AccordionType from "../../components/DirectoryBase/AccordionType/AccordionType";
import AccordionType1 from "../../components/DirectoryBase/AccordionType/AccordionType1";
import ExpandReview from "../../components/expand/ExpandReview";
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
  //const [productId, setProductId] = useState('');
  const router = useRouter();
  const param1  = router.query
  //const productData = productResult.Result
  useEffect(() => {
    setDivHeight(ref.current.offsetHeight);
    const getPageData = async () => {
      const productId  = router.query
      //setProductId(productId.productId);
      console.log("ddddddddddd1")
      const details = await tourPackageDetail(productId.productId);
      if(details == undefined){
        setproductData([])
      }
      else{
        setproductData(details)
      }
    }
    getPageData();
  }, [router.query]);
  console.log(productData);
  if (productData.length == 0) {
    return <div>Loading...</div>; 
  }
  else{
    return (
      <>
        <div id="header" className={Styles.mainHeader} ref={ref} >
          <Header />
          <BackTopage label="See all Activities" href="/" />
          <MainMenu  price={productData.currency+ " " + productData.fromPrice}/>
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
                    <u>By {productData.supplierName}</u>
                  </div>
                  <div className="mt-4">
                    {productData.numberOfReviews > 0 ? (<div><b>{productData.combinedAverageRating.toFixed(1)}/5</b>({productData.numberOfReviews} ratings)</div>):null} 
                  </div>
                  <div className="mt-3">
                    {productData.userReviews.length > 0 ? <ExpandReview review={productData.userReviews[0]}/> :null} 
                  </div>
                </div>
              </Col>
              <Col lg={4} md={5}>
                <div className={Styles.priceSection}>
                  <h2 className="header-type2">From ${productData.fromPrice}</h2>
                  <div className={Styles.duration}>
                    Product ID: {param1.productId}{" "}
                  </div>
                  <div className={`${Styles.freeText} mt-2`}>
                    {productData.cancellationPolicyDescription.replace(/<\/?[^>]+(>|$)|&[^\s]*;/g, "")}
                  </div>
                  <ButtonType
                    variant="primary"
                    onClick={handleShow}
                    className="btntype1 mt-4"
                    name= "Check Availability"
                  />
                </div>
              </Col>
            </Row>
            <FeatureTable productData={productData.destinationDetails} contactDetails={productData.contact}/>
            <DetailContent productData={productData.destinationDetails}/>
            {/* <MeetingSection></MeetingSection> */}
            {/* <TimelineMap /> */}
            <AccordionType className="plusicon" productData={productData.destinationDetails}/>
            {/* <div className={Styles.faqssection}>
              <h2 className="header-type2">
                Frequently Asked Questions about Barcelona Sailing Experience -
                Sunset
              </h2>
              <AccordionType1 />
            </div> */}
          </Container>
          <Offcanvas className={Styles.offcanvasBox} show={show} onHide={handleClose} placement="end" >
            <Offcanvas.Header className={Styles.offcanvasHead} closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body className={Styles.offcanvasinnerBox}>
              <AvailabilityPopupContent productid={param1.productId} price={productData.destinationDetails.from_Price}/>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </>
    );
  }
  
};

export default DetailPage;
