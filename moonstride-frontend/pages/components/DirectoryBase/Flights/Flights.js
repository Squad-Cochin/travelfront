import React, { useState } from "react";
import Styles from "./Flights.module.scss";
import ButtonType from "../../Button/Button";
import Image from "next/image";
import FlightDetail from '../Flights Detail/FlightDetail';
import FairRules from '../FairRules/FairRules';
import BrandFair from "../BrandFair/BrandFair";

const Flights = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {props.flightconfig.map((data) => {
        return (
          <div className={Styles.flightData} key={data.id} id={data.id}>
            <div className={`${Styles.totalCostWrapper} d-flex justify-content-between align-items-center`}>
              <div>
                <p className={`${Styles.price} m-0`}>{data.price}</p>
                <p className={`${Styles.priceDescription} m-0`}>
                  Total costs | Taxes and fees included
                </p>
              </div>
              <div className={Styles.flightbtnWrapper}>
                <ButtonType className={`${Styles.flightButton} btntype1`} name={data.buttonText} />
              </div>
            </div>
            <div className={`${Styles.flightInformation} d-flex`}>
              {data.outBoundData.map((list) => {
                return (
                  <div key={list.id} className={`${Styles.outBound} w-50`}>
                    <div className={Styles.outBoundText}>
                      <span className={Styles.outBoundImage}>
                        <Image
                          src= "/images/outBound.svg"
                          alt="Plane"
                          width={27}
                          height={15}
                        />
                      </span>
                      Outbound
                    </div>
                    <div className={`${Styles.timeWrapper} row`}>
                      <div className={`${Styles.outBoundTime} col-sm-6`}>
                        <h3 className={`${Styles.time} position-relative fw-semibold m-0`}>{list.time1}</h3>
                        <p className={`${Styles.location} fw-normal m-0`}>{list.location1}</p>
                        <p className={`${Styles.date} fw-normal m-0`}>{list.date1}</p>
                      </div>
                      <div className={`${Styles.outBoundTime} col-sm-6`}>
                        <h3 className={`${Styles.time1} fw-semibold m-0`}>{list.time2}</h3>
                        <p className={`${Styles.location} fw-normal m-0`}>{list.location2}</p>
                        <p className={`${Styles.date} fw-normal m-0`}>{list.date2}</p>
                      </div>
                      <div className='col-sm-12 d-flex'>
                        <ul className={`${Styles.details} ps-0 d-flex flex-wrap`}>
                          {list.flightDetail.map((item) => {
                            return (
                              <li className={`${Styles.listItems} d-flex align-items-center`} id={item.id} key={item.id}>
                                {item.image ?  <Image
                                  src={item.image ? item.image : ""}
                                  alt="Plane"
                                  width={item.imgWidth}
                                  height={item.imgHeight}
                                  className= "m-0"
                                /> : ""}
                                <p className={`${Styles.itemText} m-0 ps-2`}>{item.text}</p>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
              {data.inBoundData.map((list2) => {
                return (
                  <div key={list2.id} className={`${Styles.inBound} w-50`}>
                    <div className={Styles.inBoundText}>
                      <span className={Styles.inBoundImage}>
                        <Image
                          src= "/images/inBound.svg"
                          alt="Plane"
                          width={27}
                          height={17}
                        />
                      </span>
                      Inbound
                    </div>
                    <div className={`${Styles.timeWrapper} row`}>
                      <div className={`${Styles.inBoundTime} col-sm-6`}>
                        <h3 className={`${Styles.time} position-relative fw-semibold m-0`}>{list2.time1}</h3>
                        <p className={`${Styles.location} fw-normal m-0`}>{list2.location1}</p>
                        <p className={`${Styles.date} fw-normal m-0`}>{list2.date1}</p>
                      </div>
                      <div className={`${Styles.outBoundTime} col-sm-6`}>
                        <h3 className={`${Styles.time1} fw-semibold m-0`}>{list2.time2}</h3>
                        <p className={`${Styles.location} fw-normal m-0`}>{list2.location2}</p>
                        <p className={`${Styles.date} fw-normal m-0`}>{list2.date2}</p>
                      </div>
                      <div className="col-sm-12 d-flex">
                        <ul className={`${Styles.details} ps-0 d-flex flex-wrap`}>
                          {list2.flightDetail.map((item) => {
                            return (
                              <li id={item.id} key={item.id} className={`${Styles.listItems} d-flex align-items-center`}>
                                {item.image ?  <Image
                                  src={item.image ? item.image : ""}
                                  alt="Plane"
                                  width={item.imgWidth}
                                  height={item.imgHeight}
                                /> : ""}
                                <p className={`${Styles.itemText} m-0 ps-2`}>{item.text}</p>
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

            {data.innerdiv.map((list3)=>{
              return(
                <div key={list3.id} id= {list3.id}>
                  { toggle == (true && data.id && list3.id) ? list3.component : ""}
                </div>
              );
            })}

            <div className={`${Styles.buttonWrapper} mx-3 my-2 d-flex`}>
              {data.buttons.map((list4) => {
                return(
                  <ButtonType
                  key={list4.id} id={list4.id}
                  onClick={() => {setToggle(!toggle && data.id && list4.id)}}
                  className={`${Styles.custom} btntype2 me-2 d-flex align-items-center justify-content-center`}
                  name= {list4.title}
                  icon = {<Image
                          src= {list4.image}
                          alt="Plane"
                          className={Styles.image}
                          width={30}
                          height={30}
                        />}
                />
                )
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Flights;
Flights.defaultProps = {
  flightconfig: [
    {
      id: 1,
      price: "+US$ 10",
      buttonText: "Recommended Flight",
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
              imgWidth: "50",
              imgHeight: "26"
            },
            {
              id: 2,
              text: "1 Stop"
            },
            {
              id: 3,
              image: "/images/clock.svg",
              text: "10h 20m",
              imgWidth: "15",
              imgHeight: "15"
            },
            {
              id: 4,
              image: "/images/economy.svg",
              text: "Economy",
              imgWidth: "15",
              imgHeight: "15"
            },
            {
              id: 5,
              image: "/images/baggage.svg",
              text: "1 PC",
              imgWidth: "15",
              imgHeight: "15"
            }
          ]
        }
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
              imgWidth: "50",
              imgHeight: "26"
            },
            {
              id: 2,
              text: "1 Stop"
            },
            {
              id: 3,
              image: "/images/clock.svg",
              text: "8h 20m",
              imgWidth: "15",
              imgHeight: "15"
            },
            {
              id: 4,
              image: "/images/economy.svg",
              text: "Economy",
              imgWidth: "15",
              imgHeight: "15"
            },
            {
              id: 5,
              image: "/images/baggage.svg",
              text: "1 PC",
              imgWidth: "15",
              imgHeight: "15"
            }
          ]
        }
      ],
      buttons: [
        {
          id: 1.1,
          title: "Flights details",
          image: "/images/arrow-down.svg"
        },
        {
          id: 1.2,
          title: "Fare rules",
          image: "/images/arrow-down.svg"
        },
        {
          id: 1.3,
          title: "Branded Fares",
          image: "/images/arrow-down.svg"
        }
      ],
      innerdiv:[
        {
          id:1.1,
          component:<FlightDetail />
        },
        {
          id:1.2,
          component:<FairRules />
        },
        {
          id:1.3,
          component:<BrandFair />
        },
      ],
    }
  ]
};
