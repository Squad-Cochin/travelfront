import React from 'react'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import Select,{components} from 'react-select';
import { Image } from "react-bootstrap"
import styles from "./TransferListing.module.scss"
function TransferHeader2() {
  const handleClick = () => {
    document.body.classList.toggle("sidebarActive");
  };
    const sortByOptions = [
        { value: "Price (low to high)", label: "Price (low to high)" ,key:"1"},
        { value: "Price (high to low)", label: "Price (high to low)" ,key:"2"},
        { value: "Date (New to Old)", label: "Date (New to Old)" ,key:"3"},
        { value: "Date (Old to New)", label: "Date (Old to New)" ,key:"4"},
        { value: "Discount", label: "Discount" ,key:"5"},
        { value: "Customer Rating", label: "Customer Rating" ,key:"6"},
      ];
  return (
    <>
    <Row className="mt-2 mb-2 pt-3 pb-2 align-items-center">
        <Col md={6}>
            <p className={styles.sortByTextLeft}>Airport transportation from BCN to Hyatt Regency Barcelona Tower</p>
            <p className={styles.sortByTextLeft2}>10  Total Search Results  •  Total includes taxes and fees</p>
        </Col>
        <Col md={6} className={`text-end ${styles.sortBySelect}`}>
          <div className={styles.FilterButton} onClick={handleClick}>
            <svg stroke="#fe6652" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
          </div>
          <div>
            <span className={`d-inline-block align-middle me-2 ${styles.SortByText}`}>Sort By </span>
            <Select
              defaultValue={sortByOptions[2]}
              options={sortByOptions}
              styles={{width:"230px", display:"inline-block"}}
              components={{
                IndicatorSeparator: () => null,
                DropdownIndicator:(props)=>{
                    return (
                        <components.DropdownIndicator {...props}>
                          <Image  src='../images/transferListing/arrow.svg' alt="image" width={12} height={12} className="p-0"/>
                        </components.DropdownIndicator>
                      );
                }
              }}
            />
          </div>
        </Col>
    </Row>
    </>
  )
}
export default TransferHeader2
