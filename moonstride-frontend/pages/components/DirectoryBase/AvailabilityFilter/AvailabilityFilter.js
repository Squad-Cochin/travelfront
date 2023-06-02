///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
//               FILE FOR APPLAY AVAILABILITY FILTERS BEFOR ADD TO CART                      //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////


import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select,{components} from 'react-select';
import makeAnimated from 'react-select/animated';

// IMPORT PAGES
import ButtonType from "../../Button/Button";
import { checkAvailability } from "../../../api/tourPackages";
import Styles from "./AvailabilityFilter.module.scss";

// DUMMY CUSTOMER OPTIONS
const customerOptions =[
    { value: 'Luis fonsi (56)', label: 'Luis fonsi (56)' },
    { value: 'Stive morgan (48)', label: 'Stive morgan (48)' },
    { value: 'John lithgow (42)', label: 'John lithgow (42)' },
    { value: 'Ebrahim alkazi (62)', label: 'Ebrahim alkazi (62)' },
]
// NUMBER OF CHILD PASSENGER OPTIONS
const childcountOptions = [
    { value: "0", label: "0" ,key:"0"},
    { value: "1", label: "1" ,key:"1"},
    { value: "2", label: "2" ,key:"2"},
    { value: "3", label: "3" ,key:"3"},
    { value: "4", label: "4" ,key:"4"},

];
// NUMBER OF ADUNT PASSENGER OPTIONS
const sortByOptions = [
    { value: "1", label: "1" ,key:"1"},
    { value: "2", label: "2" ,key:"2"},
    { value: "3", label: "3" ,key:"3"},
    { value: "4", label: "4" ,key:"4"},
    { value: "5", label: "5" ,key:"5"},
    { value: "6", label: "6" ,key:"6"}
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

// DEFAULT FUNCTION FOR AVAILABILITY FILTER COMPONENT
function AvailabilityFilter(props) {
    const [childCount, setchildCount] = useState([]);
    const [searchDetails, setsearchDetails] = useState({});
    const animatedComponents = makeAnimated();
    const [languageValue, setLanguageStateValue] = useState({});
    const [timeValue, setTimeStateValue] = useState();
    const [addingToCart, setAddingToCart] = useState(false);
    const [children, setchildren] = useState(0);
    const [adult, setAdult] = useState(1);
    const [availabilityDate, setAvailabilityDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        let searchCount = JSON.parse(sessionStorage.getItem("searchdata")) || {"searchTerm": ""};
        if(searchCount.searchTerm != ""){
            setStartDate(new Date(searchCount.startDate));
            setAvailabilityDate(new Date(searchCount.startDate));
            setEndDate(new Date(searchCount.endDate));
            setAdult(searchCount.passengerDetails.adult);
            setchildren(searchCount.passengerDetails.children);
        }
    },[])

    // THIS FUNCTION IS USE TO HANDLE ADULT COUNT
    const handleAdultCount = (e) => {
        setAdult(e.value);
    }

    // THIS FUNCTION IS USE TO HANDLE CHILD COUNT
    const handleCountChild = (e) => {
        setchildren(e.value);
        const elements = Array.from({ length: e.value }, (_, index) => {
            return index;
        });
        setchildCount(elements)
    }

    // THIS FUNCTION IS USE TO CHILD AGES
    const handleCountChildAges = (e) => {
        
    }

    // THIS FUNCTION IS USE TO SET TRAVELLERS WHILE SELECT ADULT AND CHILD
    const setTravellers  = (e) => {
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

    //FUNCTION TO SET LANGUAGE VALUE
    const setLanguageValue = (e) => {
        setLanguageStateValue(e.value);
    }
    
    //FUNCTION TO SET TIME VALUE
    const setTimeValue = (e) => {
        setTimeStateValue(e.value);
    }

    // FUNCTION TO ADD PRODUCT IN TO CART
    const addProductCart = async(e) => {
        props.propData.setbookingLoader(true);
        let cart = {};
        let availabilitydetaills = props.propData.availabilty.bookableItems;
        let cartDetails = JSON.parse(sessionStorage.getItem("cart")) || [];
        let searchData = {};
            searchData.provider = availabilitydetaills[e.target.value].provider;
            searchData.startDate = availabilityDate.toISOString().slice(0, 10);
            searchData.passengerDetails = {
                adult : adult,
                children: children
            }
        let availabilityDetails = await checkAvailability(searchData, availabilitydetaills[e.target.value].productCode);
        if(availabilityDetails.bookableItems){
            if(availabilityDetails.bookableItems[0].available){
                const day = availabilityDate.getDate();
                const month = availabilityDate.getMonth() + 1; // Months are zero-indexed
                const year = availabilityDate.getFullYear();
                const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                const formattedDate = `${day} ${monthNames[month]} ${year}`;
                //Adding Cart details to session storage after checking availability.
                cart.orderId = Math.random().toString(36).substring(2, 8);
                cart.provider = availabilitydetaills[e.target.value].provider;
                cart.productCode = availabilitydetaills[e.target.value].productCode;
                cart.productOptionCode = availabilitydetaills[e.target.value].productOptionCode;
                cart.startDate = formattedDate;
                cart.currency = availabilitydetaills[e.target.value].currency;
                cart.startingTime = timeValue;
                cart.title = availabilitydetaills[e.target.value].title;
                cart.duration = props.propData.duration;
                cart.passengerDetails = {
                adult : adult,
                child : children
                }
                cart.languageGuide = {
                languageGuide:{
                    type:"AUDIO",
                    language:languageValue
                }
                }
                cartDetails.push(cart);
                sessionStorage.setItem("cart", JSON.stringify(cartDetails));
                props.propData.setcartdata(cartDetails);
                props.propData.setmodalshow(false);
            } else {
                props.propData.setbookingerror([e.target.value]);
                props.propData.setbookingerrormsg(availabilityDetails.bookableItems[0].unavailableReason)
            }
        } else {
            props.propData.setbookingerror([e.target.value]);
            props.propData.setbookingerrormsg(availabilityDetails.Error.Message)
        }
        props.propData.setbookingLoader(false);
    }
    
    return(
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
                                    selected={availabilityDate}
                                    onChange={(date) => {
                                        setAvailabilityDate(date); 
                                    }}
                                    selectsStart
                                    startDate={startDate}
                                    maxDate={endDate}
                                    minDate={startDate}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </Col>           
                <Col xs={6} md={4}>
                    {props.propData.personsearch ? 
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            placeholder={'Select Passengers list'}
                            isMulti
                            options={customerOptions}
                        /> : 
                        <Dropdown className={Styles.selecttraveller_box}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {adult} Adults
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Row className="g-3">
                                    <Col xs={6}>
                                        <span className={Styles.label}>Adult</span>
                                        <Select class="d-inline-block sort-select" defaultValue={sortByOptions[adult-1]} onChange={handleAdultCount} options={sortByOptions}/>
                                    </Col>
                                    <Col xs={6}>
                                        <span className={Styles.label}>Children</span>
                                        <Select class="d-inline-block sort-select" onChange={handleCountChild} defaultValue={childcountOptions[children]} options={childcountOptions}/>
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
                        </Dropdown>
                    }    
                </Col>
                <Col xs={6} md={2}> 
                    <Select 
                        placeholder="Language"
                        options={props.faqlist.languageGuides[0].languages}
                        onChange={setLanguageValue}
                    />
                </Col>
                <Col xs={6} md={2}> 
                    <Select 
                        placeholder="Time"
                        options={props.faqlist.startTime}
                        onChange={setTimeValue} 
                    />
                </Col>
                <Col xs={6} md={2}>
                    <div className={Styles.radioSubdesc}>	
                        <button className={ props.faqlist.available ? Styles.btntype1 : Styles.btntype_inactive} disabled={props.faqlist.available ? false : true} value={props.index } onClick={addProductCart}>{addingToCart ? "Added" : "Book"}</button>	
                    </div>
                </Col> 
            </Row>
        </div>
    )
}

// FUNCTION FOR AVAILABILITY FILTER WITHOUT TIME COMPONENT
function WithoutTime(props) {
    const [childCount, setchildCount] = useState([]);
    const [searchDetails, setsearchDetails] = useState({});
    const animatedComponents = makeAnimated();
    const [languageValue, setLanguageStateValue] = useState({});
    const [timeValue, setTimeStateValue] = useState();
    const [addingToCart, setAddingToCart] = useState(false);
    const [children, setchildren] = useState(0);
    const [adult, setAdult] = useState(1);
    const [availabilityDate, setAvailabilityDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        let searchCount = JSON.parse(sessionStorage.getItem("searchdata")) || {"searchTerm": ""};
        if(searchCount.searchTerm != ""){
            setStartDate(new Date(searchCount.startDate));
            setAvailabilityDate(new Date(searchCount.startDate));
            setEndDate(new Date(searchCount.endDate));
            setAdult(searchCount.passengerDetails.adult);
            setchildren(searchCount.passengerDetails.children);
        }
    },[])

    // THIS FUNCTION IS USE TO HANDLE ADULT COUNT
    const handleAdultCount = (e) => {
        setAdult(e.value);
    }

    // THIS FUNCTION IS USE TO HANDLE CHILD COUNT
    const handleCountChild = (e) => {
        setchildren(e.value);
        const elements = Array.from({ length: e.value }, (_, index) => {
            return index;
        });
        setchildCount(elements)
    }

    // THIS FUNCTION IS USE TO CHILD AGES
    const handleCountChildAges = (e) => {
        
    }

    // THIS FUNCTION IS USE TO SET TRAVELLERS WHILE SELECT ADULT AND CHILD
    const setTravellers  = (e) => {
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

    //FUNCTION TO SET LANGUAGE VALUE
    const setLanguageValue = (e) => {
        setLanguageStateValue(e.value);
    }

    // FUNCTION TO ADD PRODUCT IN TO CART
    const addProductCart = async(e) => {
        props.propData.setbookingLoader(true);
        let cart = {};
        let availabilitydetaills = props.propData.availabilty.bookableItems;
        let cartDetails = JSON.parse(sessionStorage.getItem("cart")) || [];
        let searchData = {};
            searchData.provider = availabilitydetaills[e.target.value].provider;
            searchData.startDate = availabilityDate.toISOString().slice(0, 10);
            searchData.passengerDetails = {
                adult : adult,
                children: children
            }
        let availabilityDetails = await checkAvailability(searchData, availabilitydetaills[e.target.value].productCode);
        if(availabilityDetails.bookableItems){
            if(availabilityDetails.bookableItems[0].available){
                const day = availabilityDate.getDate();
                const month = availabilityDate.getMonth() + 1; // Months are zero-indexed
                const year = availabilityDate.getFullYear();
                const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                const formattedDate = `${day} ${monthNames[month]} ${year}`;
        
                //Adding Cart details to session storage after checking availability.
                cart.orderId = Math.random().toString(36).substring(2, 8);
                cart.provider = availabilitydetaills[e.target.value].provider;
                cart.productCode = availabilitydetaills[e.target.value].productCode;
                cart.productOptionCode = availabilitydetaills[e.target.value].productOptionCode;
                cart.startDate = formattedDate;
                cart.currency = availabilitydetaills[e.target.value].currency;
                cart.startingTime = timeValue;
                cart.title = availabilitydetaills[e.target.value].title;
                cart.duration = props.propData.duration;
                cart.passengerDetails = {
                    adult : adult,
                    child : children
                }
                cart.languageGuide = {
                    languageGuide:{
                        type:"AUDIO",
                        language:languageValue
                    }
                }
                cartDetails.push(cart);
                sessionStorage.setItem("cart", JSON.stringify(cartDetails));
                props.propData.setcartdata(cartDetails);
                props.propData.setmodalshow(false);
            } else {
                props.propData.setbookingerror([e.target.value]);
                props.propData.setbookingerrormsg(availabilityDetails.bookableItems[0].unavailableReason)
            }
        } else {
            props.propData.setbookingerror([e.target.value]);
            props.propData.setbookingerrormsg(availabilityDetails.Error.Message)
        }
        props.propData.setbookingLoader(false);
    }

    return(
        <div className={Styles.radioinnerBox_bottom}>
            <Row>
                <Col xs={6} md={3}>
                    <div className={Styles.event_date}>
                        <div className="position-relative">
                            <div className={Styles.date_fromtext}>
                                <label>
                                    {/* From date */}
                                    <DatePicker
                                    dateFormat="MMM dd"
                                    selected={availabilityDate}
                                    onChange={(date) => {
                                        setAvailabilityDate(date); 
                                    }}
                                    selectsStart
                                    startDate={startDate}
                                    maxDate={endDate}
                                    minDate={startDate}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </Col>           
                <Col xs={6} md={4}>
                    {props.propData.personsearch ? 
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            placeholder={'Select Passengers list'}
                            isMulti
                            options={customerOptions}
                        /> : 
                        <Dropdown className={Styles.selecttraveller_box}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {adult} Adults
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Row className="g-3">
                                    <Col xs={6}>
                                        <span className={Styles.label}>Adult</span>
                                        <Select class="d-inline-block sort-select" defaultValue={sortByOptions[adult-1]} onChange={handleAdultCount} options={sortByOptions}/>
                                    </Col>
                                    <Col xs={6}>
                                        <span className={Styles.label}>Children</span>
                                        <Select class="d-inline-block sort-select" onChange={handleCountChild} defaultValue={childcountOptions[children]} options={childcountOptions}/>
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
                        </Dropdown>
                    }     
                </Col>
                <Col xs={6} md={3}> 
                    <Select 
                        placeholder="Language"
                        options={props.faqlist.languageGuides[0].languages}
                        onChange={setLanguageValue}
                    />
                </Col>
                <Col xs={6} md={2}>
                    <div className={Styles.radioSubdesc}>	
                        <button className={ props.faqlist.available ? Styles.btntype1 : Styles.btntype_inactive} disabled={props.faqlist.available ? false : true} value={props.index } onClick={addProductCart}>{addingToCart ? "Added" : "Book"}</button>	
                    </div>
                </Col> 
            </Row>
        </div>
    )
    
}

// FUNCTION FOR AVAILABILITY FILTER WITHOUT LANGUAGE COMPONENT
function WithoutLanguage(props) {
    const [childCount, setchildCount] = useState([]);
    const [searchDetails, setsearchDetails] = useState({});
    const animatedComponents = makeAnimated();
    const [languageValue, setLanguageStateValue] = useState({});
    const [timeValue, setTimeStateValue] = useState();
    const [addingToCart, setAddingToCart] = useState(false);
    const [children, setchildren] = useState(0);
    const [adult, setAdult] = useState(1);
    const [availabilityDate, setAvailabilityDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        let searchCount = JSON.parse(sessionStorage.getItem("searchdata")) || {"searchTerm": ""};
        if(searchCount.searchTerm != ""){
            setStartDate(new Date(searchCount.startDate));
            setAvailabilityDate(new Date(searchCount.startDate));
            setEndDate(new Date(searchCount.endDate));
            setAdult(searchCount.passengerDetails.adult);
            setchildren(searchCount.passengerDetails.children);
            //handleCountChild(searchCount.passengerDetails.children);
        }
    },[])

    // THIS FUNCTION IS USE TO HANDLE ADULT COUNT
    const handleAdultCount = (e) => {
        setAdult(e.value);
    }

    // THIS FUNCTION IS USE TO HANDLE CHILD COUNT
    const handleCountChild = (e) => {
        setchildren(e.value);
        const elements = Array.from({ length: e.value }, (_, index) => {
            return index;
        });
        setchildCount(elements)
    }

    // THIS FUNCTION IS USE TO CHILD AGES
    const handleCountChildAges = (e) => {
        
    }

    // THIS FUNCTION IS USE TO SET TRAVELLERS WHILE SELECT ADULT AND CHILD
    const setTravellers  = (e) => {
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
    
    //FUNCTION TO SET TIME VALUE
    const setTimeValue = (e) => {
        setTimeStateValue(e.value);
    }
    
    // FUNCTION TO ADD PRODUCT IN TO CART
    const addProductCart = async(e) => {
        props.propData.setbookingLoader(true);
        let cart = {};
        let availabilitydetaills = props.propData.availabilty.bookableItems;
        let cartDetails = JSON.parse(sessionStorage.getItem("cart")) || [];
        let searchData = {};
        searchData.provider = availabilitydetaills[e.target.value].provider;
        searchData.startDate = availabilityDate.toISOString().slice(0, 10);
        searchData.passengerDetails = {
                adult : adult,
                children: children
        }
        let availabilityDetails = await checkAvailability(searchData, availabilitydetaills[e.target.value].productCode);
        if(availabilityDetails.bookableItems){
            if(availabilityDetails.bookableItems[0].available){
                const day = availabilityDate.getDate();
                const month = availabilityDate.getMonth() + 1; // Months are zero-indexed
                const year = availabilityDate.getFullYear();
                const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                const formattedDate = `${day} ${monthNames[month]} ${year}`;
        
                //Adding Cart details to session storage after checking availability.
                cart.orderId = Math.random().toString(36).substring(2, 8);
                cart.provider = availabilitydetaills[e.target.value].provider;
                cart.productCode = availabilitydetaills[e.target.value].productCode;
                cart.productOptionCode = availabilitydetaills[e.target.value].productOptionCode;
                cart.startDate = formattedDate;
                cart.currency = availabilitydetaills[e.target.value].currency;
                cart.startingTime = timeValue;
                cart.title = availabilitydetaills[e.target.value].title;
                cart.duration = props.propData.duration;
                cart.passengerDetails = {
                    adult : adult,
                    child : children
                }
                cart.languageGuide = {
                    languageGuide:{
                        type:"AUDIO",
                        language:languageValue
                    }
                }
                cartDetails.push(cart);
                sessionStorage.setItem("cart", JSON.stringify(cartDetails));
                props.propData.setcartdata(cartDetails);
                props.propData.setmodalshow(false);
            } else {
                props.propData.setbookingerror([e.target.value]);
                props.propData.setbookingerrormsg(availabilityDetails.bookableItems[0].unavailableReason)
            }
        } else {
            props.propData.setbookingerror([e.target.value]);
            props.propData.setbookingerrormsg(availabilityDetails.Error.Message)
        }
        props.propData.setbookingLoader(false);
    }

    return(
        <div className={Styles.radioinnerBox_bottom}>
            <Row>
                <Col xs={6} md={3}>
                    <div className={Styles.event_date}>
                        <div className="position-relative">
                            <div className={Styles.date_fromtext}>
                                <label>
                                    {/* From date */}
                                    <DatePicker
                                    dateFormat="MMM dd"
                                    selected={availabilityDate}
                                    onChange={(date) => {
                                        setAvailabilityDate(date); 
                                    }}
                                    selectsStart
                                    startDate={startDate}
                                    maxDate={endDate}
                                    minDate={startDate}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </Col>           
                <Col xs={6} md={4}>
                    {props.propData.personsearch ? 
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            placeholder={'Select Passengers list'}
                            isMulti
                            options={customerOptions}
                        /> : 
                        <Dropdown className={Styles.selecttraveller_box}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {adult} Adults
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Row className="g-3">
                                <Col xs={6}>
                                    <span className={Styles.label}>Adult</span>
                                    <Select class="d-inline-block sort-select" defaultValue={sortByOptions[adult-1]} onChange={handleAdultCount} options={sortByOptions}/>
                                </Col>
                                <Col xs={6}>
                                    <span className={Styles.label}>Children</span>
                                    <Select class="d-inline-block sort-select" onChange={handleCountChild} defaultValue={childcountOptions[children]} options={childcountOptions}/>
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
                    </Dropdown>
                    }  
                </Col>
                <Col xs={6} md={3}> 
                    <Select 
                        placeholder="Time"
                        options={props.faqlist.startTime}
                        onChange={setTimeValue} 
                    />
                </Col>
                <Col xs={6} md={2}>
                    <div className={Styles.radioSubdesc}>	
                        <button className={ props.faqlist.available ? Styles.btntype1 : Styles.btntype_inactive} disabled={props.faqlist.available ? false : true} value={props.index } onClick={addProductCart}>{addingToCart ? "Added" : "Book"}</button>	
                    </div>
                </Col> 
            </Row>
        </div>
    )  
}

// FUNCTION FOR AVAILABILITY FILTER WITHOUT TIME AND LANGUAGE COMPONENT
function WithoutBoth(props) {
    const [childCount, setchildCount] = useState([]);
    const [searchDetails, setsearchDetails] = useState({});
    const animatedComponents = makeAnimated();
    const [languageValue, setLanguageStateValue] = useState({});
    const [timeValue, setTimeStateValue] = useState();
    const [addingToCart, setAddingToCart] = useState(false);
    const [children, setchildren] = useState(0);
    const [adult, setAdult] = useState(1);
    const [availabilityDate, setAvailabilityDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        let searchCount = JSON.parse(sessionStorage.getItem("searchdata")) || {"searchTerm": ""};
        if(searchCount.searchTerm != ""){
            setStartDate(new Date(searchCount.startDate));
            setAvailabilityDate(new Date(searchCount.startDate));
            setEndDate(new Date(searchCount.endDate));
            setAdult(searchCount.passengerDetails.adult);
            setchildren(searchCount.passengerDetails.children);
        }
    },[])

    // THIS FUNCTION IS USE TO HANDLE ADULT COUNT
    const handleAdultCount = (e) => {
        setAdult(e.value);
    }

    // THIS FUNCTION IS USE TO HANDLE CHILD COUNT
    const handleCountChild = (e) => {
        setchildren(e.value);
        const elements = Array.from({ length: e.value }, (_, index) => {
            return index;
        });
        setchildCount(elements)
    }

    // THIS FUNCTION IS USE TO CHILD AGES
    const handleCountChildAges = (e) => {
        
    }

    // THIS FUNCTION IS USE TO SET TRAVELLERS WHILE SELECT ADULT AND CHILD
    const setTravellers  = (e) => {
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

    // FUNCTION TO ADD PRODUCT IN TO CART
    const addProductCart = async(e) => {
        props.propData.setbookingLoader(true);
        let cart = {};
        let availabilitydetaills = props.propData.availabilty.bookableItems;
        let cartDetails = JSON.parse(sessionStorage.getItem("cart")) || [];
        let searchData = {};
        searchData.provider = availabilitydetaills[e.target.value].provider;
        searchData.startDate = availabilityDate.toISOString().slice(0, 10);
        searchData.passengerDetails = {
            adult : adult,
            children: children
        }
        let availabilityDetails = await checkAvailability(searchData, availabilitydetaills[e.target.value].productCode);
        if(availabilityDetails.bookableItems){
            if(availabilityDetails.bookableItems[0].available){
                const day = availabilityDate.getDate();
                const month = availabilityDate.getMonth() + 1; // Months are zero-indexed
                const year = availabilityDate.getFullYear();
                const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                const formattedDate = `${day} ${monthNames[month]} ${year}`;
        
                //Adding Cart details to session storage after checking availability.
                cart.orderId = Math.random().toString(36).substring(2, 8);
                cart.provider = availabilitydetaills[e.target.value].provider;
                cart.productCode = availabilitydetaills[e.target.value].productCode;
                cart.productOptionCode = availabilitydetaills[e.target.value].productOptionCode;
                cart.startDate = formattedDate;
                cart.currency = availabilitydetaills[e.target.value].currency;
                cart.startingTime = timeValue;
                cart.title = availabilitydetaills[e.target.value].title;
                cart.duration = props.propData.duration;
                cart.passengerDetails = {
                    adult : adult,
                    child : children
                }
                cart.languageGuide = {
                    languageGuide:{
                        type:"AUDIO",
                        language:languageValue
                    }
                }
                cartDetails.push(cart);
                sessionStorage.setItem("cart", JSON.stringify(cartDetails));
                props.propData.setcartdata(cartDetails);
                props.propData.setmodalshow(false);
            } else {
                props.propData.setbookingerror([e.target.value]);
                props.propData.setbookingerrormsg(availabilityDetails.bookableItems[0].unavailableReason)
            }
        } else {
            props.propData.setbookingerror([e.target.value]);
            props.propData.setbookingerrormsg(availabilityDetails.Error.Message)
        }
        props.propData.setbookingLoader(false);
    }

    return(
        <div className={Styles.radioinnerBox_bottom}>
            <Row>
                <Col xs={6} md={4}>
                    <div className={Styles.event_date}>
                        <div className="position-relative">
                            <div className={Styles.date_fromtext}>
                                <label>
                                    {/* From date */}
                                    <DatePicker
                                    dateFormat="MMM dd"
                                    selected={availabilityDate}
                                    onChange={(date) => {
                                        setAvailabilityDate(date); 
                                    }}
                                    selectsStart
                                    startDate={startDate}
                                    maxDate={endDate}
                                    minDate={startDate}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </Col>           
                <Col xs={6} md={4}>
                    {props.propData.personsearch ? 
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            placeholder={'Select Passengers list'}
                            // defaultValue={[colourOptions[4], colourOptions[5]]}
                            isMulti
                            options={customerOptions}
                        /> : 
                        <Dropdown className={Styles.selecttraveller_box}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {adult} Adults
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Row className="g-3">
                                    <Col xs={6}>
                                        <span className={Styles.label}>Adult</span>
                                        <Select class="d-inline-block sort-select" defaultValue={sortByOptions[adult-1]} onChange={handleAdultCount} options={sortByOptions}/> 
                                    </Col>
                                    <Col xs={6}>
                                        <span className={Styles.label}>Children</span>
                                        <Select class="d-inline-block sort-select" onChange={handleCountChild} defaultValue={childcountOptions[children]} options={childcountOptions}/>
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
                        </Dropdown>
                    }            
                    
                </Col>
                <Col xs={6} md={4}>
                    <div className={Styles.radioSubdesc}>	
                        <button className={ props.faqlist.available ? Styles.btntype1 : Styles.btntype_inactive} disabled={props.faqlist.available ? false : true} value={props.index } onClick={addProductCart}>{addingToCart ? "Added" : "Book"}</button>	
                    </div>
                </Col> 
            </Row>
        </div>
    )  
}

WithoutBoth.defaultProps = {
    propData : {
        personsearch : false,

    },
    faqlist: {
        languageGuides : [
            {
                languages : []
            }
        ]
    }
}

WithoutLanguage.defaultProps = {
    propData : {
        personsearch : false,
        
    },
    faqlist: {
        languageGuides : [
            {
                languages : []
            }
        ]
    }
}


WithoutTime.defaultProps = {
    propData : {
        personsearch : false,
        
    },
    faqlist: {
        languageGuides : [
            {
                languages : []
            }
        ]
    }
}

AvailabilityFilter.defaultProps = {
    propData : {
        personsearch : false,
        
    },
    faqlist: {
        languageGuides : [
            {
                languages : []
            }
        ]
    }
}

export  { WithoutBoth };
export { WithoutLanguage };
export { WithoutTime } ;
export default AvailabilityFilter;
