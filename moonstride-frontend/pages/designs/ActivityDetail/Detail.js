//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
//                            FILE IS A COMPONENT FOR SHOWING DETAILS PAGE.                             //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////



import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../components/DirectoryBase/Header/Header";
import DetailSlider from "../../components/DirectoryBase/DetailSlider/DetailSlider";
import AccordionType from "../../components/DirectoryBase/AccordionType/AccordionType";
import { MainMenu } from "../../components/DirectoryBase/MainMenu/MainMenu";
import BreadcrumbType from "../../components/DirectoryBase/BreadcrumbType/BreadcrumbType";
import BackTopage from "../../components/DirectoryBase/BackTopage/BackTopage";
import AvailabilityPopup from "../../components/DirectoryBase/AvailabilityPopup/AvailabilityPopup";
import ButtonType from "../../components/Button/Button";
import { FeatureTable } from "../../components/DirectoryBase/FeatureTable/FeatureTable";
import DetailContent from "../../components/DirectoryBase/DetailContent/DetailContent";
import Review from "../../components/DirectoryBase/Review/Review";

import { tourPackageDetail } from "../../api/tourPackages";
import { useRouter } from 'next/router'
import Styles from "./Detail.module.scss";
import React, { useState ,useEffect, useRef} from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

// FUNCTION FOR SHOWING DETAILS PAGE COMPONENT
const DetailPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [divHeight, setDivHeight] = useState(0);
  const ref = useRef(divHeight);
  const [productData, setproductData] = useState([]);
  const router = useRouter();
  const {productId, price}  = router.query
  useEffect(() => {
    if(productId == undefined) {
      return;
    }
    const getPageData = async () => {
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
          <MainMenu  price={"$ " + price} productid={productId} fromPrice={price} currency={`$`} destinationDetails={productData.tourDetails.cancellationPolicyDescription}/>
        </div>
        <div className={Styles.detailpage}>
          {/* <BreadcrumbType wishlist={false} /> */}
          <Container>
            <DetailSlider images={productData.images}/>
            <Row className="mt-2">
              <Col lg={8} md={7} className="mt-5">
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
                </div>
              </Col>
              <Col lg={4} md={5}>
                <div className={Styles.priceSection}>
                  <h2 className="header-type2">From ${price}</h2>
                  <div className={Styles.duration}>
                    Product ID: {productId}{" "}
                  </div>
                  <div className={`${Styles.freeText} mt-2`}>
                    {productData.tourDetails.cancellationPolicyDescription.replace(/<\/?[^>]+(>|$)|&[^\s]*;/g, "")}
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
            <FeatureTable productData={productData.tourDetails} contactDetails={productData.contact}/>
            <DetailContent productData={productData.tourDetails}/>
            <AccordionType className="plusicon" productData={productData.tourDetails} productDataFull={productData}/>
            <Review combinedAverageRating={productData.combinedAverageRating} userReviews={productData.userReviews} reviewCountTotals={productData.reviewCountTotals} />
          </Container>
          <Offcanvas className={Styles.offcanvasBox} show={show} onHide={handleClose} placement="end" >
            <Offcanvas.Header className={Styles.offcanvasHead} closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body className={Styles.offcanvasinnerBox}>
              <AvailabilityPopup productid={productId} fromPrice={price} currency={`$`} destinationDetails={productData.tourDetails.cancellationPolicyDescription}/>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </>
    );
  }
  
};

export default DetailPage;
