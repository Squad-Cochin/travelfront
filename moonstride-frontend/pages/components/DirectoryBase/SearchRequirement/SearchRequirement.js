import React, { useState } from "react";
import ButtonType from "../../Button/Button";
import Flights from "../../../components/DirectoryBase/Flights/Flights";
import Styles from "./SearchRequirement.module.scss";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Link from "next/link";

const SearchRequirement = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={Styles.sectionWrapper}>
      {props.requireData.map((data) => {
        return(
          <div key={data.id} className={Styles.searchReq}>
            <div className={`${Styles.titleWrapper} d-flex justify-content-between align-items-center`}>
              <div className={Styles.title}>
                <h3 className={`${Styles.searchTitle} header-type3 m-0`}>
                  {data.title}
                </h3>
              </div>
              <div>
                <Link href="#">
                  <a className={Styles.link}>
                    Modify Search
                  </a>
                </Link>
              </div>
            </div>
            <Row className={Styles.resultWrapper}>
              <Col md={6} className={Styles.resultTitle}>
                <p className= 'm-0'>
                  {data.flightName}
                </p>
                <p className= 'm-0'>{data.timePeriod}</p>
              </Col>
              <Col md={6} className="text-md-end text-center">
                <ButtonType
                  onClick={() => setToggle(!toggle)}
                  className='btntype2'
                  name="View Recommended Flight"
                />
              </Col>
            </Row>
          </div>
        )
      })}

      {toggle === true && (
        <div className={Styles.flightWrapper}>
          <div className={Styles.recommendedFlight}>
            <h3 className={`${Styles.recommendedTitle} header-type3 m-0`}>
              Our Recommended Flight
            </h3>
          </div>
          <Flights />
        </div>
      )}
    </div>
  );
}

export default SearchRequirement;
SearchRequirement.defaultProps = {
  requireData: [
    {
      id: 1,
      title: "7 Hotels meets your search requirements",
      flightName: "London - All Airport to All Rivera Maya",
      timePeriod: "08/12/2021 to 25/12/2021"
    }
  ]
}
