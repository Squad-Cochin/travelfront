import React from 'react'
import Image from "next/image";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Link from "next/link";
import Styles from "./TransferDetail.module.scss";

const DisplayTransferDetail = (props) => {
  return (
    <>
        <Row className={`${Styles.transferDetails} pb-4`}>
            <Col lg={8} md={8} className="order-2 order-sm-1">
            <h1 className="fw-semibold header-type2 mb-2">{props.title}</h1>
            <span className={Styles.subTitle}>{props.subTitle}</span>
            <Row className={Styles.carInfo}>
                {props.vehicleDetail.map((detail) => {
                    return(
                    <Col key={detail.id} lg={6} md={6}>
                        <div className={"d-flex align-items-center"}>
                            <Image
                            src= {detail.image}
                            alt= "Logo"
                            className={"pe-2"}
                            width={22}
                            height={22}
                            />
                            <div className={"ps-2"}>
                                <span className={Styles.carDetail}>{detail.text}</span>
                            </div>
                        </div>
                    </Col>
                    )
                })}
                </Row>
                <div className="mt-4">
                    <ul className={`${Styles.descriptionText} mb-0 ps-0`}>
                        {props.description.map((list) =>{
                            return(
                                <li key={list.id} id={list.id}>
                                    {list.text}
                                </li>
                            ); 
                        })}
                    </ul>
                </div>
            </Col>
            <Col lg={4} md={4} className="order-1 order-sm-2 text-center">
                <Image
                    className="img-fluid"
                    src="/images/transferListing/tr1.png"
                    alt="Bus"
                    height={223}
                    width={299}
                />
            </Col>
        </Row>
        <Row className={`${Styles.transferRating} py-4`}>
            <h2 className="header-type1 fw-semibold mb-0">Traveler ratings</h2>
            <Col lg={9} md={9} className="mt-3">
                <span className={`${Styles.ratingTxtBold} fw-bold`}>{props.rating}</span>
                <span className={Styles.ratingTxtNo}>{props.customerRating}</span>
                <p className={`${Styles.carTxt} mb-0`}>
                    Best rated for vehicle condition and convenient pick-up location
                </p>
            </Col>
            <Col lg={3} md={3} className={`${Styles.ratingWrapper} text-sm-end text-start pt-3 pt-sm-0 d-flex`}>
                <div>
                    <Link href="/listing">
                    <a className={`link-type1 ${Styles.ratingLink} d-flex align-items-center`}>{props.totalRating}</a>
                    </Link>
                </div>
            </Col>
        </Row>
        <Row className={`${Styles.cancellationWrapper} py-4`}>
            <Col>
                <div className={`${Styles.cancellation} position-relative`}>
                    <h3 className="header-type3 mb-0">Free cancellation</h3>
                    <span className={Styles.text}>{props.cancellationDate}</span>
                </div>
            </Col>
        </Row>
    </>
  )
}

export default DisplayTransferDetail;
DisplayTransferDetail.defaultProps = {
    title: "Shared Shuttle",
    subTitle: "FROM2",
    rating: "9.5/10",
    customerRating: "(68 ratings)",
    totalRating: "78 ratings",
    cancellationDate: "Until Sun, Aug 7",
    vehicleDetail: [
        {
            id: 1,
            image: "/images/transferListing/people.svg",
            text: "5 Passengers"
        },
        {
            id: 2,
            image: "/images/transferListing/duration.svg",
            text: "50min"
        },
        {
            id: 3,
            image: "/images/transferListing/bag.svg",
            text: "2"
        },
        {
            id: 4,
            image: "/images/transferListing/enLear.svg",
            text: "Enhanced cleaning"
        },
    ],
    description: [
        {
            id: 1,
            text: "- Partial cancellation is not available for roundtrip transfers."
        },
        {
            id: 2,
            text: "- This transfer operates 24 hours a day."
        },
        {
            id: 3,
            text: "- 1 standard-size bag and 1 carry-on bag are allowed per person."
        },
        {
            id: 4,
            text: "- Additional and oversized baggage is subject to space availability and may incur an extra surcharge, which is payable to your driver at the time of service."
        },
        {
            id: 5,
            text: "- Photographs are meant to illustrate vehicle type only; your vehicle may differ from what is pictured."
        },
    ] 
}