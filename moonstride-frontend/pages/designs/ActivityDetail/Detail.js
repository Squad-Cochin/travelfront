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
import Review from "../../components/DirectoryBase/Review/Review";

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
  //console.log(router);
  const {productId, price}  = router.query
  //console.log(productId);
  //const productData = productResult.Result
  useEffect(() => {
    //setDivHeight(ref.current.offsetHeight);
    if(productId == undefined) {
      return;
    }
    const getPageData = async () => {
      //setProductId(productId.productId);
      //console.log("ddddddddddd1")
      const details = await tourPackageDetail(productId);
      if(details == undefined){
        setproductData([])
      }
      else{
        setproductData(details)
      }
    }
    getPageData();
  }, [productId]);
  if (productData.length == 0) {
    return <div>Loading...</div>; 
  }
  else{
    return (
      <>
        <div id="header" className={Styles.mainHeader} ref={ref} >
          <Header />
          <BackTopage label="See all Activities" href="/" />
          <MainMenu  price={"$ " + price}/>
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
                  <h2 className="header-type2">From ${price}</h2>
                  <div className={Styles.duration}>
                    Product ID: {productId}{" "}
                  </div>
                  <div className={`${Styles.freeText} mt-2`}>
                    {productData.destinationDetails.cancellationPolicyDescription.replace(/<\/?[^>]+(>|$)|&[^\s]*;/g, "")}
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
            <AccordionType className="plusicon" productData={productData.destinationDetails} productDataFull={productData}/>
            <Review />
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
              <AvailabilityPopupContent productid={productId} fromPrice={price} currency={`$`} destinationDetails={productData.destinationDetails}/>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </>
    );
  }
  
};

export default DetailPage;
