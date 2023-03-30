import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import DetailSidebar from "../DetailSidebar/DetailSidebar";
import Styles from "./TransferDetail.module.scss";
import DisplayTransferDetail from "./DisplayTransferDetail";
import Link from "next/link";

function TransferDetail() {
  return (
    <>
    <div className='container'>
      <div className={Styles.cardTop}>
        <Link href="./carlisting">
          <a>See all Transfers</a>
        </Link>
      </div>
      <Row className="mt-4">
        <Col lg={9}>
          <DisplayTransferDetail />
        </Col>
        <Col lg={3}>
          <DetailSidebar 
            pricePerday= "US$ 106"
            daysPrice= "$410.08"
            taxPrice= "$90.74"
            totlePrice= "$500.08"
            pickupPrice= "$500.08"
            paynowPrice= "$0.00"
          />
        </Col>
      </Row>
    </div>
    </>
  );
}

export default TransferDetail;
