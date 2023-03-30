import React from 'react'
import Styles from './DetailSidebar.module.scss'
import ButtonType from "../../Button/Button";
import Link from 'next/link';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
const DetailSidebar = (props) => {
  return (
    <aside>
        <div className={Styles.sidebar_section}>
            <h2 className={`${Styles.sidebar_header}`}>Price Breakdown</h2>
            <div className={Styles.sidebarBox}>
                <div className={Styles.price}>{props.pricePerday}</div>
                <div className={Styles.perDay}>per day</div>
                <div className={Styles.freeCancel}>
                    <span className={Styles.freeCancelTxt}>Free cancellation</span>
                    <span className={Styles.freeCancelTxt}>Pay at pick-up</span> 
                </div>
                <ButtonType className={"btntype1 w-100 mt-3"} name="Reserve"/>
            </div>
            <h2 className={`${Styles.sidebar_header2}`}>Your Booking</h2>
            <div className={Styles.sidebarBoxBottom}>
                <div className={Styles.carDetailTitle}>Car Details</div>
                <div className={Styles.pickupDiv}>
                    <span className={Styles.pickupTxt}>Pay at pick-up</span>
                    <div className='d-flex'>
                        <span className={Styles.carRentailTxt}>Car rental fee x 8 days</span>
                        <span className={Styles.carRentailTxtprice}>{props.daysPrice}</span>
                    </div>
                    <div className='d-flex'>
                        <span className={Styles.carRentailTxt}>Taxes and fees</span>
                        <span className={Styles.carRentailTxtprice}>{props.taxPrice}</span>
                    </div>
                </div>
                <div className={Styles.totalDivOuter}>
                    <div className={`d-flex ${Styles.totalDiv}`}>
                        <span className={Styles.totalTxt}>Total</span>
                        <span className={Styles.totalTxtPrice}>{props.totlePrice}</span>
                    </div>
                    <div className='d-flex'>
                        <span className={Styles.totalPickTxt}>Pay at pick-up</span>
                        <span className={Styles.totalPickTxtPrice}>{props.pickupPrice}</span>
                    </div>
                    <div className='d-flex'>
                        <span className={Styles.totalPickTxt}>Pay now</span>
                        <span className={Styles.totalPickTxtPrice}>{props.paynowPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    </aside>
  )
}

function TravelSidebar(props) {
    return (
        <>
            <h3 className={`${Styles.title} header-type3 m-0`}>Selected Flights</h3>
           {props.travelDetail.map((detail) => {
            return(
                <>
                    <div className={Styles.sidebarContent}>
                        <div className={Styles.flightDetail}>
                            <h3 className={`${Styles.sidebarTitle} header-type3 m-0`}>{detail.title}</h3>
                            <div>
                                <p className={`${Styles.flightTitle} m-0`}>Outbound Flight</p>
                                <ul className={`${Styles.flightInfo} m-0`}>
                                    <li className={Styles.head}><span className={Styles.detail}>Departing From: </span>{detail.outboundDeparting}</li>
                                    <li className={Styles.head}><span className={Styles.detail}>Arriving To:</span>{detail.outboundArriving}</li>
                                    <li className={Styles.head}><span className={Styles.detail}>Airline: </span>{detail.outboundAirline}</li>
                                    <li className={Styles.head}><span className={Styles.detail}>Fare Type: </span><Link href=""><a className={Styles.fairTypeLink}>{detail.outboundFaretype}</a></Link></li>
                                    <li><span className={Styles.detail}>1 Adult(s)</span></li>
                                </ul>
                            </div>

                            <div>
                                <p className={`${Styles.flightTitle} p-0 m-0`}>Inbound Flight</p>
                                <ul className={`${Styles.flightInfo} m-0`}>
                                    <li className={Styles.head}><span className={Styles.detail}>Departing From: </span>{detail.inboundDeparting}</li>
                                    <li className={Styles.head}><span className={Styles.detail}>Arriving To:</span>{detail.inboundArriving}</li>
                                    <li className={Styles.head}><span className={Styles.detail}>Airline: </span>{detail.inboundAirline}</li>
                                    <li className={Styles.head}><span className={Styles.detail}>Fare Type: </span><Link href=""><a className={Styles.fairTypeLink}>{detail.inboundFaretype}</a></Link></li>
                                    <li><span className={Styles.detail}>1 Adult(s)</span></li>
                                </ul>
                            </div>
                               
                        </div>
                        <div className={Styles.price}>
                        <h3 className={`${Styles.priceTitle} header-type3 m-0`}>Price Breakdown</h3>
                            {/* <span className={Styles.head}>Price Breakdown</span> */}
                        </div>
                        <div className={Styles.flightCost}>
                            <Row className={Styles.subTotal}>
                                <Col xs={6} className={Styles.sidebarPrice}>Flight Price:</Col>
                                <Col xs={6} className={Styles.finalPrice}>$4357.95</Col>
                            </Row>
                            <Row className={Styles.total}>
                                <Col xs={6} className={Styles.sidebarPrice}>Total Cost:</Col>
                                <Col xs={6} className={Styles.finalPrice}>$4357.95</Col>
                            </Row>
                        </div>
                    </div>
                </>
            )
           })} 
        </>
    )
}

TravelSidebar.defaultProps = {
    travelDetail:[
        {
            id:1,
            title: "Flight Details",
            outboundDeparting:"Aberdeen Regional Airport (ABR) , 12 Apr 2023 | 06:50 AM",
            outboundArriving:" Dubai  Intl. Airport (DXB) , 13 Apr 2023 | 10:35 PM, Terminal: 1",
            outboundAirline:" Delta Air Lines (DL4299)",
            outboundFaretype: "Refundable Main Cabin (B)",
            inboundDeparting:"Dubai Intl. Airport (DXB) , 18 May 2023 | 12:55 AM , Terminal: 1",
            inboundArriving:"Aberdeen Regional Airport (ABR) , 18 May 2023 | 10:33 PM",
            inboundAirline:"Delta Air Lines (DL9385)",
            inboundFaretype:"Refundable Main Cabin (Q)"
        }
    ]
}

export default DetailSidebar;
export {TravelSidebar};