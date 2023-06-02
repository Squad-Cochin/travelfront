///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
//                           COMPONENT FOR SHOWING DETAILS POPUP                             //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////


import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWeight } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import { FaChild } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { IoMdAlert } from "react-icons/io";
import { CloseButton } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";

// IMPORT PAGES
import DetailsPopupSlider from "../DetailsPopupSlider/DetailsPopupSlider";
import AccordionType from "../../../components/DirectoryBase/AccordionType/AccordionType";
import Styles from "./DetailsPopup.module.scss";
import { tourPackageDetail, checkAvailability } from "../../../api/tourPackages";
import loadingimage from "../../../../public/moonstride-loader.svg"

// FUNCTION FOR LOADER SVG
function Loader(){
  return( 
      <Row >
        <Col className="text-center">
          <Image src={loadingimage} width="250" height="250" alt="Loader Image"/>
        </Col>
      </Row>
   
  )
}

// FUNCTION FOR DETAIL POPUP COMPONENT
function MyVerticallyCenteredModal(props) {
    const [show, setShow] = useState(false);
    const [bookingLoader, setbookingLoader] = useState(false);
    const [availabiltyShow, setAvailabiltyShow] = useState(false);
    const [children, setchildren] = useState(0);
    const [adult, setAdult] = useState(1);
    const [productDetails, setProductdetails] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [availabilityDate, setAvailabilityDate] = useState(new Date());
    const [bookingError, setbookingError] = useState([]);
    const [bookingErrorMsg, setbookingErrorMsg] = useState('');
   try{
      useEffect(() => {
        if(props.productdetail.productId == undefined) {
          return;
        }
        const getPageData = async () => {
          setbookingLoader(true)
          let searchData = {};
          searchData.provider = ["VTR"]
          searchData.startDate = startDate.toISOString().slice(0, 10);

          let searchCount = JSON.parse(sessionStorage.getItem("searchdata")) || {"searchTerm": ""};
          if(searchCount.searchTerm != ""){
            setStartDate(new Date(searchCount.startDate));
            setAvailabilityDate(new Date(searchCount.startDate));
            setEndDate(new Date(searchCount.endDate));
            setAdult(searchCount.passengerDetails.adult);
            setchildren(searchCount.passengerDetails.children)
          }  
          searchData.passengerDetails = {
            adult : adult,
            children: children
          }
          const details = await tourPackageDetail(props.productdetail.productId, searchData);
          setProductdetails(details)
          setbookingLoader(false)
        }
        getPageData();
      }, [props.productdetail.productId]);
      // FUNCTION TO UPDATE BELOW STATES WHILE EXIT FROM THE MODAL
      const updateStates = () => {
        setbookingError([]);
        setbookingErrorMsg('');
        //setProductdetails({});
        setShow(false);
        setAvailabiltyShow(false);
      }
      
      // WHILE CONDETION IS TRUE LOADER WILL RUN OR POPUP WILL DISPLAY
      if(Object.keys(productDetails).length === 0 || bookingLoader){
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
      } else {
        let duration = '';
        let description = '';
        if(productDetails.Details.tourDetails.duration != '' && productDetails.Details.tourDetails.duration != "Null"){
          duration = (parseInt(productDetails.Details.tourDetails.duration)/60).toFixed(2);
        }
        if(productDetails.Details.tourDetails.description != '' && productDetails.Details.tourDetails.description != "Null"){
          description = productDetails.Details.tourDetails.description.split('\n').map((str, index) => <p key={index}>{str}</p>)
        }
        return (
<<<<<<< Updated upstream
          <Modal 
          {...props}
             size="lg"
             aria-labelledby="contained-modal-title-vcenter"
             centered
             onExit={updateStates}
             >
                 
                   <Modal.Body>
                   <CloseButton className={Styles.btntype3} onClick={props.onHide} />
                    <div className={Styles.error_messgae}>
                     Sorry.. The specified criteria didn't result in any data. &nbsp; Please check after some time.
                     </div>
                     </Modal.Body>
                
          </Modal>
          
            // <Modal
            //   {...props}
            //   size="lg"
            //   aria-labelledby="contained-modal-title-vcenter"
            //   centered
            //   onExit={updateStates}
            // >
            //   <Modal.Header  >
            //     <Modal.Title id="contained-modal-title-vcenter" >
            //     <div className={Styles.Popup_title}>
            //       {productDetails.title}
            //       <CloseButton className={Styles.btntype3} onClick={props.onHide} />
            //       <Row>
            //       <Col xs={12} md={6}>
            //         <div className={Styles.price}>
            //             From <span className={Styles.value}> ${props.productdetail.price}</span>
            //         </div>
            //       </Col>
            //       <Col xs={12} md={6}>
            //         <div className={Styles.reviewRating}>
            //          <span className={Styles.reviewRatingValue}>4.5</span> <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /> &nbsp; (93 ratings)
            //         </div>
            //         </Col>
            //      </Row>
            //     </div>  
            //       <DetailsPopupSlider  images={productDetails.images}/>
            //     </Modal.Title>
            //   </Modal.Header>
            //   <Modal.Body className="show-grid">
            //     <AccordionType />

                /* ************************* Activity Section Start ******************************* */

            //     <Row>
            //       <Col xs={6} md={4}>
            //         <div className={Styles.sidebar}>
            //           {duration != "" ? 
            //             <div className={Styles.sideBarOptions}>
            //               <FaWeight /> <span className={Styles.title}> Duration </span>
            //               <br></br>
            //               <span className={Styles.SideBarOptionValue}>{duration} Hrs</span>
            //             </div> : null
            //           }
                   
            //           {productDetails.contact.address != "Null" ? 
            //             <div className={Styles.sideBarOptions}>
            //               <FaMapMarkerAlt /> <span className={Styles.title}> Contact </span>
            //               <br></br>
            //               <div className={Styles.SideBarOptionValue}>{productDetails.contact.address}</div>
            //             </div> : null
            //           }
            //           {productDetails.contact.phone != "Null" ? 
            //             <div className={Styles.sideBarOptions}>
            //               <FaMobile />{" "}
            //               <span className={Styles.title}> Mobile </span>
            //               <br></br>
            //               <span className={Styles.SideBarOptionValue}>{productDetails.contact.phone}</span>
            //             </div> : null
            //           }
            //           {productDetails.supplierName != "Null" ? 
            //             <div className={Styles.sideBarOptions}>
            //               <FaUserAlt />{" "}
            //               <span className={Styles.title}> Supplier Name </span>
            //               <br></br>
            //               <span className={Styles.SideBarOptionValue}>{productDetails.supplierName}</span>
            //             </div>: null
            //           }
            //           {productDetails.contact.email != "Null" ? 
            //             <div className={Styles.sideBarOptions}>
            //               <FaEnvelopeSquare />{" "}
            //               <span className={Styles.title}> Supplier Mail ID </span>
            //               <br></br>
            //               <div className={Styles.SideBarOptionValue}>
            //               <p>{productDetails.contact.email}</p>
            //               </div>
            //             </div>: null
            //           }
            //           {productDetails.tourDetails.ageRangeFrom != "Null" || productDetails.tourDetails.ageRangeTo != "Null" ? 
            //             <div className={Styles.sideBarOptions}>
            //               <FaChild />{" "}
            //               <span className={Styles.title}> Age Range </span>
            //               <br></br>
            //               <span className={Styles.SideBarOptionValue}>
            //                 {productDetails.tourDetails.ageRangeFrom} to 
            //                 {productDetails.tourDetails.ageRangeTo != "Null" ? productDetails.tourDetails.ageRangeTo : "- "}years old</span>
            //             </div>: null
            //           }
            //           {productDetails.tourDetails.itineraryTypeDescription != "Null" ?
            //             <div className={Styles.sideBarOptions}>
            //               <FaWalking />{" "}
            //               <span className={Styles.title}> Activity Type </span>
            //               <br></br>
            //               <div className={Styles.SideBarOptionValue}>{productDetails.tourDetails.itineraryTypeDescription}</div>
            //             </div> : null
            //           }
            //           {productDetails.tourDetails.startPoint != "Null" || productDetails.tourDetails.endingPoint != "Null" ?
            //             <div className={Styles.sideBarOptions}>
            //               <FaRoute />{" "}
            //               <span className={Styles.title}> Starting and Finishing </span><br></br>
            //               {productDetails.tourDetails.startPoint != "Null" ? 
            //                 <div className={Styles.SideBarOptionValue}>
            //                   {productDetails.tourDetails.startPoint != "Null"}
            //                 </div>
            //               : "-"}<br></br>
            //               {productDetails.tourDetails.endingPoint != "Null" ? 
            //                 <div className={Styles.SideBarOptionValue}>
            //                   {productDetails.tourDetails.endingPoint != "Null"}
            //                 </div>
            //               : "-"}
            //             </div>: null
            //           }
            //           {productDetails.tourDetails.maxGroupSize != "Null" ?
            //           <div className={Styles.sideBarOptions}>
            //             <FaUsers />{" "}
            //             <span className={Styles.title}> Group Size </span>
            //             <br></br>
            //             <span className={Styles.SideBarOptionValue}>{productDetails.tourDetails.maxGroupSize}</span>
            //           </div>: null
            //           }
            //           {productDetails.tourDetails.languageGuides.guideCount != "Null" || productDetails.tourDetails.languageGuides.guideType != "Null" ?
            //             <div className={Styles.sideBarOptions}>
            //               <FaListUl />{" "}
            //               <span className={Styles.title}> Guide Options </span>
            //               <br></br>
            //               {productDetails.tourDetails.languageGuides.guideType != "Null" ?
            //                 <span className={Styles.SideBarOptionValue}>
            //                   Guide type : {productDetails.tourDetails.languageGuides.guideType}
            //                 </span>: "-"
            //               }<br></br>
            //               {productDetails.tourDetails.languageGuides.guideCount != "Null" ?
            //                 <span className={Styles.SideBarOptionValue}>
            //                   Guide count : {productDetails.tourDetails.languageGuides.guideCount}
            //                 </span>: "-"
            //               }
            //             </div>: null
            //           }
            //         </div>
            //       </Col>
            //       <Col xs={12} md={8}>
            //         <h3>About Activity</h3>
            //         {description}
            //         <div className={Styles.notification}> 
            //             <div className={Styles.sideBarOptions}>
            //              <div>
            //                 <IoMdAlert /> 
            //              </div>
                         
            //               <div className={Styles.SideBarOptionValue}>
            //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            //               </div>
            //             </div>
            //         </div>
            //       </Col>
            //     </Row>

            //   </Modal.Body>
            //   <Modal.Footer>
            //     <div className={Styles.CloseButton}>
            //       <Button className={Styles.btntype1} onClick={props.onHide}>Close</Button>
            //     </div>  
            //   </Modal.Footer>
            // </Modal>
=======
          // MODAL
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onExit={updateStates}
          >
            {/* MODAL HEADER PART */}
            <Modal.Header  >
              <Modal.Title id="contained-modal-title-vcenter" >
              <div className={Styles.Popup_title}>
                {productDetails.Details.title}
                <CloseButton className={Styles.btntype3} onClick={props.onHide} />
                <Row>
                <Col xs={12} md={6}>
                  <div className={Styles.price}>
                      From <span className={Styles.value}> ${props.productdetail.price}</span>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className={Styles.reviewRating}>
                    <span className={Styles.reviewRatingValue}>{productDetails.Details.combinedAverageRating.toFixed(2)}</span> 
                    {Array.from({ length: 5 }, (_, index) => (
                      (productDetails.Details.combinedAverageRating) >= index + 1 ? (
                        <BsStarFill key={index} />
                      ) : (
                        ((productDetails.Details.combinedAverageRating) > index && (productDetails.Details.combinedAverageRating) < index + 1) ? (
                          <BsStarHalf key={index} />
                        ) : (
                          <BsStar key={index} />
                        )
                      )
                    ))} 
                    &nbsp; ({productDetails.Details.numberOfReviews} ratings)
                  </div>
                  </Col>
                </Row>
              </div>  
                <DetailsPopupSlider  images={productDetails.Details.images}/>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
              <AccordionType availabilty={productDetails.Availability} setbookingLoader={setbookingLoader}  bookingerror={bookingError} bookingerrormsg={bookingErrorMsg} setbookingerrormsg={setbookingErrorMsg}  setbookingerror={setbookingError} duration={duration} personsearch={props.personsearch} setmodalshow={props.setmodalshow} setcartdata={props.setcartdata}/>

              {/* ************************* Activity Section Start ******************************* */}

              <Row>
                <Col xs={6} md={4}>
                  <div className={Styles.sidebar}>
                    {/*DURATION */}
                    {duration != "" ? 
                      <div className={Styles.sideBarOptions}>
                        <FaWeight /> <span className={Styles.title}> Duration </span>
                        <br></br>
                        <span className={Styles.SideBarOptionValue}>{duration} Hrs</span>
                      </div> : null
                    }
                    {/* ADDRESS */}
                    {productDetails.Details.contact.address != "Null" ? 
                      <div className={Styles.sideBarOptions}>
                        <FaMapMarkerAlt /> <span className={Styles.title}> Contact </span>
                        <br></br>
                        <div className={Styles.SideBarOptionValue}>{productDetails.Details.contact.address}</div>
                      </div> : null
                    }
                    {/* MOBILE */}
                    {productDetails.Details.contact.phone != "Null" ? 
                      <div className={Styles.sideBarOptions}>
                        <FaMobile />{" "}
                        <span className={Styles.title}> Mobile </span>
                        <br></br>
                        <span className={Styles.SideBarOptionValue}>{productDetails.Details.contact.phone}</span>
                      </div> : null
                    }
                    {/* SUPPLIER NAME */}
                    {productDetails.Details.supplierName != "Null" ? 
                      <div className={Styles.sideBarOptions}>
                        <FaUserAlt />{" "}
                        <span className={Styles.title}> Supplier Name </span>
                        <br></br>
                        <span className={Styles.SideBarOptionValue}>{productDetails.Details.supplierName}</span>
                      </div>: null
                    }
                    {/* SUPPLIER EMAIL */}
                    {productDetails.Details.contact.email != "Null" ? 
                      <div className={Styles.sideBarOptions}>
                        <FaEnvelopeSquare />{" "}
                        <span className={Styles.title}> Supplier Mail ID </span>
                        <br></br>
                        <div className={Styles.SideBarOptionValue}>
                        <p>{productDetails.Details.contact.email}</p>
                        </div>
                      </div>: null
                    }
                    {/* AGE RANGE */}
                    {productDetails.Details.tourDetails.ageRangeFrom != "Null" || productDetails.Details.tourDetails.ageRangeTo != "Null" ? 
                      <div className={Styles.sideBarOptions}>
                        <FaChild />{" "}
                        <span className={Styles.title}> Age Range </span>
                        <br></br>
                        <span className={Styles.SideBarOptionValue}>
                          {productDetails.Details.tourDetails.ageRangeFrom != "Null" ? productDetails.Details.tourDetails.ageRangeFrom : "- "} to 
                          {productDetails.Details.tourDetails.ageRangeTo != "Null" ? productDetails.Details.tourDetails.ageRangeTo : "- "} years old</span>
                      </div>: null
                    }
                    {/* ACTIVITY TYPE */}
                    {productDetails.Details.tourDetails.itineraryTypeDescription != "Null" ?
                      <div className={Styles.sideBarOptions}>
                        <FaWalking />{" "}
                        <span className={Styles.title}> Activity Type </span>
                        <br></br>
                        <div className={Styles.SideBarOptionValue}>{productDetails.Details.tourDetails.itineraryTypeDescription}</div>
                      </div> : null
                    }
                    {/* STARTING AND FINISHING */}
                    {productDetails.Details.tourDetails.startPoint != "Null" || productDetails.Details.tourDetails.endingPoint != "Null" ?
                      <div className={Styles.sideBarOptions}>
                        <FaRoute />{" "}
                        <span className={Styles.title}> Starting and Finishing </span><br></br>
                        {productDetails.Details.tourDetails.startPoint != "Null" ? 
                          <div className={Styles.SideBarOptionValue}>
                            {productDetails.Details.tourDetails.startPoint != "Null"}
                          </div>
                        : "-"}<br></br>
                        {productDetails.Details.tourDetails.endingPoint != "Null" ? 
                          <div className={Styles.SideBarOptionValue}>
                            {productDetails.Details.tourDetails.endingPoint != "Null"}
                          </div>
                        : "-"}
                      </div>: null
                    }
                    {/* GROUP SIZE */}
                    {productDetails.Details.tourDetails.maxGroupSize != "Null" ?
                    <div className={Styles.sideBarOptions}>
                      <FaUsers />{" "}
                      <span className={Styles.title}> Group Size </span>
                      <br></br>
                      <span className={Styles.SideBarOptionValue}>{productDetails.Details.tourDetails.maxGroupSize}</span>
                    </div>: null
                    }
                    {/* GUID OPTION */}
                    {productDetails.Details.tourDetails.languageGuides.guideCount != "Null" || productDetails.Details.tourDetails.languageGuides.guideType != "Null" ?
                      <div className={Styles.sideBarOptions}>
                        <FaListUl />{" "}
                        <span className={Styles.title}> Guide Options </span>
                        <br></br>
                        {productDetails.Details.tourDetails.languageGuides.guideType != "Null" ?
                          <span className={Styles.SideBarOptionValue}>
                            Guide type : {productDetails.Details.tourDetails.languageGuides.guideType}
                          </span>: "-"
                        }<br></br>
                        {productDetails.Details.tourDetails.languageGuides.guideCount != "Null" ?
                          <span className={Styles.SideBarOptionValue}>
                            Guide count : {productDetails.Details.tourDetails.languageGuides.guideCount}
                          </span>: "-"
                        }
                      </div>: null
                    }
                  </div>
                </Col>
                <Col xs={12} md={8}>
                  {/* DISCRIPTION */}
                  {description != "" ? 
                    <div className={Styles.activityDetails}>
                      <h3>About Activity</h3>
                      {description}
                    </div> : null
                  }
                  {/* IMPORTANT INFORMATION */}
                  {productDetails.Details.tourDetails.ageRangeFrom != "Null" || productDetails.Details.tourDetails.ageRangeTo != "Null" ?
                    <div className={Styles.notification}> 
                      <div className={Styles.sideBarOptions}>
                        <div>
                          <IoMdAlert /> 
                        </div>
                        <div className={Styles.SideBarOptionValue}>
                          This package is exclusively available for individuals within the age range of &quot; {productDetails.Details.tourDetails.ageRangeFrom != "Null" ? productDetails.Details.tourDetails.ageRangeFrom : "- "} to {productDetails.Details.tourDetails.ageRangeTo != "Null" ? productDetails.Details.tourDetails.ageRangeTo : "- "} &quot; years old. 
                        </div>
                      </div>
                    </div> : 
                    null
                  }
                  
                </Col>
              </Row>

            </Modal.Body>
            {/* CLOSE BUTTON */}
            <Modal.Footer>
              <div className={Styles.CloseButton}>
                <Button className={Styles.btntype1} onClick={props.onHide}>Close</Button>
              </div>  
            </Modal.Footer>
          </Modal>
>>>>>>> Stashed changes
          
        );
      }
    }
    catch{
      const updateStatesError = () => {
        setbookingError([]);
        setbookingErrorMsg('');
        //setProductdetails({});
        setShow(false);
        setAvailabiltyShow(false);
      }
      return (
        <Modal 
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onExit={updateStatesError}
        >
          <Modal.Body>
            <CloseButton className={Styles.btntype3} onClick={props.onHide} />
            <div className={Styles.error_messgae}>
              Sorry.. The specified criteria didn&lsquo;t result in any data. &nbsp; Please check after some time.
            </div>
          </Modal.Body>
        </Modal> 
      )
    }
}

export default MyVerticallyCenteredModal;