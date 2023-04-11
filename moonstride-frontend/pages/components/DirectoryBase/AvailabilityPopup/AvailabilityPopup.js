import React, { useState ,useEffect } from "react";
import Styles from "./AvailabilityPopup.module.scss";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ButtonType from "../../Button/Button";
import SelectType from "../Select/Select";
import { useRouter } from 'next/router'


import { checkAvailability } from "../../../api/tourPackages";
const AvailabilityPopup = (props) => {
  let count = 0
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  let radiobox = [];
  console.log("test")
  console.log(props)
  const router = useRouter();
  const param1  = router.query

  const [productData, setproductData] = useState([]);
  useEffect(() => {
    const getPageData = async () => {
      let dataFromLocalStorage = JSON.parse(localStorage.getItem("searchdata")) || [];
      const details = await checkAvailability(dataFromLocalStorage, param1.productId);
      if(details == undefined){
        setproductData([])
      }
      else{
        setproductData(details)
      }
    }
    getPageData();
  }, []);

  console.log(productData);
  
  if (productData.length == 0 || productData.Message) {
    return <div>Loading...</div>; 
  }else if('Result' in productData.data){
    radiobox = [];
  }
  else{
    let items = productData.data.availability_status.bookableItems
    items.forEach(item => {
      try{
        count ++;
        let product = {}
        product.id = count;
        product.title = item.item_details.title;
        product.content = item.item_details.description;
        product.linklabel = "Read more";
        product.url = "";
        let perAdult = 0;
        let noAdult = 0;
        let perChild = 0;
        let noChild = 0;
        item.lineItems.forEach(ageBand => {
          if(ageBand.ageBand == 'ADULT'){
            perAdult = ageBand.subtotalPrice.price.recommendedRetailPrice
            noAdult = ageBand.numberOfTravelers
          }else if(ageBand.ageBand == 'CHILD'){
            perChild = ageBand.subtotalPrice.price.recommendedRetailPrice
            noChild = ageBand.numberOfTravelers
          }
        })

        product.subtitle = "Total $" + item.totalPrice.price.recommendedRetailPrice  + " ,$" + perAdult + " per adult"
        product.subdesc = noAdult + " Adults x $" + perAdult + " + " + noChild + " child x $" + perChild;
        product.buttonoptions= "1";
        radiobox.push(product);
      }
      catch{
        console.log("next")
      }
        
    });
  }
    

    // radiobox = [
    //   {
    //     id: 1,
    //     title: "Sagrada Familia Regular Entry",
    //     content:
    //       "What is included on this option description. Loren ipsum all the facts dolor maer sit consecuteur adisciplining.",
    //     linklabel: "Read more",
    //     url: "#",
    //     subtitle: "Total $171,20 per adult",
    //     subdesc: "2 Adults x $85.60",
    //   },
    //   {
    //     id: 2,
    //     title: "Sagrada Familia Regular Entry + Museum",
    //     content:
    //       "What is included on this option description. Loren ipsum all the facts dolor maer sit consecuteur adisciplining.",
    //     linklabel: "Read more",
    //     url: "#",
    //     subtitle: "Total $171,20 per adult",
    //     subdesc: "2 Adults x $85.60",
    //   },
    //   {
    //     id: 3,
    //     title: "Sagrada Familia Regular Entry + Tower",
    //     content:
    //       "What is included on this option description. Loren ipsum all the facts dolor maer sit consecuteur adisciplining.",
    //     linklabel: "Read more",
    //     url: "#",
    //     subtitle: "Total $171,20 per adult",
    //     subdesc: "2 Adults x $85.60",
    //   },
    // ];
  


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
        <h2 className="header-type2">From ${param1.price} per adult</h2>
        <div className={Styles.duration}>
          Offer ID: 98292 <span className={Styles.durationSeparator}></span>{" "}
          Exp: 1/31/2022
        </div>
        <div className={`${Styles.freeText} mt-2`}>
          Free cancellation available
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
        <div className="form-label">{count} options available</div>

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
                    <div className={Styles.radiobuttonOptions}>
                        <button className={Styles.btn} onClick={() => this.setState({isActive: !this.state.isActive})} data-variant-index="1"> Type 01</button>
                        <button className={Styles.btn} data-variant-index="2"> Type 02</button>
                        <button className={Styles.btn} data-variant-index="3"> Type 03</button>
                        <button className={Styles.btn} data-variant-index="4"> Type 04</button>
                    </div>
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
