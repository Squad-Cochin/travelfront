import React from "react";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import ButtonType from "../../Button/Button";
import Styles from "./ListingBox.module.scss";
import RoomsOptions from "../../../components/DirectoryBase/RoomsOptions/RoomsOptions";
import { Rating } from 'react-simple-star-rating'
import Modal from 'react-bootstrap/Modal';
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import ModalPopup from "../ModalPopup/ModalPopup";

const ListingBox = (props) => {
  const [active, setActive] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [lgShow2, setLgShow2] = useState(false);
  return (
    <>
      {props.listingBox.map((data) => {
        return (
          <>
          <div key={data.id} id={data.id} className={`${Styles.listBox} mt-4 position-relative`}>
            <Row className="g-3">
              <Col
                lg={{ span: 4, order: 1 }}
                xs={{ span: 12, order: 1 }}
                md={{ span: 4, order: 1 }}
                xl={{ span: 3, order: 1 }}
              >
                <div className={`position-relative ${Styles.imagebox}`}>
                  <Image
                    className={Styles.image}
                    src={`/images${data.image}`}
                    alt="Default Image"
                    width={195}
                    height={195}
                  />
                  <span className={Styles.text}>
                    <p className={`${Styles.imageText} position-absolute fw-semibold mb-0 text-center`}>{data.imageText}</p>
                  </span>
                </div>
              </Col>
              <Col
                lg={{ span: 5, order: 2 }}
                xs={{ span: 12, order: 2 }}
                md={{ span: 5, order: 2 }}
                xl={{ span: 6, order: 1 }}
              >
                <h2 className="header-type1">{data.title}</h2>
                <div className={Styles.rating}>{data.rating}</div>
                <p className={Styles.description}>{data.description}</p>
                <Link href = "">
                  <a onClick={() => setLgShow(true)} className={Styles.descriptionLink}>
                    {data.descriptionLink}
                  </a>
                </Link>
                
              </Col>
              <Col
                lg={{ span: 3, order: 3 }}
                xs={{ span: 12, order: 3 }}
                md={{ span: 3, order: 3 }}
                xl={{ span: 3, order: 1 }}
                className="text-center"
              >
                <div className={Styles.priceWrapper}>
                  <div>
                    <h3 className={Styles.priceTitle}>{data.priceTitle}</h3>
                    <div className={Styles.priceDescription}>
                      {data.priceDescription}
                    </div>
                    <div className={`${Styles.price} fw-bold`}>{data.price}</div>
                    <Link href="">
                      <a onClick={() => setLgShow2(true && data.id)} className={`${Styles.priceLink} fw-bold`}>
                        What’s included
                      </a>
                    </Link>
                    <Modal
                      size="lg"
                      show={lgShow2}
                      onHide={() => setLgShow2(false)}
                      aria-labelledby="example-modal-sizes-title-lg">
                      <Modal.Header closeButton>
                        <h2 className="header-type1">What’s included</h2>
                      </Modal.Header>
                      <Modal.Body className={Styles.modalBody}>
                        {data.includePopup.map((includeData) => {
                          return(
                            <ul key={includeData.id}>
                              <li>{includeData.text}</li>
                            </ul>
                          )
                        })}
                      </Modal.Body>
                    </Modal>
                  </div>
                  <div>
                  <div className={Styles.totalPrice}>
                    Total Price : {data.totalPrice}
                  </div>
                    <div className={`${Styles.buttonWrapper} text-center`}>
                      <ButtonType
                        className={`${Styles.customButton} btntype2`}
                        name="Select"
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <div className={`${Styles.wishlist} position-absolute`}>
              <span 
              className={`${active == (true && data.id) ? Styles.activeFavouritelist : ""}`}
              onClick={()=>setActive(!active && data.id)}>
                <svg
                  height="20px"
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <path
                    d="M340.8,83C307,83,276,98.8,256,124.8c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6  L245.1,418l10.9,11l10.9-11l148.3-149.8c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z"
                    fill="#fff"
                  ></path>
                </svg>
              </span>
            </div>
            <Accordion
              defaultActiveKey="0"
              className={`${Styles.accordiontype}`}
            >
              <Accordion.Item>
                <Accordion.Header>{data.accordianheader}</Accordion.Header>
                <Accordion.Body>
                  <p className={Styles.accordianTitle}>Select a Room Type</p>
                  
                  <RoomsOptions />
                
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </>
        );
      })}
      <div className="text-center my-4">
        <ButtonType className={`${Styles.moreButton} btntype2`} name="Show More" />
      </div>
      <div>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg">
          <ModalPopup />
        </Modal>
      </div>
    </>
  );
}

