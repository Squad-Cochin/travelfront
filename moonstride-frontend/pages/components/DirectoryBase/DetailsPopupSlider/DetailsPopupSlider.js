import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import Styles from "./DetailsPopupSlider.module.scss";

export default function SimpleSlider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

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
            background: '#ff6555',
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
            background: '#ff6555',
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
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 2,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div className={Styles.slider}>
           <img src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_02_thum-1.jpg" ></img>
        </div>
        <div className={Styles.slider}>
          <img src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_02_thum-1.jpg"></img>
        </div>
        <div className={Styles.slider}>
        <img src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_02_thum-1.jpg"></img>
        </div>
        <div className={Styles.slider}>
        <img src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_02_thum-1.jpg"></img>
        </div>
        <div className={Styles.slider}>
           <img src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_02_thum-1.jpg" ></img>
        </div>
        <div className={Styles.slider}>
          <img src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_02_thum-1.jpg"></img>
        </div>
        <div className={Styles.slider}>
        <img src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_02_thum-1.jpg"></img>
        </div>
        <div className={Styles.slider}>
        <img src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_02_thum-1.jpg"></img>
        </div>
        
      
      </ReactSimplyCarousel>
    </div>
  );
}