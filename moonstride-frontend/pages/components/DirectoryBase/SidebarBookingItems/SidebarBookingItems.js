import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { BsCalendar3 } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { RiTimerLine } from "react-icons/ri";
import { ImTicket } from "react-icons/im";
import { IoMdTrash } from "react-icons/io";


// *Slide bar css page 
import Styles from "./SidebarBookingItems.module.scss";

const SidebarBooking = (props) => {
    let count = data.length;
    return (
        <aside>
            <div className={Styles.sidebar_booking_section}>
                <div className={Styles.sidebar_box}>
                    <h2 className={Styles.booking_title}>Your Booking({count})</h2>
                    {data.map((item, index)=>{
                        return(<div className={Styles.booked_trip} key={index}>
                            <h1 className={Styles.booking_product_title}>{item.title}</h1>
                            <div className={Styles.booking_details}>
                                <div className={Styles.Details_value}> <BsCalendar3 /> <span>{item.startDate}</span></div>   
                                <div className={Styles.Details_value}> <FiClock /> <span>{item.duration} hours</span></div>   
                                <div className={Styles.Details_value}> <ImTicket /> 1 Tickets <span>(Adults: {item.paxMix.adult}, Children: {item.paxMix.child} )</span></div>   
                                <div className={Styles.Details_value}> <RiTimerLine /> {item.startingTime}</div>                
                            </div>
                            <button className={Styles.trash}><IoMdTrash /></button>
                        </div> )
                         
                    })}
                        <button className={Styles.btntype1}>Confirm</button>  
                </div>
            </div>
        </aside>
    );
};

let data = [
    {
        title : "Agra Fort Fast Track Entry E-ticket",
        startDate : "25 May 2023",
        duration : 32,
        paxMix : {
            adult : 2,
            child : 2
        },
        startingTime : "10:00 AM"
    },
    {
        title : "Agra Fort Fast Track Entry E-ticket",
        startDate : "25 May 2023",
        duration : 32,
        paxMix : {
            adult : 2,
            child : 2
        },
        startingTime : "10:00 AM"
    },
    {
        title : "Private Mercara Coorg Coffee and Spice Estate Tour",
        startDate : "12 June 2023",
        duration : 12,
        paxMix : {
            adult : 2,
            child : 3
        },
        startingTime : "02:00 PM"
    }  
]

export default SidebarBooking;

