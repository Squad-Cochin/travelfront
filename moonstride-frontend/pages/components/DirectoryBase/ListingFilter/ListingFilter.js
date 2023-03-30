import React, { useState } from 'react';
import Styles from './ListingFilter.module.scss';
import ButtonType from "../../Button/Button";
import Image from 'next/image';
import ListingBox from '../ListingBox/ListingBox';
import MapListing from '../MapListing/MapListing';
// import Image1 from '../../../../public/images/Listing.svg'

function ListingFilter() {
  const [open, setOpen] = useState(1);
  // const [active, setActive] = useState(false);
  const handleClick = () => {
    document.body.classList.toggle("sidebarActive");
  };
  return (
    <>
    <div className={Styles.listingFilter}>
      <div className={Styles.FilterButton} onClick={handleClick}>
        <svg stroke="#fe6652" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
      </div>
      <div>
        <ButtonType 
          onClick={() => {setOpen(1);}}
          className={`${Styles.customButton} btntype1`}
          name= "Listing"
          icon= {<svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15">
          <g troke="#fff" fill="#410f4e" strokeWidth="2" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6.495 1.5h13M6.495 7.5h13M6.495 13.5h13M1.495 1.5h.01M1.495 7.5h.01M1.495 13.5h.01"/>
          </g>
        </svg>}
        />

        <ButtonType 
          onClick={() => {setOpen(2);}}
          className={`${Styles.customButton1} btntype2`}
          icon= {<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">
          <g stroke="#fff" strokeWidth="2" fill="#410f4e" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 5v16l7-4 8 4 7-4V1l-7 4-8-4zM8 1v16M16 5v16"/>
          </g>
        </svg>}
          name= "View on Map"
        />
    
        {open === 1 &&
          (
            <ListingBox />
          )
        }
        {open === 2 &&
          (
            <MapListing />
          )
        }
      </div>
    </div>
    </>
  )
}

export default ListingFilter;