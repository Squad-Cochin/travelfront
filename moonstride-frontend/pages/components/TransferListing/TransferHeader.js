import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import { Image } from "react-bootstrap"
import { FaMapMarkerAlt } from "react-icons/fa";
import styles from "./TransferListing.module.scss"
import Select, { StylesConfig,components } from 'react-select';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap'
import DatePicker from "react-datepicker"
import React, { useState } from "react";
import ButtonType from "../Button/Button";
import "react-datepicker/dist/react-datepicker.css";
import InputType from '../Input/Input';


function TransferHeader() {
  const [endDate, setEndDate] = useState(new Date());
    const colourOptions = [
        { value: "ocean1", label: "2 traveller" ,key:"1"},
        { value: "blue", label: "Blue" ,key:"2"},
        { value: "purple", label: "Purple" ,key:"3"},
        { value: "red", label: "Red" ,key:"4"},
        { value: "orange", label: "Orange",key:"5" },
        { value: "yellow", label: "Yellow",key:"6"},
        { value: "green", label: "Green" ,key:"7"},
        { value: "forest", label: "Forest",key:"8" },
        { value: "slate", label: "Slate",key:"9" },
        { value: "silver", label: "Silver",key:"10" }
      ];
      const DropdownIndicator = (props) => {
        return components.DropdownIndicator && (
          <components.DropdownIndicator {...props}>
              <Image src="../images/transferListing/arrow.svg" alt="arrow" width={12} height={12} />
          </components.DropdownIndicator>
        );
    };
    const Control = ({ children, ...props })=> {
      return (
        <components.Control {...props}>
          <span className='ms-3 me-2'>
          <Image  src='../images/transferListing/people.svg' alt="people" width={14} height={18} />
          </span>
          {children}
        </components.Control>
      );
    };
    const placeholderComponent = (
        <div style={{color:"black"}}>
            <span className='p-2'>2 travellers</span>
        </div>
    );
    const travellerStyles ={
      control: (css) => ({ ...css, paddingLeft: '15px' }),
      singleValue: (base) => ({
        ...base,
        fontWeight: 500,
        color:"#000",
        amrginLeft:0,
      }),
    }

    const [startDate, setStartDate] = useState(new Date());
  
  return (
    <>
    <div className={styles.trasferHeaderMain}>
      <Row className={`mt-3 ${styles.TransferHeaderTop}`}>
        <Col xs={6} sm={6} md={5} lg={5} className={`${styles.airpotInput}`}>
          <InputType placeholder="Airpot" label="" />
          <div className={`position-absolute ${styles.direction}`}>
              <Image  src='../images/transferListing/direction.svg' width={18} height={17} alt="direction" />
          </div>
        </Col>
        <Col xs={6} sm={6} md={5} lg={5} className={`${styles.hotelInput}`}>
          <InputType placeholder="Hotel" label="" />
        </Col>
        <Col xs={12} sm={12} md={2} lg={2} className={styles.travellerDropdown}>
        <Select
            defaultValue={colourOptions[0]}
            options={colourOptions}
            style={travellerStyles}
            placeholder={placeholderComponent}
            components={{ DropdownIndicator, Control,  IndicatorSeparator:() => null }}
        />
        </Col>
      </Row>
      <Row className='TransferHeader'>
      <Col sm={6} xs={6} className={` ${styles.pickupDateDiv} col-auto col-md-auto`}>
        <div className={styles.date_fromtext}>Flight arrival Date</div>
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
      </Col>
      <Col sm={6} xs={6} className={`${styles.pickupTimeDiv} pickupTimeDivGlb col-auto col-md-auto `}>
        <div className={styles.date_fromtext}>Flight arrival Time</div>
        <label>
          <DatePicker
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
      <Col sm={12} xs={12} className={`${styles.SearchButton} col-auto text-sm-center text-center mt-sm-3 col-md-auto mt-md-0`}>
        <ButtonType className={"btntype1"} name="Search" />
      </Col>
      </Row>
      </div>
    </>
  )
}
export default TransferHeader