import Image from "next/image";
import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Styles from "./CarDetail.module.scss";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import CheckboxType from "../../Checkbox/Checkbox";

const DisplayDetail = (props) => {
  return (
    <>
      <Row className={Styles.carDetails}>
        <Col lg={9} md={8} className="order-2 order-sm-2">
          <span className={`badge badge-info ${Styles.badgeTxt} fw-bold`}>
            Great Deal
          </span>
          <h1 className="header-type1 pt-3 mb-0">{props.title}</h1>
          <span className={Styles.subTitle}>{props.carName}</span>
          <Row className={Styles.carInfo}>
            {props.carDescription.map((data) => {
              return(
                <Col key={data.id} lg={6} md={6}>
                  <span className={`${Styles.carDescriptionData} d-flex align-items-center`}>
                    <Image
                      src= {data.image}
                      alt= "Logo"
                      className={"pe-2"}
                      width={22}
                      height={22}
                    />
                    {data.title}
                  </span>
                </Col>
              )
            })}
            <div className="mt-2">
            <Link href="/carlisting">
                <a className="link-type1 fw-bold">See More</a>
              </Link>
            </div>
          </Row>
        </Col>
        <Col lg={3} md={4} className="order-1 order-sm-1 text-center">
          <Image
            src={props.carImage}
            alt="car"
            height={225}
            width={300}
          />
        </Col>
      </Row>
      <Row className={Styles.carDetails}>
        <h2 className="header-type3 pt-3 mb-0">Traveler ratings</h2>
        <Col lg={9} md={9} className="mt-3">
          <span className={`${Styles.ratingTxtBold} fw-bold d-inline-block`}>{props.rating}</span>
          <span className={`${Styles.ratingTxtNo} d-inline-block`}>{props.customerRating}</span>
          <span className={Styles.carTxt}>
            Best rated for vehicle condition and convenient pick-up location
          </span>
        </Col>
        <Col lg={3} md={3} className="text-sm-end text-start pt-3 pt-sm-0">
          <Image
            src={props.ratingImage}
            alt="car"
            height={27}
            width={48}
          />
          <div>
            <Link href="/carlisting">
              <a className={`link-type1 fw-bold ${Styles.ratingLink}`}>{props.totleRating}</a>
            </Link>
          </div>
        </Col>
      </Row>
      <div className={`${Styles.carDetails} pt-3`}>
        <div className={Styles.freeCancelDiv}>
          <h3 className="header-type3 mb-0">Free cancellation</h3>
          <span className={Styles.carTxt}>
            Lock in this price today, cancel free of charge anytime. Reserve
            now and pay at pick-up.
          </span>
        </div>
      </div>
      <Row className={`${Styles.carDetails} pt-3`}>
        <h3 className="header-type3">Car rental location</h3>
        <Col lg={6} md={6} className={Styles.pickupDiv}>
          <h3 className="header-type3 mb-0">Pick-up</h3>
          {props.locationPickup.map((item) => {
            return(
              <div key={item.id} className={`${Styles.pickupDate} d-flex align-items-center`}>
                <Image
                  src= {item.image}
                  alt= "Logo"
                  className={"pe-2"}
                  width={22}
                  height={22}
                />
                <div className={"ps-2"}>
                  <span className={`${Styles.carTxt} d-block`}>{item.text}</span>
                  {item.secondText ? <span className={Styles.carTxt}>{item.secondText}</span> : ""}
                </div>
              </div>
            )
          })}
        </Col>
        <Col lg={6} md={6} className={Styles.dropOffDiv}>
          <h3 className="header-type3">Drop-off</h3>
          {props.locationDropoff.map((item) => {
            return(
              <div key={item.id} className={`${Styles.pickupDate} d-flex align-items-center`}>
                <Image
                  src= {item.image}
                  alt= "Logo"
                  className={"pe-2"}
                  width={22}
                  height={22}
                />
                <div className={"ps-2"}>
                  <span className={`${Styles.carTxt} d-block`}>{item.text}</span>
                  {item.secondText ? <span className={Styles.carTxt}>{item.secondText}</span> : ""}
                </div>
              </div>
            )
          })}
        </Col>
      </Row>
      <Row className={`${Styles.carDetails} pt-3`}>
        <h3 className="header-type3">Cleaning and safety practices</h3>
          {props.cleaningData.map((list) => {
            return(
              <Col key={list.id} lg={6} md={6}>
                <div className={`${Styles.cleaningDiv} d-flex align-items-center`}>
                  <Image
                    src= {list.image}
                    alt= "Logo"
                    className={"pe-2"}
                    width={22}
                    height={22}
                  />
                  <span className={`${Styles.carTxt} d-block`}>
                    {list.text}
                  </span>
                </div>
              </Col>
            )
          })}
        <div className="mt-2">
          <Link href="/">
            <a className={`link-type1 fw-bold ${Styles.ratingLink}`}>See all</a>
          </Link>
        </div>
      </Row>
      <div className={`${Styles.carDetails} pt-3`}>
        <h3 className="header-type3">Rental policies</h3>
        <div className={Styles.rentalPolicies}>
          <Accordion>
            {props.accordianData.map((data2) => {
              return(
              <Accordion.Item key={data2.id} eventKey={data2.eventkey}>
                <Accordion.Header>
                  <div>
                    <span className={Styles.rentalTxtP}>
                      {data2.title}
                    </span>
                    <span className={Styles.rentalTxt}>
                      {data2.description}
                    </span>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  {data2.bodyData}
                </Accordion.Body>
              </Accordion.Item>
              )
            })}
          </Accordion>
        </div>
        <div className="mt-2">
          <Link href="/">
            <a className={`link-type1 fw-bold ${Styles.rulesLink}`}>
              View rules and restrictions
            </a>
          </Link>
        </div>
      </div>
      <div className={`${Styles.carDetails} pt-3`}>
        <h3 className="header-type3">Extras</h3>
        <span className={Styles.extraTxt}>
          Requests cannot be guaranteed as they are subject to availability.
          Payment due at pick-up.
        </span>
        <div className={Styles.checkboxDiv}>
          {props.extras.map((data3) => {
            return (
              <Row key={data3.id}>
                <Col lg={6} md={6} className="col-6">
                  <CheckboxType label={data3.label} />
                </Col>
                <Col lg={6} md={6} className={`${Styles.checkboxPrice} col-6`}>
                  <span className="fw-bold">{data3.price}</span>
                  <span> {data3.pricePer}</span>
                </Col>
              </Row>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DisplayDetail;
DisplayDetail.defaultProps = {
  title: "Midsize Monospace",
  carName: "Ford Fiesta or similar",
  carImage: "/images/CarListing/car.png",
  rating: "9.5/10",
  customerRating: "(68 ratings)",
  ratingImage: "/images/CarListing/rating1.png",
  totleRating: "78 ratings",
  carDescription: [
    {
      id: 1,
      image: "/images/CarListing/person.svg",
      title: "5 Passengers"
    },
    {
      id: 2,
      image: "/images/CarListing/mileage.svg",
      title: "Unlimited mileage"
    },
    {
      id: 3,
      image: "/images/CarListing/ac.svg",
      title: "Air Conditioning"
    },
    {
      id: 4,
      image: "/images/CarListing/manual.svg",
      title: "5 Doors"
    },
    {
      id: 5,
      image: "/images/CarListing/gear.svg",
      title: "Manual"
    }
  ],
  locationPickup: [
    {
      id: 1,
      image: "/images/CarListing/flight.svg",
      text: "Mon, Aug 22, 10:30am"
    },
    {
      id: 2,
      image: "/images/CarListing/date.svg",
      text: "BCN Airport",
      secondText: "1-2 Terminal, Barcelona, ESP 8820"
    },
    {
      id: 3,
      image: "/images/CarListing/time.svg",
      text: "Hours of operation",
      secondText: "8:00am - 11:59pm"
    },
    {
      id: 4,
      image: "/images/CarListing/bus.svg",
      text: "Counter and car in terminal",
      secondText: "Rental car counter and car in the airport."
    }
  ],
  locationDropoff: [
    {
      id: 1,
      image: "/images/CarListing/date.svg",
      text: "BCN Airport",
      secondText: "1-2 Terminal, Barcelona, ESP 8820"
    },
    {
      id: 2,
      image: "/images/CarListing/time.svg",
      text: "Hours of operation",
      secondText: "8:00am - 11:59pm"
    },
    {
      id: 3,
      image: "/images/CarListing/bus.svg",
      text: "Counter and car in terminal",
      secondText: "Rental car counter and car in the airport."
    }
  ],
  cleaningData: [
    {
      id: 1,
      image: "/images/CarListing/enhance.svg",
      text: "Car interiors and exteriors cleaned with disinfectant before pick-up"
    },
    {
      id: 2,
      image: "/images/CarListing/social.svg",
      text: "Social distancing measures"
    },
    {
      id: 3,
      image: "/images/CarListing/htc.svg",
      text: "High-touch surfaces are sanitized at pick-up locations"
    }
  ],
  accordianData: [
    {
      id: 1,
      eventkey: "0",
      title: "Cancellation and no-show policy",
      description: "Free cancellation up to pick-up",
      bodyData: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.."
    },
    {
      id: 2,
      eventkey: "1",
      title: "Cancellation and no-show policy",
      description: "Free cancellation up to pick-up",
      bodyData: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.."
    }
  ],
  extras : [
    { id: 1,
      label: "Booster Seat",
      price: "$13",
      pricePer: "per day"
    },
    { id: 2,
      label: "Toddler Seat",
      price: "$13",
      pricePer: "per day"
    },
    { id: 3,
      label: "Infant Seat",
      price: "$13",
      pricePer: "per day"
    },
    { id: 4,
      label: "Navigation System",
      price: "$18",
      pricePer: "per day"
    }
  ]
}
