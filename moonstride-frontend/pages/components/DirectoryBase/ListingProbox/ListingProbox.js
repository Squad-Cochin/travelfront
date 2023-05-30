//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
//         ON THE COMPONENT THAT DISPLAYS THE HOMEPAGE THIS COMPONENT DISPLAY ALL DESTINATION       //
//                    IMAGES, ALONG WITH DESCRIPTIONS, BOOKING AMOUNTS, AND MORE.                   //                                                           
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useEffect, useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Image from "next/image";
import Button from 'react-bootstrap/Button';
// This component is designed for reusing buttons
import ButtonType from "../../Button/Button";
import MyVerticallyCenteredModal from "../../DirectoryBase/DetailsPopup/DetailsPopup"
import Styles from "./ListingProbox.module.scss";

// FUNCTION FOR DATA LISTING COMPONENT
const ListingProbox = (props) => {
  const [active, setActive] = useState(false);
  const [store, setStore] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    let existingArray = JSON.parse(localStorage.getItem("whishlisted")) || [];
    setStore(existingArray);
  }, []);

  const handleClick = (item) => {
      var existingArray = JSON.parse(localStorage.getItem("whishlisted")) || [];
      let index = existingArray.indexOf(item.id); 
      setStore(existingArray);

  if (existingArray[index]) {
      existingArray.splice(index, 1);
      localStorage.setItem("whishlisted", JSON.stringify(existingArray));
  } 
  else {
      existingArray.push(item.id);
  }

  };

  const imageLoader = ({ src, width, quality }) => {
    return `${src}`;
  };

  return (
    <>
      <MyVerticallyCenteredModal
          productdetail={productDetail}
          show={modalShow}
          onHide={() => setModalShow(false)}
      />

      {/* We are displaying the data here */}
      {props.boxData.map((item, index) => {

        // To limit the description count
        const maxDetailLength = 120; // Maximum length of the content
        const limitedDetailContent = item.text.substring(0, maxDetailLength) + (item.text.length > maxDetailLength ? "..." : "");
        const maxTitleLength = 68; // Maximum length of the content
        const limitedTitleContent = item.title.substring(0, maxTitleLength) + (item.title.length > maxTitleLength ? "..." : "");
        return(
          <Col lg={12} md={6} key={index}>
            <div className={Styles.list_probox} id={item.id}>
              <Row className="g-3">
                <Col className="d-flex" lg={{ span: 4, order: 1 }} md={{ span: 12, order: 1 }} xs={{ span: 5, order: 1 }}>
                <div className={Styles.imageSection}>
                  <div className={`position-relative ${Styles.imagebox}`}>
                    <Image 
                      src={item.image}
                      loader={imageLoader}
                      width={360}
                      height={240}
                      alt="Activity Image "
                      unoptimized={true}
                      priority={true}
                    />
                  </div>
                    
                  <div className={Styles.flag}>
                       Likely to Sell Out
                  </div>
                 </div> 
                </Col>
                <Col lg={{ span: 5, order: 2 }} md={{ span: 12, order: 2 }} xs={{ span: 12, order: 2 }}>
                  <h2 className="header-type1">
                    {limitedTitleContent}
                  </h2>
                  <div className={Styles.probox_type}>{item.type}</div>
                  <div className={Styles.probox_time}>{item.time}</div>
                  <div className={Styles.probox_text}>
                    {limitedDetailContent}
                  </div>
                  {/* <Link href={
                    {
                      pathname: '/activitydetail',
                      query: { productId: item.productCode, price: item.price }
                    }}
                  >
                    <a className="link-type1">{item.linkText}</a>
                  </Link> */}
                </Col>
                <Col
                  lg={{ span: 3, order: 3 }}
                  md={{ span: 12, order: 3 }}
                  xs={{ span: 12, order: 3 }}
                  className="text-end"
                >
                  <div className={Styles.price_section}>
                    <span>From</span>
                    <div className={Styles.price}>${item.price}</div>
                    <span>per adult</span>
                    <div className={Styles.probox_canceltext}>
                      {item.freeCancellation == 'FREE_CANCELLATION' ? "Free Cancellation available" : null }
                    </div>
                    <div className={Styles.btn_bar}>
                      <div className="pb-2">
                        <span className="fw-bold">{item.rating}</span> ({item.ratingCount})
                      </div>
                      {/* Click the 'Book' button to book your reservation*/}
                      {/* <Link href={
                          {
                            pathname: '/activitydetail',
                            query: {productId: item.productCode, price: item.price}
                          }}
                        >
                        <ButtonType className="btntype1" name={item.buttonText} />
                      </Link> */}
                      <Button className="btntype1" variant="primary" onClick={(e) => {
                          e.preventDefault();
                          setProductDetail({productId: item.productCode, price: item.price});
                          setModalShow(true)
                      }}>
                            View Options
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        )
      })}
    </>
  );
};
ListingProbox.defaultProps = {
  boxData: []
}
export default ListingProbox;


