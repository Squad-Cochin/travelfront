import React from 'react';
import Styles from './BrandFair.module.scss';
import ButtonType from '../../Button/Button';
import Image from 'next/image';

function BrandFair(props) {
  return (
    <div className={Styles.brandFare}>
        <div className={Styles.brandHeader}>
            <ul className="d-flex p-0 m-0">
            <li style={{ width: "15%" }}> Airline </li>
            <li style={{ width: "20%" }}> Baggage </li>
            <li style={{ width: "20%" }}> Seat Assignment </li>
            <li style={{ width: "15%" }}> Travel Services </li>
            <li style={{ width: "30%" }}> Additional details </li>
            </ul>
        </div>
        <div className={Styles.fareData}>
            {props.brandFair.map((list) => {
                return(
                <div key={list.id} className={`${Styles.dataWrapper} d-flex`}>
                    <div className={Styles.dataTitle} style={{ width: "15%" }} data-title="Airline" >
                        <ul>
                            {list.airlineData.map((item) => {
                                return(
                                    <li key={item.id} id={item.id}>
                                        {item.image ? <Image
                                            src= {item.image} 
                                            alt="Plane"
                                            class="img-responsive"
                                            width= {70}
                                            height= {26}
                                        /> : ""}
                                        {item.title}
                                    </li>
                                )
                            })}
                        </ul>
                        <ButtonType className={`${Styles.brandButton} btntype2`} name="Select" />
                    </div>
                    <div className={Styles.dataTitle} style={{ width: "20%" }} data-title="Baggage" >
                        <ul>
                            {list.baggageData.map((item1) => {
                                return(
                                    <li key={item1.id} id={item1.id}>{item1.title}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={Styles.dataTitle} style={{ width: "20%" }} data-title="Seat Assignment" >
                        <ul>
                            {list.seatData.map((item2) => {
                                return(
                                    <li key={item2.id} id={item2.id}>{item2.title}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={Styles.dataTitle} style={{ width: "15%" }} data-title="Travel Services">
                        <ul>
                            {list.travelData.map((item3) => {
                                return(
                                    <li key={item3.id} id={item3.id}>{item3.title}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={Styles.dataTitle} style={{ width: "30%" }} data-title="Additional details">
                        <ul>
                            {list.additionalData.map((item4) => {
                                return(
                                    <li key={item4.id} id={item4.id}>{item4.title}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default BrandFair;
BrandFair.defaultProps = {
    brandFair: [
        {
          id: "1",
          airlineData: [
            {
              id: "1",
              image: "/images/airlines.png",
              title: "American airlines"
            },
            {
              id: "2",
              title: "Basic Economy"
            },
            {
              id: "3",
              title: "USD 445.56"
            }
          ],
          baggageData: [
            {
              id: "1",
              title: "First checked bag for USD35.00 and Se..."
            },
            {
              id: "2",
              title: "1 personal carry on item"
            }
          ],
          seatData: [
            {
              id: "1",
              title: "Paid"
            },
            {
              id: "2",
              title: "Seat assigned or select anytime for a fee"
            }
          ],
          travelData: [
            {
              id: "1",
              title: "Display but not offered"
            },
            {
              id: "2",
              title: "Standard boarding"
            }
          ],
          additionalData: [
            {
              id: "1",
              title: "Advanced change allowed for USD99.00"
            },
            {
              id: "2",
              title: "Before departure"
            },
            {
              id: "3",
              title: " Non refundabl"
            },
            {
              id: "4",
              title: "Anytime"
            },
            {
              id: "5",
              title: "Advanced change not allowed"
            },
            {
              id: "6",
              title: "After departure"
            },
            {
              id: "7",
              title: "Displayed but not offered"
            },
            {
              id: "8",
              title: "Select seat at check-in"
            },
            {
              id: "9",
              title: "Upgrad not allowed"
            }
          ]
        },
      
        {
          id: "2",
          airlineData: [
            {
              id: "1",
              image: "/images/airlines.png",
              title: "American airlines"
            },
            {
              id: "2",
              title: "Basic Economy"
            },
            {
              id: "3",
              title: "USD 550.56"
            }
          ],
          baggageData: [
            {
              id: "1",
              title: "First checked bag for USD35.00 and Se..."
            },
            {
              id: "2",
              title: "1 personal carry on item"
            }
          ],
          seatData: [
            {
              id: "1",
              title: "Paid"
            },
            {
              id: "2",
              title: "Seat assigned or select anytime for a fee"
            }
          ],
          travelData: [
            {
              id: "1",
              title: "Display but not offered"
            },
            {
              id: "2",
              title: "Standard boarding"
            }
          ],
          additionalData: [
            {
              id: "1",
              title: "Advanced change allowed for USD99.00"
            },
            {
              id: "2",
              title: "Before departure"
            },
            {
              id: "3",
              title: " Non refundabl"
            },
            {
              id: "4",
              title: "Anytime"
            },
            {
              id: "5",
              title: "Advanced change not allowed"
            },
            {
              id: "6",
              title: "After departure"
            },
            {
              id: "7",
              title: "Displayed but not offered"
            },
            {
              id: "8",
              title: "Select seat at check-in"
            },
            {
              id: "9",
              title: "Upgrad not allowed"
            }
          ]
        }
    ]
}