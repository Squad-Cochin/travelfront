import React from 'react'
import Styles from './BookingProcess.module.scss';
import { useState } from 'react';

const BookingProcess = (props) => {
    const [activeTab, setActiveTab] = useState(1)
  return (
    <div className={`${Styles.bookingProcess}`}>
        {props.processDetail.map((data) => {
            return(
                <div className={`${Styles.wrapper} d-flex align-items-center`} key={data.id}>
                        <div className={`${Styles.iconWrapper} ${activeTab >= data.id && Styles.successProcess} ${activeTab === (data.id) - 1 && Styles.currentProcess} position-relative`} onClick = {() => setActiveTab(data.id - 1)}>
                    </div>
                    <div className={`${Styles.titleWrapper} d-flex align-items-center`}>
                        <span className={Styles.title}>{data.title}</span>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default BookingProcess;
BookingProcess.defaultProps ={
    processDetail: [
        {
            id: 1,
            title: "Search"
        },
        {
            id: 2,
            title: "Choose Hotel"
        },
        {
            id: 3,
            title: "Choose Flight"
        },
        {
            id: 4,
            title: "Choose Extras"
        },
        {
            id: 5,
            title: "Book"
        }
    ] 
}