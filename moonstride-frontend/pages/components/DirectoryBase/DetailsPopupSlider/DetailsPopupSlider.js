import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import Styles from "./DetailsPopupSlider.module.scss";
import Image from 'next/image';


export default function SimpleSlider(props) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const imageLoader = ({ src, width, quality }) => {
    return `${src}`;
  };

  return (
    <div className={Styles.Carousel_slider}>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: '#ff655500',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: '#ff655500',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 12,
              width: 11,
              borderRadius: "50%",
              border: 0,
              margin: 5,
            }
          },
          activeItemBtnProps: {
            style: {
              height: 12,
              width: 11,
              borderRadius: "50%",
              border: 0,
              background: "#ff6555",
              margin: 5,
            }
          }
        }}
        
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 3,
            minWidth: 768,
       
            infiniteLoop: true,
          },
        ]}
        
        speed={200}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}

        {props.images.map((item, index) => 
            <div key={index} className={Styles.slider}>
              <Image 
                src={item.url}
                loader={imageLoader}
                width={item.width}
                height={item.height}
                alt="Activity Image "
              />
            </div>  
        )}

      </ReactSimplyCarousel>
    </div>
  );
}

SimpleSlider.defaultProps = {
  images : []
}