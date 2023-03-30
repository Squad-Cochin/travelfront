import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Styles from "./TimelineMap.module.scss";
function Map(props) {
  return <>{props.maps}</>;
}
export const TimelineMap = () => {
  const timeline =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424143.2714089991!2d150.6517757041629!3d-33.847927007344154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sin!4v1665056385520!5m2!1sen!2sin" width="600" height="450" title= "" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  const sidemaps = [
    {
      id: 1,
      parent: "Sydney",
      child: [
        {
          id: 1.1,
          subchild: "Jevis bay",
        },
      ],
    },
    {
      id: 2,
      parent: "Narooma",
      child: [
        {
          id: 2.1,
          subchild: "Mallacoota",
        },
      ],
    },
    {
      id: 3,
      parent: "Philip Island",
    },
    {
      id: 4,
      parent: "Melbourne",
    },
    {
      id: 5,
      parent: "Kangaroo Island",
    },
  ];
  return (
    <>
      <section className={Styles.timelineSection}>
        <h2 className={`mb-4 ${Styles.mapTitle}`}>Activity Route on map</h2>
        <Row>
          <Col className={Styles.timelineFlex} lg={3} md={4}>
            <div className={Styles.arrivalBox}>
              <div className={Styles.arrivalList}>
                <h3 className={Styles.arrivalHead}>Arrival in Sydney</h3>
                <ul className={Styles.cities}>
                  {sidemaps.map((sidemap) => {
                    return (
                      <>
                        <li
                          key={sidemap.id}
                          className={`${Styles.parentCities}`}
                        >
                          <p>{sidemap.parent}</p>
                          {sidemap.child ? (
                            <ul className={Styles.innerCities}>
                              {sidemap.child.map((childs) => {
                                return (
                                  <>
                                    <li
                                      key={childs.id}
                                      className={Styles.childCities}
                                    >
                                      {childs.subchild}
                                    </li>
                                  </>
                                );
                              })}
                            </ul>
                          ) : null}
                        </li>
                      </>
                    );
                  })}
                </ul>
                <h3 className={Styles.arrivalHead}>
                  Loren ipsum all the facts dolor mae sit.
                </h3>
                <ul className={Styles.cities}>
                  {sidemaps.map((sidemap) => {
                    return (
                      <>
                        <li
                          key={sidemap.id}
                          className={`${Styles.parentCities}`}
                        >
                          <p>{sidemap.parent}</p>
                          {sidemap.child ? (
                            <ul className={Styles.innerCities}>
                              {sidemap.child.map((childs) => {
                                return (
                                  <>
                                    <li
                                      key={childs.id}
                                      className={Styles.childCities}
                                    >
                                      {childs.subchild}
                                    </li>
                                  </>
                                );
                              })}
                            </ul>
                          ) : null}
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={9} md={8}>
            <div
              className={Styles.timelineMap}
              dangerouslySetInnerHTML={{ __html: timeline }}
            ></div>
          </Col>
        </Row>
      </section>
    </>
  );
};
export default TimelineMap;
