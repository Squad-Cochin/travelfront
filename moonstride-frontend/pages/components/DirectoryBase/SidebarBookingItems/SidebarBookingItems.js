///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
//                           COMPONENT FOR SHOWING CART ITEMS                                //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import { BsCalendar3 } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { RiTimerLine } from "react-icons/ri";
import { ImTicket } from "react-icons/im";
import { IoMdTrash } from "react-icons/io";


// *Slide bar css page 
import Styles from "./SidebarBookingItems.module.scss";

// FUNCTION FOR CART COMPONENT
const SidebarBooking = (props) => {
    // FUNCTION FOR DELETE ITEM FROM CART
    const deleteFromCart = (orderId)=>{
        let sessionData = JSON.parse(sessionStorage.getItem('cart'));
        if (sessionData && Array.isArray(sessionData)) {
            const updatedArray = sessionData.filter(item => item.orderId !== orderId);
            sessionData = updatedArray;
            sessionStorage.setItem('cart', JSON.stringify(sessionData));
            props.setcartdata(updatedArray)
        }
    } 
    let count = props.cartData.length;
    return (
        <aside>
            <div className={Styles.sidebar_booking_section}>
                <div className={Styles.sidebar_box}>
                    <h2 className={Styles.booking_title}>Your Booking({count})</h2>
                    {props.cartData.map((item, index)=>{
                        return(<div className={Styles.booked_trip} key={index}>
                            <h1 className={Styles.booking_product_title}>{item.title}</h1>
                            <div className={Styles.booking_details}>
                                <div className={Styles.Details_value}> <BsCalendar3 /> <span>{item.startDate}</span></div>   
                                <div className={Styles.Details_value}> <FiClock /> <span>{item.duration} hours</span></div>   
                                <div className={Styles.Details_value}> <ImTicket /> 1 Tickets <span>(Adults: {item.passengerDetails.adult}, Children: {item.passengerDetails.child} )</span></div>   
                                <div className={Styles.Details_value}> <RiTimerLine /> {item.startingTime}</div>                
                            </div>
                            <button className={Styles.trash} onClick={()=> deleteFromCart(item.orderId)}><IoMdTrash /></button>
                        </div> )
                         
                    })}
                        <button className={Styles.btntype1}>Confirm</button>  
                </div>
            </div>
        </aside>
    );
};

SidebarBooking.defaultProps = {
    cartData : []
}

export default SidebarBooking;

