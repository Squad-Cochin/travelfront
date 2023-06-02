//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
//    ON THE COMPONENT PAGE THAT DISPLAYS THE HOMEPAGE, THE SEARCH BAR ALLOWS THE USER TO SEARCH    //
//        FOR A LOCATION AND SELECT A START DATE. ADDITIONALLY, THE USER CAN SELECT AN END          //                                                           
//          DATE AND THE NUMBER OF ADULTS AND THEIR FUNCTIONALITIES USING THIS COMPONENT.           //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////


import React, { useEffect, useState } from "react";
import Select, {components, IndicatorSeparatorProps } from 'react-select';
import AsyncSelect from 'react-select/async'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import { Multiselect } from "multiselect-react-dropdown";

// IMPORT PAGES
import ButtonType from "../../Button/Button";
import Styles from "./ListingSearchbar.module.scss";
import {locationOptions} from "../../../api/locationDetails";
import locationIcon from "../../../../public/images/location_icon.svg"

// FUNCTION WORKOUT FOR LISTING SEARCH BAR
function ActivitySearchWidgetHome(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [searchId, setSearchId] = useState(0);
  const [childCount, setchildCount] = useState([]);
  const [children, setchildren] = useState(0);
  const [adult, setAdult] = useState(1);
  const [datePickerStartState, setdatePickerStartState] = useState(false);
  const [datePickerEndtState, setdatePickerEndState] = useState(false);
  const [travelerDropShow, settravelerDropShow] = useState(false);
  const { Option } = components;
  const [searchDetails, setsearchDetails] = useState({});
  const [customerOptions, setcustomerOptions] = useState([]);
  // // PASSENGERS LIST
  // const customerOptions =[
  //   { value: 'Luis fonsi (56)', label: 'Luis fonsi (56)' },
  //   { value: 'Stive morgan (48)', label: 'Stive morgan (48)' },
  //   { value: 'John lithgow (42)', label: 'John lithgow (42)' },
  //   { value: 'Ebrahim alkazi (62)', label: 'Ebrahim alkazi (62)' },
  // ]
  // NUMBER OF ADUNT PASSENGER OPTIONS
  const sortByOptions = [
    { value: "1", label: "1" ,key:"1"},
    { value: "2", label: "2" ,key:"2"},
    { value: "3", label: "3" ,key:"3"},
    { value: "4", label: "4" ,key:"4"},
    { value: "5", label: "5" ,key:"5"},
    { value: "6", label: "6" ,key:"6"}
  ];
  // NUMBER OF CHILD PASSENGER OPTIONS
  const childcountOptions = [
    { value: "0", label: "0" ,key:"0"},
    { value: "1", label: "1" ,key:"1"},
    { value: "2", label: "2" ,key:"2"},
    { value: "3", label: "3" ,key:"3"},
    { value: "4", label: "4" ,key:"4"},

  ];
  // CHILD AGE OPTIONS
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

  useEffect(() => {
    let searchCount = JSON.parse(sessionStorage.getItem("searchdata")) || {"searchTerm": ""};
    if(searchCount.searchTerm != ""){
      // FOR SET SEARCH TERM
      setSearchTerm(searchCount.searchTerm);
      // FOR SET SEARCH Id 
      setSearchId(searchCount.searchDestinationId)
      // FOR SET START DATE
      setStartDate(new Date(searchCount.startDate));
      // FOR SET END DATE
      setEndDate(new Date(searchCount.endDate));
      // SET ADULT DATE
      setAdult(searchCount.passengerDetails.adult);
      //SET CUSTOMER OPTIONS
      setcustomerOptions(searchCount.passengerNames)

    }
  },[]);

  const indicatorSeparatorStyle = {
    alignSelf: 'stretch',
    //backgroundColor: customerOptions[2].color,
    marginBottom: 8,
    marginTop: 8,
    width: 1,
    height:32,
    borderColor: '#FF0000'
  };

  const IndicatorSeparator = (innerProps) => {
     return <span style={indicatorSeparatorStyle} {...innerProps} />;
    };

  // THIS FUNCTION IS USE TO FETCH LOCATION BASED ON SEARCH
  const getAPIResults = async (inputValue) => {
    if(inputValue.length >=3){
      let destinations = await locationOptions(inputValue);
      return destinations;
    }
    else{
      return [];
    }
  };
  
  // THIS FUNCTION PROVIDES MATCHING RESULT TO SEARCH RESULT
  const loadOptions =  async (inputValue) => 
    // perform a request
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(getAPIResults(inputValue));
      })
    });
  
  // THIS FUNCTION EXICUTES WHEN A VALUE IS SELECTED FROM THE SEARCH BAR  
  const selectOption = (e) => {
    setSearchTerm(e.label);
    setSearchId(e.value);
    setStartDate(new Date());
    setEndDate(new Date());
    setdatePickerStartState(true)
  }
 
  // FUNCTION TO ADD LOCATION ICON TO THE OPTIONS GENERATED.
  const IconOption = (props) => (
    <>  
      <Option {...props}>
          <Image alt="Location Icon" src={locationIcon} width={16} height={20} /> &nbsp;
          {props.data.label}
      </Option>
    </>
  );

  // FUNCTION TO HANDLE NUMBER OF CHILD
  const handleCountChild = (e) => {
    setchildren(e.value);
    const elements = Array.from({ length: e.value }, (_, index) => {
      return index;
    });
    setchildCount(elements)
  }

  // FUNCTION TO HANDLE CHILD AGES
  const handleCountChildAges = (e) => {
    
  }

  // FUNCTION TO HANDLE ADULT COUNT
  const handleAdultCount = (e) => {
    setAdult(e.value);
  }

  // FUNCTION TO HANDLE TRAVELLER DETAILS 
  const setTravellers = (e) => {
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

  // FUNCTION FOR SEARCH ON THE BASIS OF DATA IN THE SEARCH INPUT  
  const handleClick = async (e) => {
    props.setIsLoading(true);
    let searchData = {};
    searchData.provider = ["VTR"]
    searchData.searchTerm = searchTerm;
    searchData.searchDestinationId = searchId;
    searchData.startDate = startDate.toISOString().slice(0, 10);
    searchData.endDate = endDate.toISOString().slice(0, 10);
    searchData.numberOfPerson = parseInt(searchDetails.adult) + parseInt(searchDetails.children);
    searchData.passengerDetails = {
      adult : adult,
      children: children
    }
    sessionStorage.setItem("searchdata", JSON.stringify(searchData));
    props.setFilterData([]);
    props.page == 0 ? props.setPage(1) : props.setPage(0);
    props.setSearchFromMoonstride(false);
  }

  // THIS FUNCTION IS USED TO TOGLE THE VISIBILITY OF DROPDOWN USED TO SELET DETAILS OF ADULT AND CHILD
  const setDropDownVisibility = (e) => {
    let visibility = travelerDropShow ? false : true
    settravelerDropShow(visibility); 
  }

  return (
    <>
      <div className={`${Styles.listingSearchbar}`}>
        <Row className="g-2">
          {/*SEARCH INPUT*/}
          <Col lg={5} md={12} xs={12}>
             <AsyncSelect
              className={`search_formbox ${Styles.searchInput}`}
              loadOptions={loadOptions}
              placeholder= "Search..."
              onChange={selectOption}
              cacheOptions={true}
              styles={{
                control: (baseStyles, state) => (
                  {
                  ...baseStyles,
                  minHeight: `50px`,
                  "&:hover": {borderColor: "#000000"},
                  borderColor: state.isSelected  ? "#000" : "#999",
                  boxShadow: state.isSelected  ? "0 0 0 1px #000000" : "",
                  backgroundColor: `hsl(0deg 0% 100% / 0%)`,
                  paddingLeft: '2rem'    
                 }
                ),
                indicatorsContainer: (baseStyles, state) => (
                  {
                  ...baseStyles,
                  display: `none`,    
                 }
                ),
                option: (baseStyles, state) => (
                  {
                  ...baseStyles,
                  display: 'flex',
                  zIndex: '2'
                 }
                ),
                menu: (baseStyles, state) => (
                  {
                  ...baseStyles,
                  zIndex: '9'
                 }
                )
              }}
              components={{Option: IconOption}}
              instanceId={`searchlocations1`}
              defaultOptions={[{"label": searchTerm, "value": searchId}]}
              value={searchId > 0 ? {"label": searchTerm, "value": searchId} : ""}
            /> 
          </Col>
          
          {/*FROM DATE*/}
          <Col lg={2} md={3} xs={6}>
            <div className="position-relative">
              <div className={Styles.date_fromtext}>From</div>
              <label>
                {/* From date */}
                <DatePicker
                  dateFormat="MMM dd"
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date); 
                    setEndDate(date);
                    setdatePickerStartState(false);
                    setdatePickerEndState(true);
                  }}
                  onFocus={() => {
                    setdatePickerStartState(true);
                  }}
                  onBlur={() => {
                    setdatePickerStartState(false);
                  }}          
                  open={datePickerStartState}
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate1}
                />
              </label>
            </div>
          </Col>

          {/*TO DATE*/}
          <Col lg={2} md={3} xs={6}>
            <div className="position-relative">
              <div className={Styles.date_fromtext}>To</div>
              <label>
                {/* To date */}
                <DatePicker
                  dateFormat="MMM dd"
                  selected={endDate}
                  onChange={(date) => {
                    setEndDate(date)
                    setdatePickerEndState(false);
                    settravelerDropShow(true);
                  }}
                  onFocus={() => {
                    setdatePickerEndState(true);
                  }}
                  onBlur={() => {
                    setdatePickerEndState(false);
                  }} 
                  open={datePickerEndtState}
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  label=""
                />
              </label>
            </div>
          </Col>

          {/* Adult code comes here */}
          <Col lg={2} md={3} xs={12}>
            {!props.personsearch ? 
            <Dropdown className={Styles.selecttraveller_box}  show={travelerDropShow} onToggle={setDropDownVisibility}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {adult} Adults
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Row className="g-3">
                  <Col xs={6}>
                    <span className={Styles.label}>Adult</span>
                    <Select class="d-inline-block sort-select" defaultValue={sortByOptions[(adult-1)]} onChange={handleAdultCount} options={sortByOptions}/>
                  </Col>
                  <Col xs={6}>
                    <span className={Styles.label}>Children</span>
                    <Select class="d-inline-block sort-select" onChange={handleCountChild} defaultValue={childcountOptions[0]} options={childcountOptions}/>
                  </Col>
                  {childCount.map((item, index) => {
                    return(
                      <Col xs={6} className="mt-3 custom" key={index}>
                        <span className={Styles.label}>Child age </span>
                        <Select className="d-inline-block sort-select select-age" onChange={handleCountChildAges} options={childageOptions}/>
                      </Col>
                    )
                  })}
                </Row>
                <div className="mt-3">
                  <ButtonType className={`${Styles.applyButton} btntype2`} onClick={setTravellers} name="Apply" />
                </div>
              </Dropdown.Menu>
            </Dropdown> : 
            <Select
            closeMenuOnSelect={false}
            components={{ IndicatorSeparator }} 
            styles={{
              control: (baseStyles, state) => ( 
              {
                ...baseStyles,
                borderColor: '#999999'
              }),
              multiValueLabel: (baseStyles, state) => ( 
                {
                  ...baseStyles,
                  maxWidth: "40px",
                })
            }}         
            isMulti
            options={customerOptions}
          />}
            {/* <Dropdown className={Styles.selecttraveller_box}  show={travelerDropShow} onToggle={setDropDownVisibility}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {adult} Adults
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Row className="g-3">
                  <Col xs={6}>
                    <span className={Styles.label}>Adult</span>
                    <Select class="d-inline-block sort-select" defaultValue={sortByOptions[(adult-1)]} onChange={handleAdultCount} options={sortByOptions}/>
                  </Col>
                  <Col xs={6}>
                    <span className={Styles.label}>Children</span>
                    <Select class="d-inline-block sort-select" onChange={handleCountChild} defaultValue={childcountOptions[0]} options={childcountOptions}/>
                  </Col>
                  {childCount.map((item, index) => {
                    return(
                      <Col xs={6} className="mt-3 custom" key={index}>
                        <span className={Styles.label}>Child age </span>
                        <Select className="d-inline-block sort-select select-age" onChange={handleCountChildAges} options={childageOptions}/>
                      </Col>
                    )
                  })}
                </Row>
                <div className="mt-3">
                  <ButtonType className={`${Styles.applyButton} btntype2`} onClick={setTravellers} name="Apply" />
                </div>
              </Dropdown.Menu>
            </Dropdown> */}
            {/* <Select
            closeMenuOnSelect={false}
            components={{ IndicatorSeparator }} 
            styles={{
              control: (baseStyles, state) => ( 
              {
                ...baseStyles,
                borderColor: '#999999'
              }),
              multiValueLabel: (baseStyles, state) => ( 
                console.log(baseStyles),
                {
                  ...baseStyles,
                  maxWidth: "40px",
                })
            }}         
            isMulti
            options={customerOptions}
          /> */}
          </Col>

          {/* Clicking the search button will submit the data */}
          <Col lg={1} md={3} xs={12}>
            <ButtonType onClick={handleClick} className={`${Styles.searchButton} btntype1 w-100`} name="Search" />
          </Col>
        </Row>
      </div>
    </>
  );
}

// FUNCTION FOR LISTING SEARCH BAR CALL
function listingSearchbar(props) {
  const widgetTemplate = props.template;
  return widgetTemplate === "home" && <ActivitySearchWidgetHome searchdata={props.searchdata} setsearchdata={props.setsearchdata} setIsLoading={props.setIsLoading} setserachResults={props.setserachResults} setPage={props.setPage} page={props.page} setFilterData={props.setFilterData} setSearchFromMoonstride={props.setSearchFromMoonstride} personsearch={props.personsearch}/>;

}

export default listingSearchbar;
export { ActivitySearchWidgetHome };
