import React from "react";
import Image from "next/image";
import { useState } from "react";
import ButtonType from "../../Button/Button";
import Styles from "./FlightData.module.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FlightDetail from "../Flights Detail/FlightDetail";
import FairRules from "../FairRules/FairRules";
import BrandFair from "../BrandFair/BrandFair";

const FlightData = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {props.flightdata.map((data) => {
        return (
          <>
            <div className={Styles.flightData} key={data.id} id={data.id}>
              <div
                className={`${Styles.totalCostWrapper} d-flex justify-content-between align-items-center`}
              >
                <div>
                  <p className={`${Styles.price} m-0`}>{data.price}</p>
                  <p className={`${Styles.priceDescription} m-0`}>
                    Total costs | Taxes and fees included
                  </p>
                </div>
              </div>
              <Tabs
                defaultActiveKey="packages"
                className="mb-3"
              >
                <Tab eventKey="packages" title="Packages">
                  {data.flightTab.map((tabinfo) => {
                    return (
                      <div key={tabinfo.id} id={tabinfo.id}>
                        <div className={`${Styles.flightInformation} d-flex`}>
                          {tabinfo.outBoundData.map((list1) => {
                            return (
                              <div
                                key={list1.id}
                                className={`${Styles.outBound} w-50`}
                              >
                                <div className={Styles.outBoundText}>
                                  <span>
                                    <Image
                                      src="/images/outBound.svg"
                                      alt="Plane"
                                      className={Styles.outBoundImage}
                                      width={27}
                                      height={15}
                                    />
                                  </span>
                                  Outbound
                                </div>
                                <div className={`${Styles.timeWrapper} row`}>
                                  <div
                                    className={`${Styles.outBoundTime} col-sm-6`}
                                  >
                                    <h3
                                      className={`${Styles.time} position-relative fw-semibold m-0`}
                                    >
                                      {list1.time1}
                                    </h3>
                                    <p
                                      className={`${Styles.location} fw-normal m-0`}
                                    >
                                      {list1.location1}
                                    </p>
                                    <p
                                      className={`${Styles.date} fw-normal m-0`}
                                    >
                                      {list1.date1}
                                    </p>
                                  </div>
                                  <div
                                    className={`${Styles.outBoundTime} col-sm-6`}
                                  >
                                    <h3
                                      className={`${Styles.time1} fw-semibold m-0`}
                                    >
                                      {list1.time2}
                                    </h3>
                                    <p
                                      className={`${Styles.location} fw-normal m-0`}
                                    >
                                      {list1.location2}
                                    </p>
                                    <p
                                      className={`${Styles.date} fw-normal m-0`}
                                    >
                                      {list1.date2}
                                    </p>
                                  </div>
                                  <div
                                    className={`${Styles.flightDetailsWrapper} col-sm-12 d-flex`}
                                  >
                                    <ul
                                      className={`${Styles.details} ps-0 d-flex flex-wrap`}
                                    >
                                      {list1.flightDetail.map((item) => {
                                        return (
                                          <li
                                            className={`${Styles.listItems} d-flex align-items-center`}
                                            id={item.id}
                                            key={item.id}
                                          >
                                            {item.image ? (
                                              <Image
                                                src={
                                                  item.image ? item.image : ""
                                                }
                                                alt="Plane"
                                                width={item.imgWidth}
                                                height={item.imgHeight}
                                              />
                                            ) : (
                                              ""
                                            )}
                                            {item.text}
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                          {tabinfo.inBoundData.map((list2) => {
                            return (
                              <div
                                key={list2.id}
                                className={`${Styles.inBound} w-50`}
                              >
                                <div className={Styles.inBoundText}>
                                  <span>
                                    <Image
                                      src="/images/inBound.svg"
                                      alt="Plane"
                                      className={Styles.inBoundImage}
                                      width={27}
                                      height={17}
                                    />
                                  </span>
                                  Inbound
                                </div>
                                <div className={`${Styles.timeWrapper} row`}>
                                  <div
                                    className={`${Styles.inBoundTime} col-sm-6`}
                                  >
                                    <h3
                                      className={`${Styles.time} position-relative fw-semibold m-0`}
                                    >
                                      {list2.time1}
                                    </h3>
                                    <p
                                      className={`${Styles.location} fw-normal m-0`}
                                    >
                                      {list2.location1}
                                    </p>
                                    <p
                                      className={`${Styles.date} fw-normal m-0`}
                                    >
                                      {list2.date1}
                                    </p>
                                  </div>
                                  <div
                                    className={`${Styles.outBoundTime} col-sm-6`}
                                  >
                                    <h3
                                      className={`${Styles.time1} fw-semibold m-0`}
                                    >
                                      {list2.time2}
                                    </h3>
                                    <p
                                      className={`${Styles.location} fw-normal m-0`}
                                    >
                                      {list2.location2}
                                    </p>
                                    <p
                                      className={`${Styles.date} fw-normal m-0`}
                                    >
                                      {list2.date2}
                                    </p>
                                  </div>
                                  <div className="col-sm-12 d-flex">
                                    <ul
                                      className={`${Styles.details} ps-0 d-flex flex-wrap`}
                                    >
                                      {list2.flightDetail.map((item2) => {
                                        return (
                                          <li
                                            className={`${Styles.listItems} d-flex align-items-center`}
                                            id={item2.id}
                                            key={item2.id}
                                          >
                                            {item2.image ? (
                                              <Image
                                                src={
                                                  item2.image ? item2.image : ""
                                                }
                                                alt="Plane"
                                                width={item2.imgWidth}
                                                height={item2.imgHeight}
                                              />
                                            ) : (
                                              ""
                                            )}
                                            {item2.text}
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {tabinfo.innerdiv.map((list4) => {
                          return (
                            <div key={list4.id} id={list4.id}>
                              {toggle == (true && data.id && list4.id)
                                ? list4.component
                                : ""}
                            </div>
                          );
                        })}

                        <div className={`${Styles.buttonWrapper} mt-2 d-flex`}>
                          {tabinfo.buttons.map((list3) => {
                            return (
                              <ButtonType
                                key={list3.id}
                                id={list3.id}
                                onClick={() => {
                                  setToggle(!toggle && data.id && list3.id);
                                }}
                                className={`${Styles.custom} btntype2 me-2 d-flex align-items-center justify-content-center`}
                                name={list3.title}
                                icon={
                                  <Image
                                    src={list3.image}
                                    alt="Plane"
                                    className={Styles.image}
                                    width={30}
                                    height={30}
                                  />
                                }
                              />
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </Tab>

                <Tab eventKey="hotels" title="Hotels">
                  {props.otherFlight.map((flight) => {
                    return (
                      <div key={flight.id}>
                        <div className="d-flex justify-content-between align-items-center mb-3 mx-3">
                          <p className="m-0 fw-semibold">{flight.option}</p>
                          <ButtonType
                            className={`${Styles.flightButton} btntype1 p-2`}
                            name={flight.buttonText}
                          />
                        </div>
                        <div className={`${Styles.flightInformation} d-flex`}>
                          {flight.outBoundData.map((list5) => {
                            return (
                              <div
                                key={list5.id}
                                className={`${Styles.outBound} w-50`}
                              >
                                <div className={Styles.outBoundText}>
                                  <span className={Styles.outBoundImage}>
                                    <Image
                                      src="/images/outBound.svg"
                                      alt="Plane"
                                      width={27}
                                      height={15}
                                    />
                                  </span>
                                  Outbound
                                </div>
                                <div className={`${Styles.timeWrapper} row`}>
                                  <div
                                    className={`${Styles.outBoundTime} col-sm-6`}
                                  >
                                    <h3
                                      className={`${Styles.time} position-relative fw-semibold m-0`}
                                    >
                                      {list5.time1}
                                    </h3>
                                    <p
                                      className={`${Styles.location} fw-normal m-0`}
                                    >
                                      {list5.location1}
                                    </p>
                                    <p
                                      className={`${Styles.date} fw-normal m-0`}
                                    >
                                      {list5.date1}
                                    </p>
                                  </div>
                                  <div
                                    className={`${Styles.outBoundTime} col-sm-6`}
                                  >
                                    <h3
                                      className={`${Styles.time1} fw-semibold m-0`}
                                    >
                                      {list5.time2}
                                    </h3>
                                    <p
                                      className={`${Styles.location} fw-normal m-0`}
                                    >
                                      {list5.location2}
                                    </p>
                                    <p
                                      className={`${Styles.date} fw-normal m-0`}
                                    >
                                      {list5.date2}
                                    </p>
                                  </div>
                                  <div
                                    className={`${Styles.flightDetailsWrapper} col-sm-12 d-flex`}
                                  >
                                    <ul
                                      className={`${Styles.details} ps-0 d-flex flex-wrap`}
                                    >
                                      {list5.flightDetail.map((item3) => {
                                        return (
                                          <li
                                            className={`${Styles.listItems} d-flex align-items-center`}
                                            id={item3.id}
                                            key={item3.id}
                                          >
                                            {item3.image ? (
                                              <Image
                                                src={
                                                  item3.image ? item3.image : ""
                                                }
                                                alt="Plane"
                                                width={item3.imgWidth}
                                                height={item3.imgHeight}
                                              />
                                            ) : (
                                              ""
                                            )}
                                            {item3.text}
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                          {flight.inBoundData.map((list6) => {
                            return (
                              <div
                                key={list6.id}
                                className={`${Styles.inBound} w-50`}
                              >
                                <div className={Styles.inBoundText}>
                                  <span className={Styles.inBoundImage}>
                                    <Image
                                      src="/images/inBound.svg"
                                      alt="Plane"
                                      width={27}
                                      height={17}
                                    />
                                  </span>
                                  Inbound
                                </div>
                                <div className={`${Styles.timeWrapper} row`}>
                                  <div
                                    className={`${Styles.inBoundTime} col-sm-6`}
                                  >
                                    <h3
                                      className={`${Styles.time} position-relative fw-semibold m-0`}
                                    >
                                      {list6.time1}
                                    </h3>
                                    <p
                                      className={`${Styles.location} fw-normal m-0`}
                                    >
                                      {list6.location1}
                                    </p>
                                    <p
                                      className={`${Styles.date} fw-normal m-0`}
                                    >
                                      {list6.date1}
                                    </p>
                                  </div>
                                  <div
                                    className={`${Styles.outBoundTime} col-sm-6`}
                                  >
                                    <h3
                                      className={`${Styles.time1} fw-semibold m-0`}
                                    >
                                      {list6.time2}
                                    </h3>
                                    <p
                                      className={`${Styles.location} fw-normal m-0`}
                                    >
                                      {list6.location2}
                                    </p>
                                    <p
                                      className={`${Styles.date} fw-normal m-0`}
                                    >
                                      {list6.date2}
                                    </p>
                                  </div>
                                  <div className="col-sm-12 d-flex">
                                    <ul
                                      className={`${Styles.details} ps-0 d-flex flex-wrap`}
                                    >
                                      {list6.flightDetail.map((item4) => {
                                        return (
                                          <li
                                            className={`${Styles.listItems} d-flex align-items-center`}
                                            id={item4.id}
                                            key={item4.id}
                                          >
                                            {item4.image ? (
                                              <Image
                                                src={
                                                  item4.image ? item4.image : ""
                                                }
                                                alt="Plane"
                                                width={item4.imgWidth}
                                                height={item4.imgHeight}
                                              />
                                            ) : (
                                              ""
                                            )}
                                            {item4.text}
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {flight.Hotelinnerdiv.map((hotellist) => {
                          return (
                            <div key={hotellist.id} id={hotellist.id}>
                              {toggle == (true && data.id && hotellist.id)
                                ? hotellist.component
                                : ""}
                            </div>
                          );
                        })}

                        <div className={`${Styles.buttonWrapper} mt-2 d-flex`}>
                          {flight.Hotelbuttons.map((hotelbutton) => {
                            return (
                              <ButtonType
                                key={hotelbutton.id}
                                id={hotelbutton.id}
                                onClick={() => {
                                  setToggle(
                                    !toggle && data.id && hotelbutton.id
                                  );
                                }}
                                className={`${Styles.custom} btntype2 me-2 d-flex align-items-center justify-content-center`}
                                name={hotelbutton.title}
                                icon={
                                  <Image
                                    src={hotelbutton.image}
                                    alt="Plane"
                                    className={Styles.image}
                                    width={30}
                                    height={30}
                                  />
                                }
                              />
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </Tab>
              </Tabs>
            </div>
          </>
        );
      })}
    </>
  );
};

export default FlightData;

FlightData.defaultProps = {
  flightdata: [
    {
      id: 1,
      price: "+US$ 0",
      flightTab: [
        {
          id: "1",
          outBoundData: [
            {
              id: 1,
              time1: "21:50",
              location1: "Heathrow Airport",
              date1: "Jan 05, 2022",
              time2: "12:10",
              location2: "Heathrow Airport",
              date2: "Jan 10, 2022",
              flightDetail: [
                {
                  id: 1,
                  image: "/images/airlines.png",
                  imgWidth: "70",
                  imgHeight: "26",
                },
                {
                  id: 2,
                  text: "1 Stop",
                },
                {
                  id: 3,
                  image: "/images/clock.svg",
                  text: "10h 20m",
                  imgWidth: "15",
                  imgHeight: "15",
                },
                {
                  id: 4,
                  image: "/images/economy.svg",
                  text: "Economy",
                  imgWidth: "15",
                  imgHeight: "15",
                },
                {
                  id: 5,
                  image: "/images/baggage.svg",
                  text: "1 PC",
                  imgWidth: "15",
                  imgHeight: "15",
                },
              ],
            },
          ],
          inBoundData: [
            {
              id: 1,
              time1: "20:50",
              location1: "Heathrow Airport",
              date1: "Jan 10, 2022",
              time2: "2:10",
              location2: "Heathrow Airport",
              date2: "Jun 24, 2022",
              flightDetail: [
                {
                  id: 1,
                  image: "/images/airlines.png",
                  imgWidth: "70",
                  imgHeight: "26",
                },
                {
                  id: 2,
                  text: "1 Stop",
                },
                {
                  id: 3,
                  image: "/images/clock.svg",
                  text: "8h 20m",
                  imgWidth: "15",
                  imgHeight: "15",
                },
                {
                  id: 4,
                  image: "/images/economy.svg",
                  text: "Economy",
                  imgWidth: "15",
                  imgHeight: "15",
                },
                {
                  id: 5,
                  image: "/images/baggage.svg",
                  text: "1 PC",
                  imgWidth: "15",
                  imgHeight: "15",
                },
              ],
            },
          ],
          buttons: [
            {
              id: 1.1,
              title: "Flights details",
              image: "/images/arrow-down.svg",
            },
            {
              id: 1.2,
              title: "Fare rules",
              image: "/images/arrow-down.svg",
            },
            {
              id: 1.3,
              title: "Branded Fares",
              image: "/images/arrow-down.svg",
            },
          ],
          innerdiv: [
            {
              id: 1.1,
              component: <FlightDetail />,
            },
            {
              id: 1.2,
              component: <FairRules />,
            },
            {
              id: 1.3,
              component: <BrandFair />,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      price: "+US$ 10",
      flightTab: [
        {
          id: "2",
          outBoundData: [
            {
              id: 1,
              time1: "1:50",
              location1: "Heathrow Airport",
              date1: "Jan 05, 2022",
              time2: "11:10",
              location2: "Heathrow Airport",
              date2: "Jan 10, 2022",
              flightDetail: [
                {
                  id: 1,
                  image: "/images/airlines.png",
                  imgWidth: "70",
                  imgHeight: "26",
                },
                {
                  id: 2,
                  text: "1 Stop",
                },
                {
                  id: 3,
                  image: "/images/clock.svg",
                  text: "10h 20m",
                  imgWidth: "15",
                  imgHeight: "15",
                },
                {
                  id: 4,
                  image: "/images/economy.svg",
                  text: "Economy",
                  imgWidth: "15",
                  imgHeight: "15",
                },
                {
                  id: 5,
                  image: "/images/baggage.svg",
                  text: "1 PC",
                  imgWidth: "15",
                  imgHeight: "15",
                },
              ],
            },
          ],
          inBoundData: [
            {
              id: 1,
              time1: "20:50",
              location1: "Heathrow Airport",
              date1: "Jan 10, 2022",
              time2: "2:10",
              location2: "Heathrow Airport",
              date2: "Jun 24, 2022",
              flightDetail: [
                {
                  id: 1,
                  image: "/images/airlines.png",
                  imgWidth: "70",
                  imgHeight: "26",
                },
                {
                  id: 2,
                  text: "1 Stop",
                },
                {
                  id: 3,
                  image: "/images/clock.svg",
                  text: "8h 20m",
                  imgWidth: "15",
                  imgHeight: "15",
                },
                {
                  id: 4,
                  image: "/images/economy.svg",
                  text: "Economy",
                  imgWidth: "15",
                  imgHeight: "15",
                },
                {
                  id: 5,
                  image: "/images/baggage.svg",
                  text: "1 PC",
                  imgWidth: "15",
                  imgHeight: "15",
                },
              ],
            },
          ],
          buttons: [
            {
              id: 2.1,
              title: "Flights details",
              image: "/images/arrow-down.svg",
            },
            {
              id: 2.2,
              title: "Fare rules",
              image: "/images/arrow-down.svg",
            },
            {
              id: 2.3,
              title: "Branded Fares",
              image: "/images/arrow-down.svg",
            },
          ],
          innerdiv: [
            {
              id: 2.1,
              component: <FlightDetail />,
            },
            {
              id: 2.2,
              component: <FairRules />,
            },
            {
              id: 2.3,
              component: <BrandFair />,
            },
          ],
        },
      ],
    },
  ],

  otherFlight: [
    {
      id: 1,
      option: "Flight Option 1",
      buttonText: "Choose Flight",
      outBoundData: [
        {
          id: 1,
          time1: "10:50",
          location1: "Dubai Airport",
          date1: "Dec 05, 2022",
          time2: "11:10",
          location2: "Heathrow Airport",
          date2: "Jan 10, 2022",
          flightDetail: [
            {
              id: 1,
              image: "/images/airlines.png",
              imgWidth: "70",
              imgHeight: "26",
            },
            {
              id: 2,
              text: "1 Stop",
            },
            {
              id: 3,
              image: "/images/clock.svg",
              text: "10h 20m",
              imgWidth: "15",
              imgHeight: "15",
            },
            {
              id: 4,
              image: "/images/economy.svg",
              text: "Economy",
              imgWidth: "15",
              imgHeight: "15",
            },
            {
              id: 5,
              image: "/images/baggage.svg",
              text: "1 PC",
              imgWidth: "15",
              imgHeight: "15",
            },
          ],
        },
      ],
      inBoundData: [
        {
          id: 1,
          time1: "20:50",
          location1: "Heathrow Airport",
          date1: "Jan 10, 2022",
          time2: "2:10",
          location2: "Heathrow Airport",
          date2: "Jun 24, 2022",
          flightDetail: [
            {
              id: 1,
              image: "/images/airlines.png",
              imgWidth: "70",
              imgHeight: "26",
            },
            {
              id: 2,
              text: "1 Stop",
            },
            {
              id: 3,
              image: "/images/clock.svg",
              text: "8h 20m",
              imgWidth: "15",
              imgHeight: "15",
            },
            {
              id: 4,
              image: "/images/economy.svg",
              text: "Economy",
              imgWidth: "15",
              imgHeight: "15",
            },
            {
              id: 5,
              image: "/images/baggage.svg",
              text: "1 PC",
              imgWidth: "15",
              imgHeight: "15",
            },
          ],
        },
      ],
      Hotelbuttons: [
        {
          id: 1.1,
          title: "Flights details",
          image: "/images/arrow-down.svg",
        },
        {
          id: 1.2,
          title: "Fare rules",
          image: "/images/arrow-down.svg",
        },
        {
          id: 1.3,
          title: "Branded Fares",
          image: "/images/arrow-down.svg",
        },
      ],
      Hotelinnerdiv: [
        {
          id: 1.1,
          component: <FlightDetail />,
        },
        {
          id: 1.2,
          component: <FairRules />,
        },
        {
          id: 1.3,
          component: <BrandFair />,
        },
      ],
    },

    {
      id: 2,
      option: "Flight Option 2",
      buttonText: "Choose Flight",
      outBoundData: [
        {
          id: 1,
          time1: "21:50",
          location1: "Heathrow Airport",
          date1: "Jan 05, 2022",
          time2: "12:10",
          location2: "Heathrow Airport",
          date2: "Jan 10, 2022",
          flightDetail: [
            {
              id: 1,
              image: "/images/airlines.png",
              imgWidth: "70",
              imgHeight: "26",
            },
            {
              id: 2,
              text: "1 Stop",
            },
            {
              id: 3,
              image: "/images/clock.svg",
              text: "10h 20m",
              imgWidth: "15",
              imgHeight: "15",
            },
            {
              id: 4,
              image: "/images/economy.svg",
              text: "Economy",
              imgWidth: "15",
              imgHeight: "15",
            },
            {
              id: 5,
              image: "/images/baggage.svg",
              text: "1 PC",
              imgWidth: "15",
              imgHeight: "15",
            },
          ],
        },
      ],
      inBoundData: [
        {
          id: 1,
          time1: "20:50",
          location1: "Heathrow Airport",
          date1: "Jan 10, 2022",
          time2: "2:10",
          location2: "Heathrow Airport",
          date2: "Jun 24, 2022",
          flightDetail: [
            {
              id: 1,
              image: "/images/airlines.png",
              imgWidth: "70",
              imgHeight: "26",
            },
            {
              id: 2,
              text: "1 Stop",
            },
            {
              id: 3,
              image: "/images/clock.svg",
              text: "8h 20m",
              imgWidth: "15",
              imgHeight: "15",
            },
            {
              id: 4,
              image: "/images/economy.svg",
              text: "Economy",
              imgWidth: "15",
              imgHeight: "15",
            },
            {
              id: 5,
              image: "/images/baggage.svg",
              text: "1 PC",
              imgWidth: "15",
              imgHeight: "15",
            },
          ],
        },
      ],
      Hotelbuttons: [
        {
          id: 1.1,
          title: "Flights details",
          image: "/images/arrow-down.svg",
        },
        {
          id: 1.2,
          title: "Fare rules",
          image: "/images/arrow-down.svg",
        },
        {
          id: 1.3,
          title: "Branded Fares",
          image: "/images/arrow-down.svg",
        },
      ],
      Hotelinnerdiv: [
        {
          id: 1.1,
          component: <FlightDetail />,
        },
        {
          id: 1.2,
          component: <FairRules />,
        },
        {
          id: 1.3,
          component: <BrandFair />,
        },
      ],
    },
  ],
};
