import React from "react";
import Styles from "./BookingProcess2.module.scss";
import { useState } from "react";
import Image from "next/image";

export default function BookingProcess2(props) {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className={`${Styles.bookingProcess}`}>
      {props.processDetail.map((data) => {
        return (
          <div
            key={data.id}
            className={`${Styles.wrapper} ${
              activeTab === data.id - 1 && Styles.currentProcess
            } d-flex align-items-center`}
            onClick={() => setActiveTab(data.id - 1)}
          >
            <Image
              className={`${Styles.iconWrapper}`}
              src={data.image}
              alt="Logo"
              width={20}
              height={20}
            />
            <div className={`${Styles.titleWrapper} d-flex align-items-center`}>
              <span className={Styles.title}>{data.title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
BookingProcess2.defaultProps = {
  processDetail: [
    {
      id: 1,
      image: "/images/search.svg",
      title: "Search",
    },
    {
      id: 2,
      image: "/images/hotel.svg",
      title: "Choose Hotel",
    },
    {
      id: 3,
      image: "/images/flight.svg",
      title: "Choose Flight",
    },
    {
      id: 4,
      image: "/images/extra.svg",
      title: "Choose Extras",
    },
    {
      id: 5,
      image: "/images/booking.svg",
      title: "Book",
    },
    {
      id: 6,
      image: "/images/payment.svg",
      title: "Payment",
    },
    {
      id: 7,
      image: "/images/thankyou.svg",
      title: "Thank You",
    },
  ],
};
