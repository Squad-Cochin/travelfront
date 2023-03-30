import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import InputType from "../../Input/Input";
import CheckboxType from "../../Checkbox/Checkbox";
import Styles from "./Sidebar.module.scss";
import RangeSlider from '../../../../node_modules/react-range-slider-input/dist/components/RangeSlider';
import 'react-range-slider-input/dist/style.css';
import { Form } from "react-bootstrap";

const Sidebar = (props) => {
  const closeIcon = () => {
    document.body.classList.toggle("sidebarActive");
  };
  return (
    <aside>
      <div className={Styles.sidebar_section}>
        <div className={`${Styles.sidebar_header_wrapper} d-flex justify-content-between align-items-center`}>
          <h2 className={`clearfix ${Styles.sidebar_header}`}>Filter</h2>
          <a href="#" className={`${Styles.reset_lnk}`} title="Reset">Reset</a>
          <div className={Styles.closeButton} onClick={closeIcon}>
            <svg stroke="currentColor" fill="#ffffff" strokeWidth="0" viewBox="0 0 16 16" height="35" width="35" xmlns="http://www.w3.org/2000/svg"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path></svg>
          </div>
        </div>
        <div className={Styles.sidebar_box}>
          <div className={Styles.sidebar_result}>
            123 Results
            <div className={Styles.sidebar_selected_options}>
              <span className={Styles.tag}>
                Culture
                <a href="#" className={Styles.cancel} aria-label="culture">
                  <svg
                    width="11"
                    height="12"
                    viewBox="0 0 11 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      stroke="#410F4E"
                      strokeWidth="1.5"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <path d="m.668 10.478 9.325-9.325M9.994 10.478.669 1.153" />
                    </g>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div className="mb-3">
            <Form>
              <Form.Group>
                <Form.Label className={Styles.rangeTitle}>
                  Price
                </Form.Label>
                <label className="w-100">
                  <RangeSlider 
                    aria-label= "Choose a value"
                    min= '0'
                    max= '2000'
                    defaultValue={[0, 1000]}
                    tooltip={true}
                  />
                </label>
              </Form.Group>
            </Form>
          </div>
          <InputType
            label="Name"
            placeholder="Filter by name"
            class={Styles.sidebarinput}
          />

          {props.sidebarconfig.map((nav) => {
            return (
              <Accordion
                defaultActiveKey="0"
                key={nav.id}
                className={Styles.sidebar_content}
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header className={`${Styles.sidebar_head}`}>
                    {nav.title}
                  </Accordion.Header>

                  <Accordion.Body className={Styles.sidebar_data}>
                    {nav.sublinks.map((sublink) => (
                      <CheckboxType
                        key={sublink.id}
                        label={sublink.checkboxData}
                        type= {sublink.checkboxType}
                        group={sublink.group}
                      />
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
Sidebar.defaultProps = {
  sidebarconfig : [
    {
      id: 1,
      title: "Type",
      sublinks: [
        { id: 11, checkboxData: "Cruise and water sports (9)" },
        { id: 12, checkboxData: "Culture (311)" },
        { id: 13, checkboxData: "Sightseeing, tours & museums (43)" },
        { id: 14, checkboxData: "Tours, Sightseeing & Cruises  (59)" },
      ],
    },
    {
      id: 2,
      title: "Your Budget",
      sublinks: [
        { id: 21, checkboxData: "Less than $25" },
        { id: 22, checkboxData: "$25 to $50" },
        { id: 23, checkboxData: "$50 to $75" },
        { id: 24, checkboxData: "$75 to $100" },
        { id: 25, checkboxData: "Greater than $100" },
      ],
    },
    {
      id: 3,
      title: "Start Time",
      sublinks: [
        { id: 31, checkboxData: "6:00am - 12:00am (morning)" },
        { id: 32, checkboxData: "12:00pm - 5:00pm (afternoon)" },
        { id: 33, checkboxData: "5:00pm - 12:00am (evening)" },
        { id: 34, checkboxData: "Any time" },
      ],
    },
    {
      id: 4,
      title: "Duration",
      sublinks: [
        { id: 41, checkboxData: "Less than 1 hour" },
        { id: 42, checkboxData: "1 to 4 hours" },
        { id: 43, checkboxData: "4 hours to 1 day" },
        { id: 44, checkboxData: "More than 1 day" },
      ],
    },
  ],
}

