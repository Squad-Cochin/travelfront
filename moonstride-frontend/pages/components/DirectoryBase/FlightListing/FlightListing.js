import React from 'react';
import Styles from './FlightListing.module.scss';
import FlightData from '../FlightData/FlightData';
import BookingProcess from '../BookingProcess/BookingProcess';
import Sidebar from '../Sidebar/Sidebar';
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating'
import SearchRequirement from '../SearchRequirement/SearchRequirement';

function FlightListing() {
  const handleClick = () => {
    document.body.classList.toggle("sidebarActive");
  };
  return (
    <div className='container'>
      <BookingProcess processDetail = {processDetail}/>
        <Row className="mt-4">
          <Col lg={3}>
            <div className={`${Styles.pageSidebar}`}>
              <Sidebar sidebarconfig= {sidebarconfig}/>
            </div>
          </Col>
          <Col lg={9}>
            <SearchRequirement />
            <div className={Styles.FilterButton} onClick={handleClick}>
              <svg stroke="#410f4e" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
              <p className={Styles.filterText}>Filter</p>
            </div>
            <FlightData />
          </Col>
        </Row>
    </div>
  )
}

export default FlightListing;
const processDetail = [
  {
    id: 1,
    title: "Search"
  },
  {
    id: 2,
    title: "Choose Flight"
  },
  {
    id: 3,
    title: "Book"
  },
  {
    id: 4,
    title: "Payment"
  },
  {
    id: 4,
    title: "Thank You"
  }
] 
const sidebarconfig = [
  {
    id: 1,
    title: "Rating",
    sublinks: [
      { id: 1.1, checkboxData: "Botique Hotel" },
      { id: 1.2, checkboxData: <Rating initialValue="4" allowHover={false} readonly={true} fillColor= {"#410f4e"} emptyColor= {"#b7b7b7"} SVGstyle={{width:"18px", height:"18px"}}/>},
      { id: 1.3, checkboxData: <Rating initialValue="3" allowHover={false} readonly={true} fillColor= {"#410f4e"} emptyColor= {"#b7b7b7"} SVGstyle={{width:"18px", height:"18px"}}/>},
      { id: 1.4, checkboxData: <Rating initialValue="2" allowHover={false} readonly={true} fillColor= {"#410f4e"} emptyColor= {"#b7b7b7"} SVGstyle={{width:"18px", height:"18px"}}/>},
    ],
  },
  {
    id: 2,
    title: "Meal Plan",
    sublinks: [
      { id: 2.1, checkboxData: "All Inclusive" },
      { id: 2.2, checkboxData: "Bed and Breakfast" },
      { id: 2.3, checkboxData: "Breakfast for two guests" },
      { id: 2.4, checkboxData: "Full Board" },
      { id: 2.5, checkboxData: "Half Board" },
      { id: 2.6, checkboxData: "Room Only" },
      { id: 2.7, checkboxData: "Self Catering" },
    ],
  },
  {
    id: 3,
    title: "Radius",
    sublinks: [
      { id: 3.1, checkboxData: "1 mi", checkboxType: "radio", group:"radio"},
      { id: 3.2, checkboxData: "5 mi", checkboxType: "radio", group:"radio" },
      { id: 3.3, checkboxData: "10 mi", checkboxType: "radio", group:"radio"},
      { id: 3.4, checkboxData: "25 mi", checkboxType: "radio", group:"radio"},
      { id: 3.5, checkboxData: "50 mi", checkboxType: "radio", group:"radio"},
      { id: 3.6, checkboxData: "75 mi", checkboxType: "radio", group:"radio"},
      { id: 3.7, checkboxData: "125 mi", checkboxType: "radio", group:"radio"},
    ],
  },
  {
    id: 4,
    title: "Preferred Hotels",
    sublinks: [
      { id: 4.1, checkboxData: "All", checkboxType: "radio", group:"radio" },
      { id: 4.2, checkboxData: "Preferred", checkboxType: "radio", group:"radio" },
    ],
  },
]
