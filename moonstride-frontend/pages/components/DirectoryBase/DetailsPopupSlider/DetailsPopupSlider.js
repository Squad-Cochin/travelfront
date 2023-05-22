import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
<link rel="stylesheet" href="../DetailsPopupSlider/DetailsPopupSlider.modules.css"></link>

const data = [
  {
   image: require('../../../../public/images/acitivity-image1.jpg'), 
   caption:"Caption",
   description:"Description Here"
  },
  {
    image:require("../../../../public/images/acitivity-image1.jpg"), 
    caption:"Caption",
    description:"Description Here"
   },
   {
    image:require('../../../../public/images/acitivity-image1.jpg'), 
    caption:"Caption",
    description:"Description Here"
   } 
]

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  


  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
       {data.map((slide, i) => {
        return (
        <Carousel.Item>      
          <img
            className="d-block w-100"
            src={"https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"}
            alt="slider image"
          />
          <Carousel.Caption>
            <h3>{slide.caption}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}

export default HomeCarousel;