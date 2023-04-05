// {On the component page that displays the homepage, the search bar allows the user to search for a location and select a start date. Additionally, 
//the user can select an end date and the number of adults and thair functionalities  using this component}

import React, { useState } from "react";
import Select,{components} from 'react-select';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//We are displaying the location search input here , We have passed values into the input component so that it can be reused.
import InputType from "../../Input/Input";
import SelectType from "../Select/Select";
import ButtonType from "../../Button/Button";
import Styles from "./ListingSearchbar.module.scss";
import Checkbox from "../../Checkbox/Checkbox";
import { tourPackages } from "../../../api/tourPackages";

function ActivitySearchWidgetHome(props) {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const sortByOptions = [
    { value: "1", label: "1" ,key:"1"},
    { value: "2", label: "2" ,key:"2"},
    { value: "3", label: "3" ,key:"3"},
    { value: "4", label: "4" ,key:"4"},
    { value: "5", label: "5" ,key:"5"}
  ];
  
  const inputTextHandler = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleClick = async (e) => {

    let searchData = {};
    searchData.searchTerm = searchTerm;
    searchData.start_date = startDate.toISOString().slice(0, 10);
    searchData.end_date = endDate.toISOString().slice(0, 10);
    searchData.number_of_person = '2';
    const dataTours = await tourPackages(searchData);
    var finalData = [];
    console.log(dataTours.data)
    if(dataTours.data.Result.Code == '400'){
      console.log("no data")
    }else{
      let products = dataTours.data.Result.products.results
      let count = 0;
     
      products.forEach((element, index) => {
        count = count + 1
        let objectData = {};
        objectData.id = count;
        objectData.title = element.title;
        let itineraryType = element.itineraryType.toLowerCase();
        let duration = '';
        let dutaionValue = '';
        if(element.duration){
          if(element.duration.fixedDurationInMinutes){
            duration = element.duration.fixedDurationInMinutes/60 
            duration = duration.toFixed()
            dutaionValue = duration;
            duration = duration + ' hours'
            
          }
          else if(element.duration.unstructuredDuration){
            duration = element.duration.unstructuredDuration
          }
        }
        

        objectData.type = itineraryType.charAt(0).toUpperCase() + itineraryType.slice(1);
        // console.log(element.duration.variableDurationFromMinutes)
        // let time = element.duration.fixedDurationInMinutes / 60; 
        objectData.time = duration;
        objectData.text = element.description;
        objectData.linkText = "More details";
        objectData.price = element.pricing.summary.fromPriceBeforeDiscount;
        objectData.productCode = element.productCode;
        objectData.durationValue = dutaionValue;
        if("reviews" in element){
          let rating = element.reviews.combinedAverageRating.toFixed(1) + '/5';
          let ratingCount = element.reviews.totalReviews + ' ratings';
          objectData.rating = rating;
          objectData.ratingCount = ratingCount;
        }
        objectData.buttonText = "Book";
        finalData.push(objectData);
      }); 
    }
    props.setSearchData(
      finalData
    )
  }

  return (
    <>
      <div className={`${Styles.listingSearchbar}`}>
        <Row className="g-2">
          <Col lg={5} md={12} xs={12}>
            {/*Search input*/}
            <InputType
              class={`search_formbox ${Styles.searchInput}`}
              label=""
              placeholder= "Search..."
              value={searchTerm}
              onChange={inputTextHandler}
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
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
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
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  label=""
                />
              </label>
            </div>
          </Col>
          <Col lg={2} md={3} xs={12}>
            <Dropdown className={Styles.selecttraveller_box}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                2 adults
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {/* We are displaying this data in a dropdown. */}
                <Row className="g-3">
                  <Col xs={6}>
                    <span className={Styles.label}>Adult</span>
                    <Select class="d-inline-block sort-select" defaultValue={sortByOptions[1]} options={sortByOptions}/>
                    {/* <SelectType label="Adult" /> */}
                  </Col>
                  <Col xs={6}>
                    <span className={Styles.label}>Children</span>
                    <Select class="d-inline-block sort-select" defaultValue={sortByOptions[0]} options={sortByOptions}/>
                    {/* <SelectType label="Children" /> */}
                  </Col>
                  <Col xs={6} className="mt-3">
                    <span className={Styles.label}>Child age </span>
                    <Select class="d-inline-block sort-select" defaultValue={sortByOptions[0]} options={sortByOptions}/>
                    {/* <SelectType label="child's age on the date of travel" /> */}
                  </Col>
                  <Col xs={6} className="mt-3">
                    <span className={Styles.label}>Child age</span>
                    <Select class="d-inline-block sort-select" defaultValue={sortByOptions[0]} options={sortByOptions}/>
                    {/* <SelectType label="child's age on the date of travel" /> */}
                  </Col>
                </Row>
                <div className="mt-3">
                  <ButtonType className={`${Styles.applyButton} btntype2`} name="Apply" />
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

function ActivitySearchWidgetListing() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <div className={`${Styles.listingSearchbar}`}>
        <Row className="g-2">
          <Col lg={5} md={12} xs={12}>
            <InputType
              class={`search_formbox ${Styles.searchInput}`}
              label=""
              placeholder= "Search..."
            />
          </Col>
          <Col lg={2} md={3} xs={6}>
            <div className="position-relative">
              <div className={Styles.date_fromtext}>From</div>
              <label>
                <DatePicker
                  dateFormat="MMM dd"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                />
              </label>
            </div>
          </Col>
          <Col lg={2} md={3} xs={6}>
            <div className="position-relative">
              <div className={Styles.date_fromtext}>To</div>
              <label>
                <DatePicker
                  dateFormat="MMM dd"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                />
              </label>
            </div>
          </Col>
          <Col lg={2} md={3} xs={12}>
            <Dropdown className={Styles.selecttraveller_box}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                2 adults
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Row className="g-3">
                  <Col xs={6}>
                    <SelectType label="Adult" />
                  </Col>
                  <Col xs={6}>
                    <SelectType label="Children" />
                  </Col>
                  <Col xs={12} className="m-0">
                    <SelectType label="child's age on the date of travel" />
                  </Col>
                </Row>
                <div>
                  <ButtonType className="btntype1 w-50" name="Apply" />
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col lg={1} md={3} xs={12}>
            <ButtonType className="btntype1 w-100" name="Search" />
          </Col>
        </Row>
      </div>
    </>
  );
}

