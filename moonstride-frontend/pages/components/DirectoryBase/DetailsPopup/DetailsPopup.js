import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaWeight } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";
//import { FaSortAmountUpAlt } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import { FaChild } from "react-icons/fa";
import DetailsPopupSlider from "../DetailsPopupSlider/DetailsPopupSlider";
import AccordionType from "../../../components/DirectoryBase/AccordionType/AccordionType";
import Styles from "./DetailsPopup.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-bootstrap/Dropdown";
import Select,{components} from 'react-select';
import ButtonType from "../../Button/Button";
import { CloseButton } from 'react-bootstrap';
//import ReactDOM from "react-dom"
import { tourPackageDetail, checkAvailability } from "../../../api/tourPackages";
import loadingimage from "../../../../public/moonstride-loader.svg"
import Image from "next/image";
function Loader(){
  return( 
      <Row >
        <Col className="text-center">
          <Image src={loadingimage} width="250" height="250" alt="Loader Image"/>
        </Col>
      </Row>
   
  )
}

function AvailabilityDetails(props){

  if(props.availabiltyShow){
    let availabilityDetailsArray = props.availabilityDetails
    if(availabilityDetailsArray[0].Result.Code == 500 || availabilityDetailsArray[0].Result.Code == 400){
      return(
        <div className={Styles.accordian_body}>
          No availability found for selected conditions
        </div>
      )
    }
    else{
      let items = availabilityDetailsArray[0].Result.bookableItems;
      return(
          <div className={Styles.accordian_body}>
            {items.map((item, index) => 
              <div className={Styles.radioinnerBox} key={index}>
                  <div className={Styles.checkbox}>
                  <input type="checkbox" id="vehicle1" className={Styles.input_check_box}></input>
                  <span className={Styles.checkmark}></span>
                  </div>
                <h3 className={Styles.radioTitle}>{item.title}</h3>
                <div className={Styles.radioContent}>{item.description.replace(/<\/?[^>]+(>|$)|&[^\s]*;/g, "")}</div>
                <h4 className={Styles.radioSubhd}>Total ${item.priceSummary.recommendedRetailPrice}</h4>
            </div>
            )}
            
            <button type="button" value="Submit" className={Styles.btntype2}>Add to booking</button>
          </div>
      )
    }
    
  }
  else{
    return(
      <Loader />
    )
  }
  
}

