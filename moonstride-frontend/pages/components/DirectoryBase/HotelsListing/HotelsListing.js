import React from 'react'
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Styles from './HotelsListing.module.scss'
import SearchRequirement from '../../../components/DirectoryBase/SearchRequirement/SearchRequirement';
import Sidebar from '../Sidebar/Sidebar';
import ListingFilter from '../ListingFilter/ListingFilter';
import BookingProcess from '../BookingProcess/BookingProcess';
import { Rating } from 'react-simple-star-rating';
import Form from "react-bootstrap/Form";

function HotelsListing() {
  return (
    <>
    <div className='container'>
      <BookingProcess processDetail = {processDetail} />
        <Row className="mt-4">
          <Col lg={3}>
            <div className={Styles.pageSidebar}>
              <Sidebar sidebarconfig={sidebarconfig}/>
            </div>
          </Col>
          <Col lg={9}>
              <SearchRequirement />
              <ListingFilter />
          </Col>
        </Row>
    </div>
    </>
  )
}

export default HotelsListing;
const sidebarconfig = [
  {
    id: 1,
    title: "Rating",
    sublinks: [
      { id: 1.1, checkboxData: "Botique Hotel" },
      { id: 1.2, checkboxData: <Form.Check><Rating initialValue="4" allowHover={false} readonly={true} fillColor= {"#fe6652"} emptyColor= {"#b7b7b7"}
      SVGstyle={{width:"18px", height:"18px"}}/></Form.Check>
      },
      { id: 1.3, checkboxData: <Form.Check><Rating initialValue="3" allowHover={false} readonly={true} fillColor= {"#fe6652"} emptyColor= {"#b7b7b7"}
      SVGstyle={{width:"18px", height:"18px"}}/></Form.Check> 
      },
      { id: 1.4, checkboxData: <Form.Check><Rating initialValue="2" allowHover={false} readonly={true} fillColor= {"#fe6652"} emptyColor= {"#b7b7b7"}
      SVGstyle={{width:"18px", height:"18px"}}/></Form.Check>
      },
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
      { id: 3.5, checkboxData: "25 mi", checkboxType: "radio", group:"radio"},
      { id: 3.6, checkboxData: "50 mi", checkboxType: "radio", group:"radio"},
      { id: 3.7, checkboxData: "75 mi", checkboxType: "radio", group:"radio"},
      { id: 3.8, checkboxData: "125 mi", checkboxType: "radio", group:"radio"},
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
];
const processDetail = [
  {
      id: 1,
      title: "Search"
  },
  {
      id: 2,
      title: "Choose Hotel"
  },
  {
      id: 3,
      title: "Choose Flight"
  },
  {
      id: 4,
      title: "Choose Extras"
  },
  {
      id: 5,
      title: "Book"
  }
] 