export default ListingBox;
ListingBox.defaultProps = {
listingBox : [
    {
      id: 1,
      image: "/mainbanner.jpg",
      imageText: "Offer up to 60%",
      wishlistRoute: "#",
      title: "Hard Rock Hotel Riviera Maya - Hacienda Section",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse…",
      rating: <Rating initialValue="4" allowHover={false} readonly={true} fillColor= {"#fe6652"} emptyColor= {"#b7b7b7"} SVGstyle={{width:"18px", height:"18px"}}/>,
      descriptionLink: "View more info",
      viewmoreLink: "Javascript();",
      priceTitle: "Package Price",
      priceDescription: "Flight Included",
      price: "$721.00",
      priceLink: "Javascript();",
      totalPrice: "944.14",
      accordianheader: "View Room Options",
      accommodationText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse…",
      includePopup: [
        {
          id: "1",
          text: "Lorem ipsum dolor sit amet"
        },
        {
          id: "2",
          text: "Lorem ipsum dolor sit amet"
        },
        {
          id: "3",
          text: "Lorem ipsum dolor sit amet"
        },
        {
          id: "4",
          text: "Lorem ipsum dolor sit amet"
        },
        {
          id: "5",
          text: "Lorem ipsum dolor sit amet"
        },
        {
          id: "6",
          text: "Lorem ipsum dolor sit amet"
        },
      ]
    },
    {
      id: 2,
      image: "/mainbanner.jpg",
      imageText: "Offer up to 60%",
      wishlistRoute: "#",
      title: "Gran Palladium Palace Resort - Spa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse…",
      rating: <Rating initialValue="3" allowHover={false} readonly={true} fillColor= {"#fe6652"} emptyColor= {"#b7b7b7"} SVGstyle={{width:"18px", height:"18px"}}/>,
      descriptionLink: "View more info",
      viewmoreLink: "Javascript();",
      priceTitle: "Package Price",
      priceDescription: "Flight Included",
      price: "$511.00",
      priceLink: "Javascript();",
      totalPrice: "944.14",
      accordianheader: "View Room Options",
      accommodationText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse…",
      includePopup: [
        {
          id: "1",
          text: "Lorem ipsum dolor sit amet"
        },
        {
          id: "2",
          text: "Lorem ipsum dolor sit amet"
        },
        {
          id: "3",
          text: "Lorem ipsum dolor sit amet"
        },
        {
          id: "4",
          text: "Lorem ipsum dolor sit amet"
        },
        {
          id: "5",
          text: "Lorem ipsum dolor sit amet"
        },
        {
          id: "6",
          text: "Lorem ipsum dolor sit amet"
        },
      ]
    },
    {
      id: 3,
      image: "/mainbanner.jpg",
      imageText: "Offer up to 60%",
      wishlistRoute: "#",
      title: "Casa de Campo Resort & Villas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse…",
      rating: <Rating initialValue="5" allowHover={false} readonly={true} fillColor= {"#fe6652"} emptyColor= {"#b7b7b7"} SVGstyle={{width:"18px", height:"18px"}}/>,
      descriptionLink: "View more info",
      viewmoreLink: "Javascript();",
      priceTitle: "Package Price",
      priceDescription: "Flight Included",
      price: "$213.00",
      priceLink: "Javascript();",
      totalPrice: "944.14",
      accordianheader: "View Room Options",
      accommodationText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse…",
      includePopup: [
        {
          id: "1",
          text: "Lorem ipsum dolor sit amet"
        },
        {
          id: "2",
          text: "Lorem ipsum dolor sit amet"
        },
        {
          id: "3",
          text: "Lorem ipsum dolor sit amet"
        },
        {
          id: "4",
          text: "Lorem ipsum dolor sit amet"
        },
        {
          id: "5",
          text: "Lorem ipsum dolor sit amet"
        },
        {
          id: "6",
          text: "Lorem ipsum dolor sit amet"
        },
      ]
    },
  ]
}