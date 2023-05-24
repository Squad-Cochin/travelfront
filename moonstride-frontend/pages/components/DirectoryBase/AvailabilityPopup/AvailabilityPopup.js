//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
//                          FILE IS A COMPONENT FOR SHOWING AVAILABILITY POPUP                              //
//                                                                                                          //
////////////////////////////////////////////////////////////////////////////////////////////////////////////// 



import React, { useState ,useEffect } from "react";
import Styles from "./AvailabilityPopup.module.scss";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ButtonType from "../../Button/Button";
import SelectType from "../Select/Select";
import { useRouter } from 'next/router'
import { checkAvailability } from "../../../api/tourPackages";

// FUNCTION FOR AVAILABILITY POPUP
const AvailabilityPopup = ({...props}) => {
  let count = 0
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  let radiobox = [];
  const router = useRouter();
  const param1  = router.query
  const [productData, setproductData] = useState([]);

  useEffect(() => {
    const getPageData = async () => {
      let dataFromLocalStorage = JSON.parse(sessionStorage.getItem("searchdata")) || [];
      
      if(!dataFromLocalStorage.passengerDetails.adult){
        dataFromLocalStorage.passengerDetails.adult = 0
        dataFromLocalStorage.passengerDetails.children = 0  
      }

      const details = await checkAvailability(dataFromLocalStorage, param1.productId);
      if(details == undefined){
        setproductData([])
      }
      else{
        setproductData(details)
      }
    }
    getPageData();
  }, [param1.productId]);
  if (productData.length == 0 || productData.Message) {
    return <div>Loading...</div>; 
  }
  else{
    if( productData[0].Result.Code != 500 ){
      let items = productData[0].Result.bookableItems
      let dataFromLocalStorage = JSON.parse(sessionStorage.getItem("searchdata")) || [];
      let numberOfAdult = 0;
      let numberOfChild = 0;
        if(dataFromLocalStorage.passengerDetails.adult){
          numberOfAdult = dataFromLocalStorage.passengerDetails.adult;
          numberOfChild = dataFromLocalStorage.passengerDetails.children;
        }
      items.forEach(item => {
        try{
          count ++;
          let product = {}
          product.id = count;
          product.title = item.title;
          product.content = item.description.replace(/<\/?[^>]+(>|$)|&[^\s]*;/g, "");
          product.linklabel = "Read more";
          product.url = "";
          product.subtitle = "Total $" + item.totalPrice  + " ,$" + item.priceForAdult + " per adult"
          product.subdesc = numberOfAdult + " Adults x $" + item.priceForAdult;
          if(numberOfChild > 0){
            product.subdesc += " + " + numberOfChild + " child x $" + item.priceForChild;
          }
          product.buttonoptions= item.startTime;
          radiobox.push(product);
        }
        catch{
          console.log("next")
        }
          
      });
    }
    else{
      return(
        <div className={Styles.AvailabilityPopup}>
          No Availability for the product
        </div>
      )
    }
    
  }
 
  const sortByOptions = [
    {name: "Adult", id:"1"},
    {name: "Child" ,id:"2"}
  ];
  const tourLanguage = [
    {name: "English", id:"1"},
    {name: "French" ,id:"2"}
  ];
  const timeOption = [
    {name: "10:00pm", id:"1"},
    {name: "10:00pm" ,id:"2"},
    {name: "08:00am" ,id:"3"},
    {name: "05:00am" ,id:"4"}
  ];
  

  return (
    <div className={Styles.AvailabilityPopup}>
      <div className={Styles.priceSection}>
        <h2 className="header-type2">From {props.fromPrice} per adult</h2>
        <div className={Styles.duration}>
          Product ID: {props.productid} <span className={Styles.durationSeparator}></span>{" "}
        </div>
        <div className={`${Styles.freeText} mt-2`}>
          {props.destinationDetails}
        </div>
      </div>
      <Form className="mt-4">
        
        <SelectType selectarr={sortByOptions} label="Who’s going?" />
        <SelectType selectarr={tourLanguage} label="Tour Language" />
        <div className="position-relative formbox mb-3">
          <div className="form-label">Date</div>
          <DatePicker
            dateFormat="MM/dd/yyyy"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
        </div>
        <SelectType selectarr={timeOption} label="Time" />
        {/* <div className="form-label">{count} options available</div> */}

        {radiobox.map((radiolist) => {
          return (
            <>
              <label className={Styles.radioLabel} key={radiolist.id}>
                <input type="radio" name="Innerradio" />
                <div className={Styles.radioinnerBox}>
                  {radiolist.title ? (
                    <h3 className={Styles.radioTitle}>{radiolist.title}</h3>
                  ) : null}
                  {radiolist.content ? (
                    <div className={Styles.radioContent}>
                      {radiolist.content}
                    </div>
                  ) : null}
                  {radiolist.url ? (
                    <a className={Styles.radioLink} href={radiolist.url}>
                      {radiolist.linklabel}
                    </a>
                  ) : null}
                  {radiolist.subtitle ? (
                    <h4 className={Styles.radioSubhd}>{radiolist.subtitle}</h4>
                  ) : null}
                  {radiolist.subdesc ? (
                    <div className={Styles.radioSubdesc}>
                      {radiolist.subdesc}
                    </div>
                  ) : null}
                   {radiolist.buttonoptions ? (
                      radiolist.buttonoptions.map((time) => {
                        <div className={Styles.radiobuttonOptions}>
                          <ButtonType 
                            className={Styles.btn}
                            name={time}
                          />
                        </div>
                      })
                    ) : null}
                    
                 
                </div>
              </label>
            </>
          );
        })}
        <ButtonType class={`mb-3 btntype1 mt-4 ${Styles.offcanvasBtn}`}
          name="Book Now"
        />
      </Form>
    </div>
  );
  
};
export default AvailabilityPopup;
