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
  let duration, startLocation, endLocation, startAge, endAge, itineraryType, maxGroupSize = '-';
  if(props.productData.duration){
    duration = props.productData.duration / 60;
  }
  //Start or End location 
  if(props.productData.startPoint){
    startLocation = props.productData.startPoint;
  } 
  if(props.productData.endingPoint){
    endLocation = props.productData.endingPoint;
  }
  if(props.productData.ageRangeFrom){
    startAge = props.productData.ageRangeFrom
  }
  if(props.productData.ageRangeTo){
    endAge = props.productData.ageRangeTo
  }
  if(props.productData.itineraryType){
    itineraryType = props.productData.itineraryType
  }
  if(props.productData.maxGroupSize){
    maxGroupSize = props.productData.maxGroupSize
  }


  const tablevalues = [
    { id: 1, label: "Duration", value: duration + " hours", icon: Ftime },
    { id: 2, label: "Age range", value: `${startAge} to ${endAge} years old` },
    { id: 3, label: "Activity Type", value: itineraryType, icon: Activity },
    { id: 4, label: "Max Group Size", value: `Max of ${maxGroupSize} per group` },
    { id: 5, label: "Start / Finish", value: `${startLocation} / ${endLocation}` },
    { id: 6, label: "", value: "" }
    // {
    //   id: 6,
    //   label: "Cities / Destinations",
    //   value:
    //     "Hobart - Freycinet - Launceston - Sydney - Alice Spring - Ayers Rock - Cairns",
    // },
    // { id: 7, label: "Activity Level", value: "Intermediate Cycling" },
    // {
    //   id: 8,
    //   label: "Language",
    //   value: "English, Spanish, Frenchs",
    //   icon: Language,
    // },
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
                  {props.contactDetails.address}
              </span>
            </li>
            <li className={`socialMedia ${Styles.tableItem}`}>
              <span className={Styles.phone}>
                <Image className={Styles.icon} src={Phone} alt="" />
                <a href="phone">{props.contactDetails.email}</a>
              </span>
              <span className={Styles.mail}>
                <Image className={Styles.icon} src={Mail} alt="" />
                <a href="mail">{props.contactDetails.email}</a>
              </span>
              {/* <span className={Styles.site}>
                <Image className={Styles.icon} src={Site} alt="" />
                <a href="site">www.yourwebsite.com</a>
              </span> */}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default FeatureTable;
