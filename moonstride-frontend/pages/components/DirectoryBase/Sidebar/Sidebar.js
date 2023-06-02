////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
//      ON THE COMPONENT PAGE THAT DISPLAY THE HOMEPAGE, A SIDEBAR FILTER WILL ALSO BE INCLUDED.          //
//         THIS COMPONENT WILL INCLUDE ALL FILTER TYPE FUNCTIONALITIES ON TYHE HOMEPAGE                   //                                                                         
//                                                                                                        //  
////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import 'react-range-slider-input/dist/style.css';
import { Form } from "react-bootstrap";

// IMPORT PAGES
import Sidebar_booking_details from '../SidebarBookingItems/SidebarBookingItems'
import CheckboxType, { CheckboxTypeCustom }   from "../../Checkbox/Checkbox";
import Styles from "./Sidebar.module.scss";
// *This is an NPM package for displaying a price range
import RangeSlider from '../../../../node_modules/react-range-slider-input/dist/components/RangeSlider';

// SIDEBAR COMPONENT FUNCTION
const Sidebar = (props) => {
  
  // *This function is used to close the sidebar
  const closeIcon = () => {
    document.body.classList.toggle("sidebarActive");
  };

  const [rangeMinValue, setrangeMinValue] = useState(0/*Math.min(...props.searchdata.map(obj => obj.price))*/);
  const [rangeMaxValue, setrangeMaxValue] = useState(500/*Math.max(...props.searchdata.map(obj => obj.price))*/);
  const [appliedFilters, setappliedFilters] = useState([]);
  var valuesArray = [];
  var filtersArray = [];

  // FUNCTION TO APPLAY FILTER
  const filterResult = (e) => {
    let checkBoxArray = document.querySelectorAll(".checkbox-filter input[type='checkbox']");
    let filteredArray = Array.from(checkBoxArray).filter((value) => {
      return value.checked  === true
    });
    let radioBoxArray = document.querySelectorAll(".checkbox-filter input[type='radio']");
    let filteredArrayRadio = Array.from(radioBoxArray).filter((value) => {
      return value.checked  === true
    });
    let filterValuesArray = filteredArray.concat(filteredArrayRadio);
    filterValuesArray.forEach((item) => {
      valuesArray.push(item.value);
      filtersArray.push(item.nextElementSibling.innerText)
    });
    valuesArray.push('PF:' + rangeMinValue + '&' + rangeMaxValue);
    setappliedFilters(filtersArray);
    props.setFilterData(valuesArray);
    props.page == 0 ? props.setPage(1) : props.setPage(0);
  }

  // FUNCTION FOR RESET FILTERS
  const resetFilters = () => {
    setappliedFilters([]);
    props.setFilterData([]);
    setrangeMaxValue(500);
    setrangeMinValue(0);
    props.page == 0 ? props.setPage(1) : props.setPage(0);
  }

  // PRICE RANGE SILIDER
  const changeFilterSlide = (e) => {
      setrangeMaxValue(e[1]);
      setrangeMinValue(e[0]);
  }

  // CHECKBOX FUNCTIONALITY
  const changeChekbox = () => {}

  return (
    <aside>
      <Sidebar_booking_details cartData={props.cartData} setcartdata={props.setcartdata}/>
      <div className={Styles.sidebar_section}>
        <div className={`${Styles.sidebar_header_wrapper} d-flex justify-content-between align-items-center`}>
          <h2 className={`clearfix ${Styles.sidebar_header}`}>Filter</h2>
          {/* Reset  */}
          <a href="#" onClick={resetFilters} className={`${Styles.reset_lnk}`} title="Reset">Reset</a>
          <div className={Styles.closeButton} onClick={closeIcon}>
            
            <svg stroke="currentColor" fill="#ffffff" strokeWidth="0" viewBox="0 0 16 16" height="35" width="35" xmlns="http://www.w3.org/2000/svg"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path></svg>
          </div>

        </div>
  
        <div className={Styles.sidebar_box}>
          <div className={Styles.sidebar_result}>
          </div>
          <div className="mb-3">
            <Form>
              <Form.Group>
                <Form.Label className={Styles.rangeTitle}>
                  Price
                </Form.Label>
                <div className={Styles['price-rage-box']}>
                  <span>${Math.floor(rangeMinValue)}</span>
                  <span>${Math.ceil(rangeMaxValue)}{rangeMaxValue == 500 ? `+` : ``}</span>
                </div>
                <label className="w-100">
                  {/* The price range bar will be displayed here */}
                  <RangeSlider 
                    aria-label= "Choose a value"
                    min= {0}
                    max= {500}
                    defaultValue={[0, 500]}
                    value={[rangeMinValue, rangeMaxValue]}
                    tooltip={true}
                    onThumbDragEnd={filterResult}
                    onInput={changeFilterSlide}
                    step={1}
                  />
                </label>
              </Form.Group>
            </Form>
          </div>
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
                    {nav.sublinks.map((sublink) => {
                       let checked = false
                       if(props.filterValues.indexOf(sublink.value) !== -1){
                        checked = true
                       }
                    // Check box
                      if(sublink.typex === "radio"){
                        return(<CheckboxTypeCustom
                          key={sublink.id}
                          label={sublink.checkboxData}
                          type= {sublink.checkboxType}
                          value={sublink.value}
                          group={sublink.group}
                          checked={checked}
                          name={sublink.name}
                          onClick={filterResult}
                          onChange={changeChekbox}
                          className='checkbox-filter'
                        />)
                      }else{
                        return(<CheckboxType
                          key={sublink.id}
                          label={sublink.checkboxData}
                          type= {sublink.checkboxType}
                          value={sublink.value}
                          group={sublink.group}
                          checked={checked}
                          onChange={changeChekbox}
                          onClick={filterResult}
                          className='checkbox-filter'
                        />)
                      }  
                    })}
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

// DEFAULT SIDEBAR PROPERTIES
Sidebar.defaultProps = {
  sidebarconfig : [
    {
      id: 6,
      title: "Rating",
      sublinks: [
        { id: 61, name:"rating", typex: "radio", value: "R:5", checkboxData: <svg className="pb-1 fill-yellow" width="80" height="20" viewBox="0 0 80 15" fill="gold" ><title>star-5</title><path d="M7.50006,0A.76964.76964,0,0,0,6.799.45589L5.08757,4.08344a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395L3.00792,9.33118a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,3.34946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,11.65065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L14.76137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L8.20114.45589A.76963.76963,0,0,0,7.50006,0Z"></path>
        
        <path d="M23.75006,0A.76964.76964,0,0,0,23.049.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,19.59946,15a.75111.75111,0,0,0,.36395-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,27.90065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L31.01137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L24.45114.45589A.76963.76963,0,0,0,23.75006,0Z"></path>
        
        <path d="M40.00006,0A.76964.76964,0,0,0,39.299.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,35.84946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,44.15065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L47.26137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L40.70114.45589A.76963.76963,0,0,0,40.00006,0Z"></path>
        
        <path d="M56.25006,0A.76964.76964,0,0,0,55.549.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,52.09946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,60.40065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L63.51137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L56.95114.45589A.76963.76963,0,0,0,56.25006,0Z"></path>
        
        <path d="M72.50006,0A.76964.76964,0,0,0,71.799.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,68.34946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,76.65065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L79.76137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L73.20114.45589A.76963.76963,0,0,0,72.50006,0Z"></path>
        
        </svg> }, 
        
        { id: 62, name:"rating", typex: "radio", value: "R:4", checkboxData: <div><svg className="pb-1 fill-yellow" width="80" height="20" viewBox="0 0 80 15" fill="gold" ><title>star-4</title>
        
        <path d="M7.50006,0A.76964.76964,0,0,0,6.799.45589L5.08757,4.08344a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395L3.00792,9.33118a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,3.34946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,11.65065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L14.76137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L8.20114.45589A.76963.76963,0,0,0,7.50006,0Z"></path>
        
        <path d="M23.75006,0A.76964.76964,0,0,0,23.049.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,19.59946,15a.75111.75111,0,0,0,.36395-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,27.90065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L31.01137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L24.45114.45589A.76963.76963,0,0,0,23.75006,0Z"></path>

        <path d="M40.00006,0A.76964.76964,0,0,0,39.299.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,35.84946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,44.15065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L47.26137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L40.70114.45589A.76963.76963,0,0,0,40.00006,0Z"></path>

        <path d="M56.25006,0A.76964.76964,0,0,0,55.549.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,52.09946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,60.40065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L63.51137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L56.95114.45589A.76963.76963,0,0,0,56.25006,0Z"></path>
        
        <path d="M72.64664.85594h0m-.14658.31072,1.56485,3.31688a1.72085,1.72085,0,0,0,1.29547.97414l3.58338.54469L76.32309,8.67469a1.78219,1.78219,0,0,0-.48066,1.53211l.60968,3.71858-3.13662-1.72506a1.68845,1.68845,0,0,0-1.63082,0l-3.13666,1.725.60972-3.71855A1.78223,1.78223,0,0,0,68.677,8.67469L66.05634,6.00238l3.58341-.54469a1.7209,1.7209,0,0,0,1.29546-.97415l1.56485-3.31688m0-1.16666A.76964.76964,0,0,0,71.799.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,68.34946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,76.65065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L79.76137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L73.20114.45589A.76963.76963,0,0,0,72.50006,0Z"></path>
        
        </svg></div>},
         { id: 63, name:"rating", typex: "radio", value: "R:3", checkboxData: <div><svg className="pb-1 fill-yellow" width="80" height="20" viewBox="0 0 80 15" fill="gold" ><title>star-3</title><path d="M56.39664.85594h0m-.14658.31072,1.56485,3.31688a1.72085,1.72085,0,0,0,1.29547.97414l3.58338.54469L60.07309,8.67469a1.78219,1.78219,0,0,0-.48066,1.53211l.60968,3.71858-3.13662-1.72506a1.68845,1.68845,0,0,0-1.63082,0l-3.13666,1.725.60972-3.71855A1.78223,1.78223,0,0,0,52.427,8.67469L49.80634,6.00238l3.58341-.54469a1.7209,1.7209,0,0,0,1.29546-.97415l1.56485-3.31688m0-1.16666A.76964.76964,0,0,0,55.549.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,52.09946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,60.40065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L63.51137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L56.95114.45589A.76963.76963,0,0,0,56.25006,0Z"></path><path d="M40.00006,0A.76964.76964,0,0,0,39.299.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,35.84946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,44.15065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L47.26137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L40.70114.45589A.76963.76963,0,0,0,40.00006,0Z"></path><path d="M23.75006,0A.76964.76964,0,0,0,23.049.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,19.59946,15a.75111.75111,0,0,0,.36395-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,27.90065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L31.01137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L24.45114.45589A.76963.76963,0,0,0,23.75006,0Z"></path><path d="M7.50006,0A.76964.76964,0,0,0,6.799.45589L5.08757,4.08344a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395L3.00792,9.33118a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,3.34946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,11.65065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L14.76137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L8.20114.45589A.76963.76963,0,0,0,7.50006,0Z"></path><path d="M72.64664.85594h0m-.14658.31072,1.56485,3.31688a1.72085,1.72085,0,0,0,1.29547.97414l3.58338.54469L76.32309,8.67469a1.78219,1.78219,0,0,0-.48066,1.53211l.60968,3.71858-3.13662-1.72506a1.68845,1.68845,0,0,0-1.63082,0l-3.13666,1.725.60972-3.71855A1.78223,1.78223,0,0,0,68.677,8.67469L66.05634,6.00238l3.58341-.54469a1.7209,1.7209,0,0,0,1.29546-.97415l1.56485-3.31688m0-1.16666A.76964.76964,0,0,0,71.799.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,68.34946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,76.65065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L79.76137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L73.20114.45589A.76963.76963,0,0,0,72.50006,0Z"></path></svg></div> },

         { id: 64, name:"rating", typex: "radio", value: "R:2", checkboxData: <div><svg className="pb-1 fill-yellow" width="80" height="20" viewBox="0 0 80 15" fill="gold" ><title>star-3</title>
         
         <path d="M56.39664.85594h0m-.14658.31072,1.56485,3.31688a1.72085,1.72085,0,0,0,1.29547.97414l3.58338.54469L60.07309,8.67469a1.78219,1.78219,0,0,0-.48066,1.53211l.60968,3.71858-3.13662-1.72506a1.68845,1.68845,0,0,0-1.63082,0l-3.13666,1.725.60972-3.71855A1.78223,1.78223,0,0,0,52.427,8.67469L49.80634,6.00238l3.58341-.54469a1.7209,1.7209,0,0,0,1.29546-.97415l1.56485-3.31688m0-1.16666A.76964.76964,0,0,0,55.549.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,52.09946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,60.40065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L63.51137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L56.95114.45589A.76963.76963,0,0,0,56.25006,0Z"></path>

         <path d="M23.75006,0A.76964.76964,0,0,0,23.049.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,19.59946,15a.75111.75111,0,0,0,.36395-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,27.90065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L31.01137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L24.45114.45589A.76963.76963,0,0,0,23.75006,0Z"></path>

         <path d="M40.14664.85594h0m-.14658.31072,1.56485,3.31688a1.72085,1.72085,0,0,0,1.29547.97414l3.58338.54469L43.82309,8.67469a1.78219,1.78219,0,0,0-.48066,1.53211l.60968,3.71858-3.13662-1.72506a1.68845,1.68845,0,0,0-1.63082,0l-3.13666,1.725.60972-3.71855A1.78223,1.78223,0,0,0,36.177,8.67469L33.55634,6.00238l3.58341-.54469a1.7209,1.7209,0,0,0,1.29546-.97415l1.56485-3.31688m0-1.16666A.76964.76964,0,0,0,39.299.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,35.84946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,44.15065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L47.26137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L40.70114.45589A.76963.76963,0,0,0,40.00006,0Z"></path>
         
         <path d="M7.50006,0A.76964.76964,0,0,0,6.799.45589L5.08757,4.08344a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395L3.00792,9.33118a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,3.34946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,11.65065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L14.76137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L8.20114.45589A.76963.76963,0,0,0,7.50006,0Z"></path>
         
         <path d="M72.64664.85594h0m-.14658.31072,1.56485,3.31688a1.72085,1.72085,0,0,0,1.29547.97414l3.58338.54469L76.32309,8.67469a1.78219,1.78219,0,0,0-.48066,1.53211l.60968,3.71858-3.13662-1.72506a1.68845,1.68845,0,0,0-1.63082,0l-3.13666,1.725.60972-3.71855A1.78223,1.78223,0,0,0,68.677,8.67469L66.05634,6.00238l3.58341-.54469a1.7209,1.7209,0,0,0,1.29546-.97415l1.56485-3.31688m0-1.16666A.76964.76964,0,0,0,71.799.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,68.34946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,76.65065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L79.76137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L73.20114.45589A.76963.76963,0,0,0,72.50006,0Z">
          </path></svg></div> },
          
         { id: 65, name:"rating", typex: "radio", value: "R:1", checkboxData: <div><svg className="pb-1 fill-yellow" width="80" height="20" viewBox="0 0 80 15" fill="gold" ><title>star-1</title>
         <path d="M7.50006,0A.76964.76964,0,0,0,6.799.45589L5.08757,4.08344a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395L3.00792,9.33118a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,3.34946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,11.65065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L14.76137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L8.20114.45589A.76963.76963,0,0,0,7.50006,0Z"></path>
         <path d="M23.89664.85594h0m-.14658.31072,1.56485,3.31688a1.72085,1.72085,0,0,0,1.29547.97414l3.58338.54469L27.57309,8.67469a1.78219,1.78219,0,0,0-.48066,1.53211l.60968,3.71858-3.13662-1.72506a1.68845,1.68845,0,0,0-1.63082,0l-3.13666,1.725.60972-3.71855A1.78223,1.78223,0,0,0,19.927,8.67469L17.30634,6.00238l3.58341-.54469a1.7209,1.7209,0,0,0,1.29546-.97415l1.56485-3.31688m0-1.16666A.76964.76964,0,0,0,23.049.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,19.59946,15a.75111.75111,0,0,0,.36395-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,27.90065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L31.01137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L24.45114.45589A.76963.76963,0,0,0,23.75006,0Z"></path>
         <path d="M40.14664.85594h0m-.14658.31072,1.56485,3.31688a1.72085,1.72085,0,0,0,1.29547.97414l3.58338.54469L43.82309,8.67469a1.78219,1.78219,0,0,0-.48066,1.53211l.60968,3.71858-3.13662-1.72506a1.68845,1.68845,0,0,0-1.63082,0l-3.13666,1.725.60972-3.71855A1.78223,1.78223,0,0,0,36.177,8.67469L33.55634,6.00238l3.58341-.54469a1.7209,1.7209,0,0,0,1.29546-.97415l1.56485-3.31688m0-1.16666A.76964.76964,0,0,0,39.299.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,35.84946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,44.15065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L47.26137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L40.70114.45589A.76963.76963,0,0,0,40.00006,0Z"></path>
         <path d="M56.39664.85594h0m-.14658.31072,1.56485,3.31688a1.72085,1.72085,0,0,0,1.29547.97414l3.58338.54469L60.07309,8.67469a1.78219,1.78219,0,0,0-.48066,1.53211l.60968,3.71858-3.13662-1.72506a1.68845,1.68845,0,0,0-1.63082,0l-3.13666,1.725.60972-3.71855A1.78223,1.78223,0,0,0,52.427,8.67469L49.80634,6.00238l3.58341-.54469a1.7209,1.7209,0,0,0,1.29546-.97415l1.56485-3.31688m0-1.16666A.76964.76964,0,0,0,55.549.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,52.09946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,60.40065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L63.51137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L56.95114.45589A.76963.76963,0,0,0,56.25006,0Z"></path>
         <path d="M72.64664.85594h0m-.14658.31072,1.56485,3.31688a1.72085,1.72085,0,0,0,1.29547.97414l3.58338.54469L76.32309,8.67469a1.78219,1.78219,0,0,0-.48066,1.53211l.60968,3.71858-3.13662-1.72506a1.68845,1.68845,0,0,0-1.63082,0l-3.13666,1.725.60972-3.71855A1.78223,1.78223,0,0,0,68.677,8.67469L66.05634,6.00238l3.58341-.54469a1.7209,1.7209,0,0,0,1.29546-.97415l1.56485-3.31688m0-1.16666A.76964.76964,0,0,0,71.799.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,68.34946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,76.65065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L79.76137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L73.20114.45589A.76963.76963,0,0,0,72.50006,0Z"></path></svg></div> },
      ],
    },
    {
      id: 4,
      title: "Duration",
      sublinks: [
        { id: 41, name:"duration", typex: "radio", value: "D:L1", checkboxData: "Less than 1 hour" },
        { id: 42, name:"duration", typex: "radio", value: "D:L4", checkboxData: "1 to 4 hours" },
        { id: 43, name:"duration", typex: "radio", value: "D:L24", checkboxData: "4 hours to 1 day" },
        { id: 44, name:"duration", typex: "radio", value: "D:G24",checkboxData: "More than 1 day" },
      ],
    },
    {
      id: 5,
      title: "Specials",
      sublinks: [
        { id: 51, typex: "checkbox", value: "S:SPECIAL_OFFER", checkboxData: "Deals & Discounts" },
        { id: 52, typex: "checkbox", value: "S:FREE_CANCELLATION", checkboxData: "Free Cancellation" },
        { id: 53, typex: "checkbox", value: "S:LIKELY_TO_SELL_OUT", checkboxData: "Likely to Sell Out" },
        { id: 54, typex: "checkbox", value: "S:SKIP_THE_LINE",checkboxData: "Skip-The-Line" },
        { id: 55, typex: "checkbox", value: "S:PRIVATE_TOUR",checkboxData: "Private Tour" },
        { id: 56, typex: "checkbox", value: "S:VIATOR_EXCLUSIVE",checkboxData: "Viator Exclusive" },
        { id: 57, typex: "checkbox", value: "S:NEW_ON_VIATOR",checkboxData: "New on Viator" },
      ],
    },
  ],
  searchdata : [],
  page : 0,
  filterValues: []
}

