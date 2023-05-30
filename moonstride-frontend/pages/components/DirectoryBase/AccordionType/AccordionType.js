///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
//          FILE FOR SHOWING BASIC DETAILS AT THE BOTTAM OF DETAILS PAGE                     //
//                                IN A DROPDOWN                                              //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Styles from "./AccordionType.module.scss";
import DatePicker from "react-datepicker";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import { Multiselect } from "multiselect-react-dropdown";
import Select,{components} from 'react-select';
import makeAnimated from 'react-select/animated';

import ButtonType from "../../Button/Button";

// FUNCTION FOR ACCORDIAN TYPE COMPONENT
function AccordionType(props) {

  const animatedComponents = makeAnimated();
  const [childCount, setchildCount] = useState([]);
  const [searchDetails, setsearchDetails] = useState({});
  const [children, setchildren] = useState(0);
  const [adult, setAdult] = useState(1);


  const timeoptions = [
    { value: '10.00 am', label: '10.00 am' },
    { value: '10.30 am', label: '10.30 am' },
    { value: '12.30 am', label: '12.30 am' }
  ]

  const languageoptions = [
    { value: 'EN', label: 'EN' },
    { value: 'SP', label: 'SP' },
    { value: 'GER', label: 'GER' }
  ]

  const customerOptions =[
    { value: 'Luis fonsi (56)', label: 'Luis fonsi (56)' },
    { value: 'Stive morgan (48)', label: 'Stive morgan (48)' },
    { value: 'John lithgow (42)', label: 'John lithgow (42)' },
    { value: 'Ebrahim alkazi (62)', label: 'Ebrahim alkazi (62)' },
  ]


  const sortByOptions = [
    { value: "1", label: "1" ,key:"1"},
    { value: "2", label: "2" ,key:"2"},
    { value: "3", label: "3" ,key:"3"},
    { value: "4", label: "4" ,key:"4"},
    { value: "5", label: "5" ,key:"5"},
    { value: "6", label: "6" ,key:"6"}
  ];
  const childcountOptions = [
    { value: "0", label: "0" ,key:"0"},
    { value: "1", label: "1" ,key:"1"},
    { value: "2", label: "2" ,key:"2"},
    { value: "3", label: "3" ,key:"3"},
    { value: "4", label: "4" ,key:"4"},

  ];
  const childageOptions = [
    { value: "1", label: "1" ,key:"1"},
    { value: "2", label: "2" ,key:"2"},
    { value: "3", label: "3" ,key:"3"},
    { value: "4", label: "4" ,key:"4"},
    { value: "5", label: "5" ,key:"5"},
    { value: "6", label: "6" ,key:"6"},
    { value: "7", label: "7" ,key:"7"},
    { value: "8", label: "8" ,key:"8"},
    { value: "9", label: "9" ,key:"9"},
    { value: "10", label: "10" ,key:"10"},
    { value: "11", label: "11" ,key:"11"},
    { value: "12", label: "12" ,key:"12"}

  ]

  const [language] = useState([
    { code: 'En', title: 'English'},
    { code: 'SP', title: 'Spanish'},
    { code: 'JP', title: 'Jappanies'}
  ]);
  const [toggleContents, setToggleContents] = useState("Select Language");
  const [selectedCountry, setSelectedCountry] = useState();


  const handleCountChild = (e) => {
    setchildren(e.value);
    const elements = Array.from({ length: e.value }, (_, index) => {
      return index;
    });
    setchildCount(elements)
  }
  
  const handleCountChildAges = (e) => {
    
  }

  const handleAdultCount = (e) => {
    setAdult(e.value);
  }

  const setChildAge = (e) => {
    let detailPersons = {};
    detailPersons.adult = adult;
    detailPersons.children = children;
    detailPersons.childAge = [];
    let ages = document.querySelectorAll(".select-age");
    ages.forEach((item) => {
      detailPersons.childAge.push(item.innerText)
    })

    var parent = document.querySelector(".dropdown-menu");
    parent.classList.remove("show");

    document.getElementById('dropdown-basic').innerText = `${adult} Adults`;
    setsearchDetails(detailPersons);
  }
  
  const inclusions = props.productDataFull.inclusions
  const exclusions = props.productDataFull.exclusions
  const additionalInfo = props.productDataFull.additionalInformation
  var inclusionsHtml = `<ul class="aminities">`;
  var additionalInfoHtml = `<ul class="aminities">`;
  inclusions.forEach(async (element) => {
    if(element){
      inclusionsHtml += `<li class="inclusiveitem">${element}</li>`
    }
  });
  
  exclusions.forEach(async (element) => {
    if(element){
      inclusionsHtml += `<li class="exclusiveitem">${element}</li>`
    }
  });  
  additionalInfo.forEach(async (element) => {
    additionalInfoHtml += `<li class="inclusiveitem">${element}</li>`
  });

inclusionsHtml += `</u>`;
additionalInfoHtml += `</u>`;

  const faqsList = [
    {
      Key: 0,
      header:
        "Double Quad Bike & BBQ Dinner",
      price:
        "$150.00", 
      bodycon: 
        "The Golden Triangle is so called because of the triangular shape formed by the locations of New Delhi, Agra and Rajasthan on a map. The trips usually start in Delhi moving south to the site of Taj Mahal at Agra, then west, to the desert landscapes of Rajasthan. ",
      inclusionsHtml,
    },
    {
      Key: 1,
      header:
      "Axe Throwing in Indianapolis",
      price:
      "$150.00", 
      bodycon: 
        "An early morning adventure to watch Calcutta wake up. Experience Calcutta like Local and not just a tourist. Try different modes of transport, Local spots and blend into Calcutta's narrative just like a Local. This tour is not the usual Heritage walk but an An ",
        additionalInfoHtml,
    },
  
  ];
  const myList = (props.faqsList ? faqsList : faqsList).map((faqlist,index) => (
    <Accordion.Item  key={index} className={Styles.accordionPlus} eventKey={faqlist.Key}>
      <Accordion.Header>  
          <div className={Styles.Availability}>        
                   <Row>
                        <Col xs={6} md={7}>
                            <div className={Styles.title}>{faqlist.header}</div>
                        </Col>
                       
                        <Col xs={6} md={2}>
                          <div className={Styles.price}>
                            <span className={Styles.value}> {faqlist.price}</span>
                          </div>
                        </Col>

                        <Col xs={6} md={3}> 
                        
                          <Button className={Styles.btntype1} variant="primary"> Choose</Button>
                          
                        </Col>
                  </Row>
           </div>
      </Accordion.Header>
      <Accordion.Body>
            <div className={Styles.DetailsContent}> {faqlist.bodycon}</div>
            <div className={Styles.radioinnerBox_bottom}>
                      <Row>
                            <Col xs={6} md={2}>
                              <div className={Styles.event_date}>
                                  <div className="position-relative">
                                  <div className={Styles.date_fromtext}>
                                  <label>
                                    {/* From date */}
                                    <DatePicker
                                      dateFormat="MMM dd"
                                      // selected={startDate}
                                      // onChange={(date) => {
                                      //                 setStartDate(date); 
                                      //                 setEndDate(date);
                                      //           }}
                                      // selectsStart
                                      // startDate={startDate}
                                      // endDate={startDate}
                                      // minDate={startDate}
                                    />
                                  </label>
                                  </div>
                                </div>
                              </div>
                            </Col>           

                    <Col xs={6} md={4}> 
                       <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          placeholder={'Select Passengers list'}
                          // defaultValue={[colourOptions[4], colourOptions[5]]}
                          isMulti
                          options={customerOptions}
                        />
                   
                    </Col>

                    <Col xs={6} md={2}> 
                    <Select options={languageoptions} />
                      
                    {/* <div className={Styles.selecttraveller_box}>
                        <Dropdown
                           onSelect={eventKey => {
                            const { code, title } = language.find(({ code }) => eventKey === code);

                            setSelectedCountry(eventKey);
                            setToggleContents(<> {title}</>);
                          }}
                          >
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {toggleContents}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            {language.map(({ code, title }) => (
                               <Dropdown.Item key={code} eventKey={code}> {title}</Dropdown.Item>
                             ))}
                            </Dropdown.Menu>
                          </Dropdown>
                      </div> */}


                    </Col>

                    <Col xs={6} md={2}> 
                       <Select options={timeoptions} />
                      
                      </Col>


                    <Col xs={6} md={2}>
                              <div className={Styles.radioSubdesc}>
                                <button className={Styles.btntype1}>Book</button>

                              </div>
                     </Col> 
                     </Row>

                 </div>
      </Accordion.Body>
    </Accordion.Item>
  ));
  return (
    <Accordion
      defaultActiveKey="0"
      flush
      className={`${Styles.accordiontype} ${props.className}`}
    >
      {myList}
    </Accordion>
  );
}
AccordionType.defaultProps = {
  className: "",
  productDataFull: {
      inclusions: [],
      exclusions: [],
      additionalInformation: []
  }
};
export default AccordionType;
