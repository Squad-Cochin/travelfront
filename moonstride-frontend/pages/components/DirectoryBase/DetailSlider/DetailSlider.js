//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
//                    PAGE HAVING A COMPONENT OF IMAGE SHOWING AS A SLIDER                          //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////


import React, { useState } from "react";
import Styles from "./DetailSlider.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick/lib/slider";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Image from "next/image";

// FUNCTION FOR IMAGE SLIDE
export default function DetailSlider(props) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    centerMode: false,
    useTransform: true,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          vertical: false,
          horizontal:true,
          verticalSwiping: false,
          useTransform: false
        }
      }
    ],    
  };

  const imageLoader = ({ src, width, quality }) => {
    return `${src}`;
  };

  return (
    <>
      <div className={Styles.bannerSlider}>
        <Row className={Styles.bannerFlex}> 
          <Col className={Styles.cmnCol} md={8}>
            <Slider
              asNavFor={nav2}
              ref={(slider1) => setNav1(slider1)}
              dots={false}
              arrows={false}
              swipeToSlide={false}
              fade={true}
            > 
              {props.images.map((item, index) =>  
                  <div key={index} className={Styles.bannerslide}>
                    <Image 
                      src={item.url}
                      loader={imageLoader}
                      width={item.width}
                      height={item.height}
                      className={Styles.bannerim}
                      alt="Activity Image "
                    />
                  </div>  
              )}
              
            </Slider>
          </Col>
          <Col className={Styles.cmnCol} md={4}>
            <Slider
              className={Styles.secondSlider}
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
              {...settings}
            >
              {props.images.map((item, index) => 
                  <div key={index} className={Styles.bannerslide}>
                    <Image 
                      src={item.url}
                      loader={imageLoader}
                      width="362"
                      height="234"
                      className={Styles.bannerim}
                      alt="Activity Image "
                    />
                  </div>  
              )}
              
            </Slider>
          </Col>
        </Row>
      </div>
    </>
  );
}
DetailSlider.defaultProps = {
  images:[]
}
