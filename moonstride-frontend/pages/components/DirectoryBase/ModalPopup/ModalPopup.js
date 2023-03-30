import React from 'react'
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Styles from "./ModalPopup.module.scss";
import { Rating } from 'react-simple-star-rating'

export default function ModalPopup(props) {
const [nav1, setNav1] = useState(null);
const [nav2, setNav2] = useState(null);
const [slider1, setSlider1] = useState(null);
const [slider2, setSlider2] = useState(null);
// useEffect(() => {
//     setNav1(slider1);
//     setNav2(slider2);
//   });
  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  };

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    infinite: true,
    dots: false,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px'
  };
  const tabSlider=[
    {
      id: "1",
      image: "/images/mainbanner.jpg"
    },
    {
      id: "2",
      image: "/images/mainbanner.jpg"
    },
    {
      id: "3",
      image: "/images/mainbanner.jpg"
    },
    {
      id: "4",
      image: "/images/mainbanner.jpg"
    },
    {
      id: "5",
      image: "/images/mainbanner.jpg"
    }
  ]
  const facilityTable=[
    {
      id: "1",
      typeData: "QUADRUPLE TWO QUEEN BEDS",
      facilityData: <>Tea and coffee making facilities <br />Hairdryer<br />Number of bedrooms(1)<br />Living room(0)<br />Centrally regulated air conditioning<br />Toiletries<br />Alarm clock<br />Smoking rooms<br /></>
    },
    {
      id: "2",
      typeData: "QUADRUPLE TWO QUEEN BEDS",
      facilityData: <>Tea and coffee making facilities <br />Hairdryer<br />Number of bedrooms(2)<br />Living room(0)<br />Centrally regulated air conditioning<br />Toiletries<br />Alarm clock<br />Smoking rooms<br /></>
    }
  ]
  const timeline =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424143.2714089991!2d150.6517757041629!3d-33.847927007344154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sin!4v1665056385520!5m2!1sen!2sin" width="100%" height="450" title= "" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  return (
      <>
        <Modal.Header closeButton>
          <h2 className="header-type1">{props.title}</h2>
        </Modal.Header>
        <Modal.Body className={Styles.modalBody}>
          <div className={`${Styles.bodyWrapper} mb-3`}>
            <div className={Styles.wrapper}
            >
              <div className={`position-relative ${Styles.imagebox}`}>
                <Image
                  className={Styles.mainImage}
                  src={`/images${props.image}`}
                  alt="Default Image"
                  width={240}
                  height={195}
                />
              </div>
            </div>
            <div
              className= {`${Styles.wrapper} d-flex flex-column justify-content-center`}
            >
              <div className={Styles.rating}>{props.rating}</div>
              <p className={Styles.description}>{props.description}</p>
            </div>
            <div
              className= {`${Styles.wrapper} d-flex flex-column align-items-lg-center justify-content-md-center`}
            >
              <div className={Styles.priceWrapper}>
                <div className={`${Styles.totalPrice} fs-3`}>
                  <p>Total Price</p>
                  <p>{props.totalPrice}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
          <div className={Styles.tabContent}>
            <Tabs defaultActiveKey="ACCOMMODATION" id="SearchWidgetTabs" className={`${Styles.tabWrapper} mb-3`}>
              <Tab eventKey="ACCOMMODATION" title="ACCOMMODATION" className='px-3 pb-3'>
                <div className={Styles.tabView}>
                  <p className='m-0'>{props.accommodationText}</p>
                </div>
              </Tab>
              
              <Tab eventKey="FACILITIES" title="FACILITIES" className='px-3 pb-3'>
                <div className={Styles.facilityTab}>
                  <table className='w-100'>
                    <tr>
                      <th>Room Type</th>
                      <th>Room Facilities</th>
                    </tr>
                    {facilityTable.map((list) => {
                      return(
                        <tr id={list.id} key={list.id}>
                          <td>{list.typeData}</td>
                          <td>{list.facilityData}</td>
                        </tr>
                        )
                    })}
                  </table>
                </div>
              </Tab>

              <Tab eventKey="PHOTOS" title="PHOTOS" className='px-3 pb-3'>
              <div className="slider-wrapper">
                <Slider
                  {...settingsMain}
                  asNavFor={nav2}
                  ref={slider => (setSlider1(slider))}
                >

                {tabSlider.map((slide) =>

                  <div className="slick-slide" key={slide.id}>
                    {/* <img className='w-100 h-100' src={slide.image} alt="Iamge"></img> */}
                    <Image 
                      className= {Styles.sliderImage}
                      src= {slide.image}
                      alt= "Iamge"
                      layout='responsive'
                      width= "100%"
                      height= "100%"
                      objectFit='cover'
                      />
                  </div>

                )}

                </Slider>
                <div className="thumbnail-slider-wrap mt-4">
                  <Slider
                    {...settingsThumbs}
                    asNavFor={nav1}
                    ref={slider => (setSlider2(slider))}>

                    {tabSlider.map((slide) =>

                      <div className="slick-slide" key={slide.id}>
                        {/* <img className='slick-slide-image w-100 px-3 h-100' src={slide.image} alt= "Iamge"></img> */}
                        <Image 
                          className= {`${Styles.sliderImage} px-2`}
                          src= {slide.image}
                          alt= "Iamge"
                          layout='responsive'
                          width= "100%"
                          height= "100%"
                          objectFit='cover'
                          />
                      </div>

                    )}

                  </Slider>
                </div>
              </div>
              </Tab>

              <Tab eventKey="MAP" title="MAP" className='px-3 pb-3'>
                <div className={Styles.mapTab} dangerouslySetInnerHTML={{ __html: timeline }}></div>
              </Tab>
            </Tabs>
          </div>

          </div>
        </Modal.Body>
      </>
  )
}

ModalPopup.defaultProps = {
  title: "Hard Rock Hotel Riviera Maya - Hacienda Section",
  image: "/mainbanner.jpg",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse…",
  rating: <Rating initialValue="4" allowHover={false} readonly={true} fillColor= {"#fe6652"} emptyColor= {"#b7b7b7"} SVGstyle={{width:"18px", height:"18px"}}/>,
  priceDescription: "Flight Included",
  price: "$721.00",
  totalPrice: "944.14",
  accommodationText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse…",
}