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
    return (
        <aside>
            <div className={Styles.sidebar_booking_section}>
                <div className={Styles.sidebar_box}>
                    <h2 className={Styles.booking_title}>Your Booking</h2>
                        <div className={Styles.booked_trip}>
                            <h1 className={Styles.booking_product_title}>Agra Fort Fast Track Entry E-ticket</h1>
                            <div className={Styles.booking_details}>
                                <div className={Styles.Details_value}> <BsCalendar3 /> <span>25 May 2023</span></div>   
                                <div className={Styles.Details_value}> <FiClock /> <span>30 Days</span></div>   
                                <div className={Styles.Details_value}> <ImTicket /> 1 Tickets <span>(Adults: 2, Children 2 )</span></div>   
                                <div className={Styles.Details_value}> <RiTimerLine /> 10:00 AM</div>   
                                
                               
                            </div>
                            <button className={Styles.trash}><IoMdTrash /></button>
                        </div>  

                        <div className={Styles.booked_trip}>
                            <h1 className={Styles.booking_product_title}>Private Mercara Coorg Coffee and Spice Estate Tour</h1>
                            <div className={Styles.booking_details}>
                                <div className={Styles.Details_value}> <BsCalendar3 /> <span>12 June 2023</span></div>   
                                <div className={Styles.Details_value}> <FiClock /> <span>8 Days</span></div>   
                                <div className={Styles.Details_value}> <ImTicket /> 1 Tickets <span>(Adults: 2)</span></div>   
                                <div className={Styles.Details_value}> <RiTimerLine /> 12:30 PM</div>   
                                
                               
                            </div>
                            <button className={Styles.trash}><IoMdTrash /></button>
                        </div>  

                        <button className={Styles.btntype1}>Confirm</button>  
                </div>
            </div>
        </aside>
    );
};

export default SidebarBooking;

