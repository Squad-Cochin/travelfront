//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
//    ON THE COMPONENT PAGE THAT DISPLAYS THE HOMEPAGE, THE SEARCH BAR ALLOWS THE USER TO SEARCH    //
//        FOR A LOCATION AND SELECT A START DATE. ADDITIONALLY, THE USER CAN SELECT AN END          //                                                           
//          DATE AND THE NUMBER OF ADULTS AND THEIR FUNCTIONALITIES USING THIS COMPONENT.           //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////


import React, { useEffect, useState , Fragment } from "react";
import Select, {components, MenuProps } from 'react-select';
import AsyncSelect from 'react-select/async'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//We are displaying the location search input here , We have passed values into the input component so that it can be reused.
import ButtonType from "../../Button/Button";
import Styles from "./ListingSearchbar.module.scss";
import {locationOptions} from "../../../api/locationDetails";
import locationIcon from "../../../../public/images/location_icon.svg"
import Image from "next/image";
// FUNCTION WORKOUT FOR LISTING SEARCH BAR
function ActivitySearchWidgetHome(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [searchId, setSearchId] = useState(0);
  const [childCount, setchildCount] = useState([]);
  const [childAges, setchildAges] = useState([]);
  const [children, setchildren] = useState(0);
  const [adult, setAdult] = useState(1);
  const [datePickerStartState, setdatePickerStartState] = useState(false);
  const [datePickerEndtState, setdatePickerEndState] = useState(false);
  const [travelerDropShow, settravelerDropShow] = useState(false);
  
  const { SingleValue, Option } = components;
  const [searchDetails, setsearchDetails] = useState({});
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

  useEffect(() => {
    let searchCount = JSON.parse(sessionStorage.getItem("searchdata")) || {"searchTerm": ""};
    if(searchCount.searchTerm != ""){
      setSearchTerm(searchCount.searchTerm);
      setStartDate(new Date(searchCount.startDate));
      setEndDate(new Date(searchCount.endDate));
      setAdult(searchCount.passengerDetails.adult);
    }
  }, []);

  // This function is used to fetch location based on search
  const getAPIResults = async (inputValue) => {
    if(inputValue.length >=3){
      let destinations = await locationOptions(inputValue);
      return destinations;
    }
    else{
      return [];
    }
    
  };
  
  // This function provides matching results to search bar
  const loadOptions =  async (inputValue) => 
    // perform a request
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(getAPIResults(inputValue));
      })
    });
  
  // This function executes when a value is selected from the searchbar  
  const selectOption = (e) => {
    //console.log(e)
    setSearchTerm(e.label);
    setSearchId(e.value);
    setStartDate(new Date());
    setEndDate(new Date());
    setdatePickerStartState(true)
  }
 
  // Function to add location icon to the options generated.
  const IconOption = (props) => (
      <>
        
        <Option {...props}>
            <Image src={locationIcon} width={16} height={20} /> &nbsp;
            {props.data.label}
        </Option>
      </>
  );

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
  }

  // This function is used to toggle the visibility of dropdown used to select the details of adult and children
  const setDropDownVisibility = (e) => {
    console.log(e);
    let visibility = travelerDropShow ? false : true
    console.log(visibility);
    settravelerDropShow(visibility); 
    //settravelerDropShow(true); 
  }
  return (
    <>
      <div className={`${Styles.listingSearchbar}`}>
        <Row className="g-2">
          <Col lg={5} md={12} xs={12}>
            {/*Search input*/}
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
                  //justifyContent:`space-evenly`
                 }
                ),
                menu: (baseStyles, state) => (
                  {
                  ...baseStyles,
                  zIndex: '9'
                 }
                )
              }}
              //closeMenuOnSelect={false}
              components={{Option: IconOption}}
              instanceId={`searchlocations`} 
              defaultOptions={true}
            />
          </Col>
          
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
            <Dropdown className={Styles.selecttraveller_box}  show={travelerDropShow} onToggle={setDropDownVisibility}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {adult} Adults
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {/* We are displaying this data in a dropdown. */}
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
                  <ButtonType className={`${Styles.applyButton} btntype2`} onClick={setChildAge} name="Apply" />
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col lg={1} md={3} xs={12}>
              {/* Clicking the search button will submit the data */}
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
  return widgetTemplate === "home" && <ActivitySearchWidgetHome searchData={props.searchData} setSearchData={props.setSearchData} setIsLoading={props.setIsLoading} setserachResults={props.setserachResults} setPage={props.setPage} page={props.page} setFilterData={props.setFilterData}/>;

}


export default listingSearchbar;
export { ActivitySearchWidgetHome };