function listingSearchbar(props) {
  /*const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());*/

  const widgetTemplate = props.template;

  return widgetTemplate === "home" && <ActivitySearchWidgetHome searchData={props.searchData} setSearchData={props.setSearchData} />;

}

function ListingCarSearchbar() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [diffLocation, setDiffLocation] = useState(false);
  console.log(diffLocation);
  return (
    <>
      <div className={Styles.listingCarHeader}>
        <Container>
          <div className={`${Styles.listingCarSearch}`}>
            <span className={Styles.searchCriteria}>Your Search Criteria</span>
            <Row className="g-2">
              <Col lg={3} md={12} xs={12} className={Styles.locationCol}>
                <div className={Styles.location}>
                  {diffLocation ? (
                    <span className={Styles.locationTxt}>Pick-up location</span>
                  ) : (
                    <span className={Styles.locationTxt}>
                      Pick-up and drop-off location
                    </span>
                  )}
                  <span className={Styles.locationName}>Barcelona Airport</span>
                </div>
              </Col>
              <Col lg={3} md={6} xs={6} className={Styles.locationCol}>
                <Row className={`${Styles.pickupDate} g-2`}>
                  <Col className={` ${Styles.pickupDateDiv} `}>
                    <div className={Styles.date_fromtext}>Pick-up date</div>
                    <label>
                      <DatePicker
                        label= ""
                        dateFormat="MMM dd"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                      />
                    </label>
                  </Col>
                  <Col className={` ${Styles.pickupDateDiv}`}>
                    <div className={Styles.date_fromtext}>Drop-off date</div>
                    <label>
                      <DatePicker
                        label= ""
                        dateFormat="MMM dd"
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                      />
                    </label>
                  </Col>
                </Row>
              </Col>
              <Col lg={3} md={6} xs={6} className={Styles.locationCol}>
                <Row className={`${Styles.pickupTime} g-2`}>
                  <Col className={`${Styles.pickupTimeDiv} pickupTimeDivGlb`}>
                    <div className={Styles.date_fromtext}>Pick-up Time</div>
                    <label>
                      <DatePicker
                        label= ""
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                      />
                    </label>
                  </Col>
                  <Col className={`${Styles.pickupTimeDiv} pickupTimeDivGlb`}>
                    <div className={Styles.date_fromtext}>Drop-off Time</div>
                    <label>
                      <DatePicker
                        label= ""
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                      />
                    </label>
                  </Col>
                </Row>
              </Col>
              <Col lg={3} md={12} xs={12} className={Styles.searchBtn}>
                <ButtonType className={`${Styles.searchButton} btntype1 w-100`} name="Search" />
              </Col>
            </Row>
            <div className={Styles.diffLocation} onChange={() => setDiffLocation(!diffLocation)}>
              <Checkbox
                label="Add a different drop-off location"
                // onChange={() => setDiffLocation(!diffLocation)}
                // {...(diffLocation ? "checked" : "")}
              />
            </div>
            {diffLocation === true ? 
              <div className={Styles.locationCol}>
                <div className={Styles.location}>
                  <span className={Styles.locationTxt}>Drop-off location</span>
                  <span className={Styles.locationName}>Barcelona Airport</span>
                </div>
              </div>
             : "" }
          </div>
        </Container>
      </div>
    </>
  );
}

export default listingSearchbar;
export { ListingCarSearchbar };
export { ActivitySearchWidgetHome };
export { ActivitySearchWidgetListing };
