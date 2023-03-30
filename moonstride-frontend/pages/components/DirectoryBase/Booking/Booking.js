import React from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import Styles from "./Booking.module.scss";
import BookingProcess from '../BookingProcess/BookingProcess';
import { Container } from "react-bootstrap";
import FlightDetail from "../Flights Detail/FlightDetail";
import { TravelSidebar } from "../DetailSidebar/DetailSidebar";
import ButtonType from "../../Button/Button";
function Booking() {
  return (
    <Container>
      <BookingProcess />
      <Row className="my-4">
        <Col lg={{ span: 9, order: 1 }} xs={{ span: 12, order: 2 }}>
          <div className={Styles.bookingWrapper}>
            <h3 className={`${Styles.searchTitle} header-type3 m-0`}>Selected Flights</h3>
            <FlightDetail detailData = {detailData} />
          </div>
          <div className={`${Styles.additionalWrapper} mt-4`}>
            <h3 className={`${Styles.description} header-type3 m-0`}>Additional Comments</h3>
            <textarea className={`${Styles.additionalInformation} w-100`} placeholder="Enter Description"></textarea>
          </div>
          <div className="mt-4 text-end">
            <ButtonType
              className={`${Styles.customButton} btntype1`}
              name="CONTINUE TO CHECKOUT"
            />
          </div>
        </Col>
        <Col className="mb-4" lg={{ span: 3, order: 2 }} xs={{ span: 12, order: 1 }}>
          <TravelSidebar travelDetail={sidebarData}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Booking;
const sidebarData = [
  {
    id:1,
    title: "Flight Details",
    outboundDeparting:"Dubai Intl. Airport (DXB) , 2 May 2023 | 2:55 AM , Terminal: 1",
    outboundArriving:" Dubai  Intl. Airport (DXB) , 25 Apr 2023 | 1:35 PM, Terminal: 1",
    outboundAirline:" Delta Air Lines (DL4299)",
    outboundFaretype: "Refundable Main Cabin (B)",
    inboundDeparting:"Aberdeen Regional Airport (ABR) , 6 Apr 2023 | 06:50 AM",
    inboundArriving:"Aberdeen Regional Airport (ABR) , 19 May 2023 | 10:33 PM",
    inboundAirline:"Delta Air Lines (DL9385)",
    inboundFaretype:"Refundable Main Cabin (Q)"
  }
]
const detailData = [
  {
    id: "1",
    title: "Outbound Details",
    title2: "Inbound Details",
    outBoundData: [
      {
        id: "1",
        transitTime: "Transit Time: 10h 26m",
        location: "United States",
        date: "Dubai 05 Jan",
        location2: "Ahmedabad",
        date2: "Ahmedabad 05 Jan",
        listItem: [
          {
            id: "1",
            listItem: (
              <span>
                BAH 09:50 <p>Jan 05, 2022 Heathrow Airport Terminal 2</p>
              </span>
            ),
          },
          {
            id: "2",
            image: "/images/airlines.png",
            imgWidth: "70",
            imgHeight: "26",
          },
          {
            id: "3",
            listItem: (
              <span>
                BAH 23:59 <p>Jan 12, 2022 Bahrain Intl. Airport</p>
              </span>
            ),
          },
          {
            id: "4",
            listItem: (
              <>
                <Image
                  src="/images/clock.svg"
                  alt="clock"
                  width={15}
                  height={15}
                />
                <p>1h 24m</p>
              </>
            ),
          },
          {
            id: "5",
            listItem: "American Airlines AA 1245 Economy",
          },
        ],
        listItem2: [
          {
            id: "1",
            image: "/images/airlines.png",
            imgWidth: "70",
            imgHeight: "26",
          },
          {
            id: "2",
            listItem: "American Airlines AA 1245 Economy",
          },
          {
            id: "3",
            listItem: (
              <span>
                BAH 09:50 <p>Jan 05, 2022 Heathrow Airport Terminal 2</p>
              </span>
            ),
          },
          {
            id: "4",
            listItem: (
              <>
                <Image
                  src="/images/clock.svg"
                  alt="clock"
                  width={15}
                  height={15}
                />
                <p>1h 45m</p>
              </>
            ),
          },
          {
            id: "5",
            listItem: (
              <span>
                BAH 23:59 <p>Jan 12, 2022 Bahrain Intl. Airport</p>
              </span>
            ),
          },
        ],
      },
    ],

    inBoundData: [
      {
        id: "1",
        transitTime: "Transit Time: 13h 26m",
        location: "London",
        date: "Dubai 05 Jan",
        location2: "Ahmedabad",
        date2: "Dubai 05 Jan",
        listItem: [
          {
            id: "1",
            image: "/images/airlines.png",
            imgWidth: "70",
            imgHeight: "26",
          },
          {
            id: "2",
            listItem: "American Airlines AA 1245 Economy",
          },
          {
            id: "3",
            listItem: (
              <span>
                BAH 12:50 <p>Jan 15, 2021 Heathrow Airport Terminal 2</p>
              </span>
            ),
          },
          {
            id: "4",
            listItem: (
              <>
                <Image
                  src="/images/clock.svg"
                  alt="clock"
                  width={15}
                  height={15}
                />
                <p>1h 24m</p>
              </>
            ),
          },
          {
            id: "5",
            listItem: (
              <span>
                BAH 18:59 <p>Jun 12, 2022 Bahrain Intl. Airport</p>
              </span>
            ),
          },
        ],
        listItem2: [
          {
            id: "1",
            image: "/images/airlines.png",
            imgWidth: "70",
            imgHeight: "26",
          },
          {
            id: "2",
            listItem: "American Airlines AA 1245 Economy",
          },
          {
            id: "3",
            listItem: (
              <span>
                BAH 02:50 <p>Jan 05, 2022 Heathrow Airport Terminal 2</p>
              </span>
            ),
          },
          {
            id: "4",
            listItem: (
              <>
                <Image
                  src="/images/clock.svg"
                  alt="clock"
                  width={15}
                  height={15}
                />
                <p>1h 45m</p>
              </>
            ),
          },
          {
            id: "5",
            listItem: (
              <span>
                BAH 11:59 <p>Aug 12, 2022 Bahrain Intl. Airport</p>
              </span>
            ),
          },
        ],
      },
    ],
  },
]