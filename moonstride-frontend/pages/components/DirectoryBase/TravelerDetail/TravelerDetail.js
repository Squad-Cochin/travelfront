import React from 'react'
import { Col, Row, Container} from "react-bootstrap";
import BookingProcess from '../BookingProcess/BookingProcess';
import Sidebar from '../Sidebar/Sidebar';
import Styles from './TravelerDetail.module.scss'
// import SelectType from '../../Select/Select';
import { TravelSidebar } from '../DetailSidebar/DetailSidebar';
import { FormDetail } from '../TravelerForm/TravelerForm';
// import TravelerForm from '../TravelerForm/TravelerForm';

export default function TravelerDetail() {
  return (
    <div>
    <Container>
    {/* processDetail={processdetail} */}
        <BookingProcess />
        <Row className="mt-4">
            <Col lg={9}>
              {/* <TravelerForm/> */}
              <FormDetail/>
            </Col>
            <Col lg={3}>
            <div className={Styles.pageSidebar}>
              <TravelSidebar />
            </div>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

// const processdetail=[
//     {
//         id:'1',
//         title: "Search"
//     },
//     {
//         id:'2',
//         title: "Booking"
//     }
// ]