function MyVerticallyCenteredModal(props) {
  try{
    const [show, setShow] = useState(false);
    const [availabiltyShow, setAvailabiltyShow] = useState(false);
    const [childCount, setchildCount] = useState([]);
    const [searchDetails, setsearchDetails] = useState({});
    const [children, setchildren] = useState(0);
    const [adult, setAdult] = useState(1);
    const [productDetails, setProductdetails] = useState({});
    const [availabilityDetails, setAvailabilityDetails] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [availabilityDate, setAvailabilityDate] = useState(new Date());
    const [datePickerStartState, setdatePickerStartState] = useState(false);
    
    useEffect(() => {
      if(props.productdetail.productId == undefined) {
        return;
      }
      const getPageData = async () => {
        const details = await tourPackageDetail(props.productdetail.productId);
        setProductdetails(details)
      }

      let searchCount = JSON.parse(sessionStorage.getItem("searchdata")) || {"searchTerm": ""};
      if(searchCount.searchTerm != ""){
        setStartDate(new Date(searchCount.startDate));
        setAvailabilityDate(new Date(searchCount.startDate));
        setEndDate(new Date(searchCount.endDate));
        setAdult(searchCount.passengerDetails.adult);
      }  

      getPageData();
    }, [props.productdetail.productId]);

    const handleOpen = async() => {
      setAvailabiltyShow(false);
      setShow(!show); // Toggle accordion
      let searchData = {};
      searchData.provider = ["VTR"]
      searchData.startDate = startDate.toISOString().slice(0, 10);
      searchData.numberOfPerson = parseInt(searchDetails.adult) + parseInt(searchDetails.children);
      searchData.passengerDetails = {
        adult : adult,
        children: children
      }

      let availabilityDetails = await checkAvailability(searchData, props.productdetail.productId);
      setAvailabilityDetails(availabilityDetails);
      setAvailabiltyShow(true);
      
    };

    const updateStates = () => {
      setProductdetails({});
      setShow(false);
      setAvailabiltyShow(false);

    }

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
    if(Object.keys(productDetails).length === 0){
      return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Loader></Loader>
        </Modal>
      )
    }
    else{
      let duration = (parseInt(productDetails.tourDetails.duration)/60).toFixed(2);
      let description = productDetails.tourDetails.description.split('\n').map(str => <p>{str}</p>)
      
      return (
        
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onExit={updateStates}
          >

            {/* closeButton -->  If close button required add this to next line after Modal.Header  */}
            <Modal.Header  >
              <Modal.Title id="contained-modal-title-vcenter" >
              <div className={Styles.Popup_title}>
                {productDetails.title}
                <CloseButton className={Styles.btntype3} onClick={props.onHide} />
                 <Row>
                  <Col xs={12} md={6}>
                    <div className={Styles.price}>
                        From <span className={Styles.value}> ${props.productdetail.price}</span>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className={Styles.reviewRating}>
                        <span className={Styles.reviewRatingValue}>5.0/5</span> (123 ratings)
                    </div>
                    </Col>
                 </Row> 
              </div>  
                <DetailsPopupSlider  images={productDetails.images}/>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">

              <AccordionType />


              {/* ************************* Activity Section Start ******************************* */}

              <Row>
                <Col xs={12} md={4}>
                  <div className={Styles.sidebar}>
                    <div className={Styles.sideBarOptions}>
                      <FaWeight /> <span className={Styles.title}> Duration </span>
                      <br></br>
                      <span className={Styles.SideBarOptionValue}>10 Hrs</span>
                    </div>

                    <div className={Styles.sideBarOptions}>
                      <FaRegCalendarCheck />{" "}
                      <span className={Styles.title}> Language </span>
                      <br></br>
                      <span className={Styles.SideBarOptionValue}>English, Spanish</span>
                    </div>


                    <div className={Styles.sideBarOptions}>
                      <FaMapMarkerAlt /> <span className={Styles.title}> Contact </span>
                      <br></br>
                      <div className={Styles.SideBarOptionValue}>
                      4339 Perine Street <br></br>
                      Chantilly <br></br>
                      22021 <br></br>
                      United States <br></br>
                      </div>
                    </div>

                    <div className={Styles.sideBarOptions}>
                      <FaMobile />{" "}
                      <span className={Styles.title}> Mobile </span>
                      <br></br>
                      <span className={Styles.SideBarOptionValue}> 9567056624</span>
                    </div>

                    <div className={Styles.sideBarOptions}>
                      <FaUserAlt />{" "}
                      <span className={Styles.title}> Supplier Name </span>
                      <br></br>
                      <span className={Styles.SideBarOptionValue}>{productDetails.supplierName}</span>
                    </div>

                    <div className={Styles.sideBarOptions}>
                      <FaEnvelopeSquare />{" "}
                      <span className={Styles.title}> Supplier Mail ID </span>
                      <br></br>
                      <div className={Styles.SideBarOptionValue}>
                      <p> samjo41@gmail.com</p>
                      </div>
                    </div>

                    <div className={Styles.sideBarOptions}>
                      <FaChild />{" "}
                      <span className={Styles.title}> Age Range </span>
                      <br></br>
                      <span className={Styles.SideBarOptionValue}>{productDetails.tourDetails.ageRangeFrom} to {productDetails.tourDetails.ageRangeTo} years old</span>
                    </div>

                    <div className={Styles.sideBarOptions}>
                      <FaWalking />{" "}
                      <span className={Styles.title}> Activity Type </span>
                      <br></br>
                      <div className={Styles.SideBarOptionValue}>A tour or activity that occurs over multiple days, and therefore includes food and accommodation</div>
                    </div>

                    <div className={Styles.sideBarOptions}>
                      <FaRoute />{" "}
                      <span className={Styles.title}> Starting and Finishing </span><br></br>
                      <div className={Styles.SideBarOptionValue}>Starting : UK</div><br></br>
                      <div className={Styles.SideBarOptionValue}>Finishing: USA</div>
                    </div>

                    <div className={Styles.sideBarOptions}>
                      <FaUsers />{" "}
                      <span className={Styles.title}> Group Size </span>
                      <br></br>
                      <span className={Styles.SideBarOptionValue}>{productDetails.tourDetails.maxGroupSize}</span>
                    </div>

                    <div className={Styles.sideBarOptions}>
                      <FaListUl />{" "}
                      <span className={Styles.title}> Guide Options </span>
                      <br></br>
                      <span className={Styles.SideBarOptionValue}>Guide type : {productDetails.tourDetails.languageGuides.guideType}</span> <br></br>
                      <span className={Styles.SideBarOptionValue}>Guide count : {productDetails.tourDetails.languageGuides.guideCount}</span>
                    </div>

                  </div>
                </Col>
                <Col xs={12} md={8}>
                  <h3>About Activity</h3>
                  {description}
                  
                </Col>
              </Row>

            </Modal.Body>
            <Modal.Footer>
              <div className={Styles.CloseButton}>
                <Button className={Styles.btntype1} onClick={props.onHide}>Close</Button>
              </div>  
            </Modal.Footer>
          </Modal>
        
      );
    }
  
  }catch{
    console.log("No data found")
  }
  
}

export default MyVerticallyCenteredModal;
