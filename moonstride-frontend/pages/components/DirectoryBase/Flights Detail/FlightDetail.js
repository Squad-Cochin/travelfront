import React from "react";
import Image from "next/image";
import Styles from "./FlightDetail.module.scss";
import ButtonType from "../../Button/Button";

const FlightDetail = (props) => {
  return (
    <>
      {props.detailData.map((detail) => {
        return (
          <div key={detail.id} className={Styles.detailWrapper}>
            <div className={Styles.outBoundDetail}>
              <span className={Styles.outBoundImage}>
                <Image
                  src="/images/outBound.svg"
                  alt="Plane"
                  width={27}
                  height={15}
                />
              </span>
              {detail.title}
            </div>
            <div className={Styles.listWrapper}>
              {detail.outBoundData.map((data) => {
                return (
                  <div key={data.id} id={data.id}>
                    <div className={`${Styles.locationWrapper} d-flex`}>
                      <p className={`${Styles.location} fw-semibold m-0`}>
                        <span className={`${Styles.location1} position-relative`}>
                          {data.location}
                        </span>
                        <span className={`${Styles.location2} m-0`}>{data.date}</span>
                      </p>
                    </div>
                    <ul className={`${Styles.list} d-flex flex-wrap`}>
                      {data.listItem.map((list) => {
                        return (
                          <>
                          <li
                            className={Styles.listItem}
                            id={list.id}
                            key={list.id}
                          >
                            <Image
                              src={list.image ? list.image : ""}
                              className={list.image ? Styles.listImage : ""}
                              alt="Plane"
                              width={list.imgWidth}
                              height={list.imgHeight}
                            />
                            {list.listItem ? list.listItem : ""}
                          </li>
                          </>
                        );
                      })}
                    </ul>
                    <div className={`${Styles.transitTime} position-relative text-center`}>
                      <ButtonType
                        className={`${Styles.customButton} btntype2`}
                        name={data.transitTime}
                      />
                    </div>

                    <div className={`${Styles.locationWrapper} d-flex`}>
                      <p className={`${Styles.location} fw-semibold m-0`}>
                        <span className={`${Styles.location1} position-relative`}>
                          {data.location2}
                        </span>
                        <span className={`${Styles.location2} m-0`}>{data.date2}</span>
                      </p>
                    </div>

                    <ul className={`${Styles.list} d-flex flex-wrap`}>
                      {data.listItem2.map((list2) => {
                        return (
                          <li
                            className={Styles.listItem}
                            id={list2.id}
                            key={list2.id}
                          >
                            <Image
                              src={list2.image ? list2.image : ""}
                              className={list2.image ? Styles.listImage : ""}
                              alt="Plane"
                              width={list2.imgWidth}
                              height={list2.imgHeight}
                            />
                            {list2.listItem ? list2.listItem : ""}
                          </li>
                        );
                      })}
                    </ul>

                    {/* <div className={`${Styles.transitTime} position-relative text-center`}>
                      <ButtonType
                        className={`${Styles.customButton} btntype2`}
                        name={data.transitTime}
                      />
                    </div> */}
                  </div>
                );
              })}
            </div>

            <div className={Styles.inBoundDetail}>
              <span className={Styles.outBoundImage}>
                <Image
                  src="/images/inBound.svg"
                  alt="Plane"
                  width={27}
                  height={17}
                />
              </span>
              {detail.title2}
            </div>
            <div className={Styles.listWrapper}>
              {detail.inBoundData.map((data2) => {
                return (
                  <div key={data2.id} id={data2.id}>
                    <div className={`${Styles.locationWrapper} d-flex`}>
                      <p className={`${Styles.location} fw-semibold m-0`}>
                        <span className={`${Styles.location1} position-relative`}>
                          {data2.location}
                        </span>
                        <span className={`${Styles.location2} m-0`}>
                          {data2.date}
                        </span>
                      </p>
                    </div>
                    <ul className={`${Styles.list} d-flex flex-wrap`}>
                      {data2.listItem.map((secondlist) => {
                        return (
                          <li className={Styles.listItem} key={secondlist.id}>
                            <Image
                              src={secondlist.image ? secondlist.image : ""}
                              className={
                                secondlist.image ? Styles.listImage : ""
                              }
                              alt="Plane"
                              width={secondlist.imgWidth}
                              height={secondlist.imgHeight}
                            />
                            {secondlist.listItem ? secondlist.listItem : ""}
                          </li>
                        );
                      })}
                    </ul>

                    <div
                      className={`${Styles.transitTime} position-relative text-center`}
                    >
                      <ButtonType
                        className={`${Styles.customButton} btntype2`}
                        name={data2.transitTime}
                      />
                    </div>

                    <div className={`${Styles.locationWrapper} d-flex`}>
                      <p className={`${Styles.location} fw-semibold m-0`}>
                        <span className={`${Styles.location1} position-relative`}>
                          {data2.location2}
                        </span>
                        <span className={`${Styles.location2} m-0`}>
                          {data2.date2}
                        </span>
                      </p>
                    </div>
                    <ul className={`${Styles.list} d-flex flex-wrap`}>
                      {data2.listItem2.map((secondlist2) => {
                        return (
                          <li className={Styles.listItem} key={secondlist2.id}>
                            <Image
                              src={secondlist2.image ? secondlist2.image : ""}
                              className={
                                secondlist2.image ? Styles.listImage : ""
                              }
                              alt="Plane"
                              width={secondlist2.imgWidth}
                              height={secondlist2.imgHeight}
                            />
                            {secondlist2.listItem ? secondlist2.listItem : ""}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FlightDetail;
FlightDetail.defaultProps = {
  detailData: [
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
          date2: "Ahmedabad 10 Jan",
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
  ],
};
