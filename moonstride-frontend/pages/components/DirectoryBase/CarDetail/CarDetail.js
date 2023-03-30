import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Styles from './CarDetail.module.scss'
import DisplayCarDetail from './DisplayCarDetail'
import DetailSidebar from '../DetailSidebar/DetailSidebar'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
function CarDetail() {
  return (
    <Container>
      <div className={Styles.cardTop}>
        <Link href="/carlisting">
          <p className='m-0'>See all cars</p>
        </Link>
      </div>
      <Row className='mt-4'>
        <Col lg={9}>
          <DisplayCarDetail />
        </Col>
        <Col lg={3}>
          <DetailSidebar 
            pricePerday= "US$ 68"
            daysPrice= "$513.08"
            taxPrice= "$107.74"
            totlePrice= "$620.83"
            pickupPrice= "$620.83"
            paynowPrice= "$0.00"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default CarDetail

