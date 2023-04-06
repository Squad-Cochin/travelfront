//{On the component page that displays the homepage, a sidebar filter will also be included. This component will include all filter type functionalities on the homepage. }

import React, { useState } from "react";
//We installed react-bootstrap and used the Accordion component from the library
import Accordion from "react-bootstrap/Accordion";

//* This component shows the  title and search bar under the price range. We have passed values into the input component so that it can be reused.
import InputType from "../../Input/Input";

// * This page is for reusing a checkbox input.
import CheckboxType from "../../Checkbox/Checkbox";

// *Slide bar css page 
import Styles from "./Sidebar.module.scss";

// *This is an NPM package for displaying a price range
import RangeSlider from '../../../../node_modules/react-range-slider-input/dist/components/RangeSlider';
import 'react-range-slider-input/dist/style.css';
import { Form } from "react-bootstrap";

const Sidebar = (props) => {
  // *This function is used to close the sidebar
  const closeIcon = () => {
    document.body.classList.toggle("sidebarActive");
  };
  const [namevalue, setNamevalue] = useState(''); 
  const [rangeValue, setrangeValue] = useState(100);
  const [appliedFilters, setappliedFilters] = useState([]);
  let valuesArray = [];
  let filtersArray = [];
  const filterResult = (e) => {
    let checkBoxArray = document.querySelectorAll(".checkbox-filter input[type='checkbox']");
    let filteredArray = Array.from(checkBoxArray).filter((value) => {
      console.log(value.nextElementSibling.innerHTML);
      return value.checked  === true
    });
    //props.setFilterData(filteredArray);

    filteredArray.forEach((item) => {
      valuesArray.push(item.value);
      filtersArray.push(item.nextElementSibling.innerHTML)
    })
    
    setappliedFilters(filtersArray);
    props.setFilterData(valuesArray);

  }

  const changeFilterSlide = (e) => {
      console.log(e);
  }

  const changeName = (e) => {
      if(e.target.value != ""){
        valuesArray.push('NA:' + e.target.value);
      }
      setNamevalue(e.target.value);
      props.setFilterData(valuesArray);
  }

  const removefilter = (index) => {
    console.log(index.target.value);
    filtersArray.splice(index.target.value, 1);
    valuesArray.splice(index.target.value, 1);
    setappliedFilters(filtersArray);
    props.setFilterData(valuesArray);
  }
  return (
    <aside>
      <div className={Styles.sidebar_section}>
        <div className={`${Styles.sidebar_header_wrapper} d-flex justify-content-between align-items-center`}>
          <h2 className={`clearfix ${Styles.sidebar_header}`}>Filter</h2>
          {/* Reset  */}
          <a href="#" className={`${Styles.reset_lnk}`} title="Reset">Reset</a>
          <div className={Styles.closeButton} onClick={closeIcon}>
            
            <svg stroke="currentColor" fill="#ffffff" strokeWidth="0" viewBox="0 0 16 16" height="35" width="35" xmlns="http://www.w3.org/2000/svg"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path></svg>
          </div>

        </div>
  
        <div className={Styles.sidebar_box}>
          <div className={Styles.sidebar_result}>
            {props.filterData.length} Results
            {/* We will show the selected checkbox values here */}
            <div className={Styles.sidebar_selected_options}>
              {appliedFilters.map((item, index) => (
                  <span className={Styles.tag}>
                  {item}
                  <a href="javascript:;" onClick={removefilter} style={{ zIndex: 12 }}className={Styles.cancel} value={index} aria-label="culture">
                    <svg
                      width="11"
                      height="12"
                      value={index}
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
              ))}
              
            </div>
            
          </div>
          <div className="mb-3">
            <Form>
              <Form.Group>
                <Form.Label className={Styles.rangeTitle}>
                  Price
                </Form.Label>
                <label className="w-100">
                  {/* The price range bar will be displayed here */}
                  <RangeSlider 
                    aria-label= "Choose a value"
                    min= '0'
                    max= '2000'
                    defaultValue={[0, rangeValue]}
                    tooltip={true}
                    onChange={changeFilterSlide}
                    step={10}
                  />
                </label>
              </Form.Group>
            </Form>
          </div>
          {/* Search bar  */}
          <InputType
            label="Name"
            placeholder="Filter by name"
            class={Styles.sidebarinput}
            value={namevalue}
            onChange={changeName}
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
                      // Check box
                      <CheckboxType
                        key={sublink.id}
                        label={sublink.checkboxData}
                        type= {sublink.checkboxType}
                        value={sublink.value}
                        group={sublink.group}
                        onClick={filterResult}
                        className='checkbox-filter'
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
        { id: 11, value: "T:Activity", checkboxData: "Cruise and water sports(A) (9)" },
        { id: 12, value: "T:Standard",checkboxData: "Culture(S) (311)" },
        { id: 13, value: "T:Unstructured", checkboxData: "Sightseeing, tours & museums(U) (43)" },
        { id: 14, value: "T:Z",checkboxData: "Tours, Sightseeing & Cruises(A) (59)" },
      ],
    },
    {
      id: 2,
      title: "Your Budget",
      sublinks: [
        { id: 21, value: "B:L25", checkboxData: "Less than $25" },
        { id: 22, value: "B:L50", checkboxData: "$25 to $50" },
        { id: 23, value: "B:L75", checkboxData: "$50 to $75" },
        { id: 24, value: "B:L100", checkboxData: "$75 to $100" },
        { id: 25, value: "B:G100", checkboxData: "Greater than $100" },
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
        { id: 41, value: "D:L1", checkboxData: "Less than 1 hour" },
        { id: 42, value: "D:L4", checkboxData: "1 to 4 hours" },
        { id: 43, value: "D:L24", checkboxData: "4 hours to 1 day" },
        { id: 44, value: "D:G24",checkboxData: "More than 1 day" },
      ],
    },
  ],
}

