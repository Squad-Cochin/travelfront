//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
//         ON THE COMPONENT THAT DISPLAYS THE HOMEPAGE THIS COMPONENT DISPLAY ALL DESTINATION       //
//                    IMAGES, ALONG WITH DESCRIPTIONS, BOOKING AMOUNTS, AND MORE.                   //                                                           
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Button from 'react-bootstrap/Button';

// IMPORT PAGES
import MyVerticallyCenteredModal from "../../DirectoryBase/DetailsPopup/DetailsPopup"
import Styles from "./ListingProbox.module.scss";

// FUNCTION FOR DATA LISTING COMPONENT
const ListingProbox = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [productDetail, setProductDetail] = useState({});
  // FUNCTION FOR IMAGE LOADER
  const imageLoader = ({ src, width, quality }) => {
    return `${src}`;
  };

  return (
    <>
      <MyVerticallyCenteredModal
          productdetail={productDetail}
          show={modalShow}
          onHide={() => setModalShow(false)}
          setcartdata={props.setcartdata}
          personsearch={props.personsearch}
          setmodalshow = {setModalShow}
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
                    {item.likelyToSell == 'LIKELY_TO_SELL_OUT' ?
                      <div className={Styles.flag}>
                        Likely to Sell Out
                      </div> : null
                    }
                    
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


