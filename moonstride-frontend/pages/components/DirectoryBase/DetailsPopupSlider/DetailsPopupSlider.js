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
            itemsToScroll: 2,
            minWidth: 768,
       
            infiniteLoop: true,
          },
        ]}
        
        speed={200}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div className={Styles.slider}>
           <img src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_02_thum-1.jpg" ></img>
        </div>
        <div className={Styles.slider}>
          <img src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg"></img>
        </div>
        <div className={Styles.slider}>
        <img src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"></img>
        </div>
        <div className={Styles.slider}>
        <img src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg"></img>
        </div>
        <div className={Styles.slider}>
           <img src="https://ia801201.us.archive.org/14/items/Chrysanthemum_20160913/Chrysanthemum.jpg" ></img>
        </div>
        <div className={Styles.slider}>
          <img src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"></img>
        </div>
        <div className={Styles.slider}>
        <img src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_02_thum-1.jpg"></img>
        </div>
        <div className={Styles.slider}>
        <img src="https://ia801201.us.archive.org/14/items/Chrysanthemum_20160913/Chrysanthemum.jpg"></img>
        </div>

      
      </ReactSimplyCarousel>
    </div>
  );
}