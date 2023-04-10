//{ On the component that displays the homepage, 
// this component displays all destination images, along with descriptions, booking amounts, and more }

import React,{useEffect, useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Image from "next/image";
// This component is designed for reusing buttons
import ButtonType from "../../Button/Button";
import ActivityImage1 from "../../../../public/images/acitivity-image1.jpg";
import Styles from "./ListingProbox.module.scss";

const ListingProbox = (props) => {
  const [active, setActive] = useState(false);
  //new
  const [store, setStore] = useState([]);

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
  // console.log(inWishlist);
  } else {
      existingArray.push(item.id);
      localStorage.setItem("whishlisted", JSON.stringify(existingArray));
  }

  };

  return (
    <>
    {/* We are displaying the data here */}
    {props.boxData.map((item) => {

      // To limit the description count
      const maxLength = 120; // Maximum length of the content
      const limitedContent = item.text.substring(0, maxLength) + (item.text.length > maxLength ? "..." : "");
      
      return(
        <div className={Styles.list_probox} id={item.id} key={item.id}>
          <Row className="g-3">
            <Col className="d-flex align-items-center" lg={{ span: 3, order: 1 }} xs={{ span: 5, order: 1 }}>
              <div className={`position-relative ${Styles.imagebox}`}>



                <img src={item.image} width="200" height="164" alt="Activity Image" />


                
                <span className={`${Styles.favourite_list} ${active == (true && item.id) ? Styles.activeFavouritelist : ""}`} onClick={() => {
                      setActive(!active && item.id);
                      handleClick(item);
                    }}>
                  <svg
                    height="20px"
                    version="1.1"
                    viewBox="0 0 512 512"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M340.8,83C307,83,276,98.8,256,124.8c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6  L245.1,418l10.9,11l10.9-11l148.3-149.8c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z" fill={store.includes(item.id) ? "red" : "black"} />
                  </svg>
                </span>
              </div>
            </Col>
            <Col lg={{ span: 6, order: 2 }} xs={{ span: 12, order: 3 }}>
              <h2 className="header-type1">
                {item.title}
              </h2>
              <div className={Styles.probox_type}>{item.type}</div>
              <div className={Styles.probox_time}>{item.time}</div>
              <div className={Styles.probox_text}>
                {limitedContent}
              </div>
              <Link href={
                {
                  pathname: '/activitydetail',
                  query: { productId: item.productCode,
                           price: item.price
                         },
                }}
              >
                <a className="link-type1">{item.linkText}</a>
              </Link>
            </Col>
            <Col
              lg={{ span: 3, order: 3 }}
              xs={{ span: 7, order: 2 }}
              className="text-end"
            >
              <div className={Styles.price_section}>
                <span>From</span>
                <div className={Styles.price}>${item.price}</div>
                <span>per adult</span>
                <div className={Styles.probox_canceltext}>
                  Free Cancellation available
                </div>
                <div className={Styles.btn_bar}>
                  <div className="pb-2">
                    <span className="fw-bold">{item.rating}</span> ({item.ratingCount})
                  </div>
                  {/* Click the 'Book' button to book your reservation*/}
                  <ButtonType className="btntype1" name={item.buttonText} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )
    })}
    </>
  );
};

export default ListingProbox;
ListingProbox.defaultProps = {
  boxData: [
    {
      id: 1,
      title: "Barcelona Sailing Experience - Sunset",
      type: "Cruises and water sports",
      time: "3 hours",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit..",
      linkText: "More details",
      price: "$21.00",
      rating: "4.5/5",
      ratingCount: "68 ratings",
      buttonText: "Book"
    },
    {
      id: 2,
      title: "Barcelona Sailing Experience - Sunset",
      type: "Cruises and water sports",
      time: "2 hours",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit..",
      linkText: "More details",
      price: "$12.00",
      rating: "4.7/5",
      ratingCount: "68 ratings",
      buttonText: "Book"
    },
    {
      id: 3,
      title: "Barcelona Sailing Experience - Sunset",
      type: "Cruises and water sports",
      time: "5 hours",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit..",
      linkText: "More details",
      price: "$51.00",
      rating: "4.4/5",
      ratingCount: "68 ratings",
      buttonText: "Book"
    }
  ]
}

