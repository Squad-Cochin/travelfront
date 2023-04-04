import React from "react";
import { Container } from "react-bootstrap";
import { ReactDOM } from "react";
import Styles from "./FeatureTable.module.scss";
import Image from "next/image";
import Ftime from "../../../../public/images/duration.svg";
import Activity from "../../../../public/images/city.svg";
import Language from "../../../../public/images/language.svg";
import Contact from "../../../../public/images/contact.svg";
import Phone from "../../../../public/images/phone.svg";
import Mail from "../../../../public/images/mail.svg";
import Site from "../../../../public/images/site.svg";
function Tableitem(props) {
  return (
    <>
      <li className={Styles.tableItem}>
        <span className={Styles.label}>{props.labels}</span>
        <span className={Styles.value}>
          {props.img ? (
            <Image className={Styles.icon} src={props.img} alt="" />
          ) : null}
          {props.values}
        </span>
      </li>
    </>
  );
}
export const FeatureTable = (props) => {

  let duration = '-';
  if(props.productData.itinerary.duration){
    let durationObject = props.productData.itinerary.duration
    if(durationObject.variableDurationToMinutes){
        duration = durationObject.variableDurationToMinutes / 60;
    }
    if(durationObject.fixedDurationInMinutes){
      duration = durationObject.fixedDurationInMinutes / 60;
    }
  }
  //Start or End location 
  let startLocation = '-'
  if(props.productData.logistics.start){
    startLocation = props.productData.logistics.start['0'].description;
  } 
  let endLocation = "-";
  if( props.productData.logistics.end){
    endLocation = props.productData.logistics.end['0'].description;
  } 

  const tablevalues = [
    { id: 1, label: "Duration", value: duration + " hours", icon: Ftime },
    { id: 2, label: "Age range", value: `${props.productData.pricingInfo.ageBands[0].startAge} to ${props.productData.pricingInfo.ageBands[0].endAge} years old` },
    { id: 3, label: "Activity Type", value: props.productData.itinerary.itineraryType, icon: Activity },
    { id: 4, label: "Max Group Size", value: `Max of ${props.productData.pricingInfo.ageBands[0].maxTravelersPerBooking} per group` },
    { id: 5, label: "Start / Finish", value: `${startLocation} / ${endLocation}` },
    {
      id: 6,
      label: "Cities / Destinations",
      value:
        "Hobart - Freycinet - Launceston - Sydney - Alice Spring - Ayers Rock - Cairns",
    },
    { id: 7, label: "Activity Level", value: "Intermediate Cycling" },
    {
      id: 8,
      label: "Language",
      value: "English, Spanish, Frenchs",
      icon: Language,
    },
  ];
  return (
    <>
      <section className={Styles.featureSection}>
        <h2 className={Styles.title}>Features</h2>
        <div className={Styles.tableList}>
          <ul className={Styles.tableListitem}>
            {tablevalues.map((tablevalue) => (
              <Tableitem
                key={tablevalue.id}
                labels={tablevalue.label}
                values={tablevalue.value}
                img={tablevalue.icon}
              />
            ))}
            <li className={Styles.tableItem}>
              <span className={Styles.label}>Contact</span>
              <span className={Styles.value}>
                <Image className={Styles.icon} src={Contact} alt="" />
                Address comes here Postcode City
              </span>
            </li>
            <li className={`socialMedia ${Styles.tableItem}`}>
              <span className={Styles.phone}>
                <Image className={Styles.icon} src={Phone} alt="" />
                <a href="phone">+000 123 456 789</a>
              </span>
              <span className={Styles.mail}>
                <Image className={Styles.icon} src={Mail} alt="" />
                <a href="mail">info@company.com</a>
              </span>
              <span className={Styles.site}>
                <Image className={Styles.icon} src={Site} alt="" />
                <a href="site">www.yourwebsite.com</a>
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default FeatureTable;
