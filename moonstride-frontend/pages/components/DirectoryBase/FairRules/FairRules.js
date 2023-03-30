import React from 'react'
import Styles from './FairRules.module.scss'
import ButtonType from "../../Button/Button";
import Image from 'next/image';
import Link from 'next/link';

const FairRules = (props) => {
  return (
    <div className={Styles.ruleswrapper}>
        <div className={`${Styles.rulesHeader} w-100`}>
        <ul className="d-flex align-items-center p-0 m-0">
            <li style={{ width: "20%" }}>Fare Type</li>
            <li style={{ width: "15%" }}>What Included</li>
            <li style={{ width: "20%" }}>Baggage Included?</li>
            <li style={{ width: "20%" }}>Per Person</li>
            <li style={{ width: "25%" }}></li>
        </ul>
        </div>
        <div className={Styles.rulesData}>
            {props.fairRule.map((item) => {
                return(
                    <ul key={item.id} className= "m-0">
                        <li style={{ width: "20%" }}>
                        {item.type}{" "}
                        <Link href="">
                            <a>Fare Rules</a>
                        </Link>
                        </li>
                        <li style={{ width: "15%" }}>
                            {item.image ? <Image
                                className="pe-1"
                                src= {item.image} 
                                alt="economy"
                                width= {16}
                                height= {16}
                            /> : ""}
                            {item.image1 ? <Image
                                className="pe-1"
                                src= {item.image1} 
                                alt="baggage"
                                width= {16}
                                height= {16}
                            /> : ""}
                            {item.image2 ? <Image
                                className="pe-1"
                                src= {item.image2} 
                                alt="clock"
                                width= {16}
                                height= {16}
                            /> : ""}
                            {item.image3 ? <Image
                                className="pe-1"
                                src= {item.image3} 
                                alt="economy"
                                width= {16}
                                height= {16}
                            /> : ""}
                            {item.image4 ? <Image
                                className="pe-1"
                                src= {item.image4} 
                                alt="economy"
                                width= {16}
                                height= {16}
                            /> : ""}
                        </li>
                        <li style={{ width: "20%" }}>{item.baggage}</li>
                        <li className={Styles.price} style={{ width: "20%" }}>
                        {item.price}
                        </li>
                        <li style={{ width: "25%" }}>
                            <ButtonType className={`${Styles.selectButton} btntype2`} name="Select" />
                        </li>
                    </ul>
                )
            })}
        </div>
    </div>
  )
}

export default FairRules;
FairRules.defaultProps = {
    fairRule: [
        {
          id: "1",
          type: "7kg Carry on bag only",
          baggage: "Carry on bag only",
          price: "US$58.99",
          image: "/images/economy.svg"
        },
        {
          id: "2",
          type: "7kg Carry on bag only",
          baggage: "Carry on bag only",
          price: "US$58.99",
          image: "/images/economy.svg",
          image1: "/images/baggage.svg"
        },
        {
          id: "3",
          type: "7kg Carry on bag only",
          baggage: "Carry on bag only",
          price: "US$88.99",
          image: "/images/clock.svg",
          image1: "/images/economy.svg",
          image2: "/images/baggage.svg"
        },
        {
          id: "4",
          type: "10kg Carry on bag only",
          baggage: "Carry on bag only",
          price: "US$10.99",
          image: "/images/clock.svg",
          image1: "/images/economy.svg",
          image2: "/images/baggage.svg"
        }
    ] 
}
