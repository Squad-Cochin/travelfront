// {On the component page that displays the homepage, this page is used to sort the activities and show search results.
// This component is displayed under the location search.}

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Select,{components} from 'react-select';
import Styles from "./ActivityFilter.module.scss";

const ActivityFilter = (props) => {

  // This function is used to show the sidebar.
  const handleClick = () => {
    document.body.classList.toggle("sidebarActive");
  };

  const handleSort = (e) => {
    let value = e.value
    let data = props.searchData;
    props.setSortValue(value);
    props.page == 0 ? props.setPage(1) : props.setPage(0);
    // switch (value) {
    //   case 'PLH':
    //     let sortedData = data.sort((a,b) => a.price - b.price);
    //     console.log(sortedData);
    //     props.setSearchData(
    //       sortedData
    //     );
    //     props.setSortOrder(value);
    //     break;
    //   case 'PHL':
    //     let sortedDataDesc =  data.sort((a,b) => b.price - a.price);
    //     console.log(sortedDataDesc);
    //     props.setSearchData(sortedDataDesc);
    //     props.setSortOrder(value);
    //     break;
    //   case 'CRT':
    //     let sortedDataCust =  data.sort((a,b) => b.price - a.price);
    //     console.log(sortedDataCust);
    //     props.setSearchData(sortedDataCust);
    //     props.setSortOrder(value);

    //     break;
    //   default:
    //     console.log("Invalid day");
    // }
  }

  const sortByOptions = [
    { value: "PRICE:ASCENDING", label: "Price (low to high)" ,key:"1"},
    { value: "PRICE:DESCENDING", label: "Price (high to low)" ,key:"2"},
    //{ value: "NEW_ON_VIATOR:ASCENDING", label: "Date (New to Old)" , key:"3"},
    // { value: "NEW_ON_VIATOR:DESCENDING", label: "Date (Old to New)" ,key:"4"},
    { value: "TRAVELER_RATING:DESCENDING", label: "Customer Rating" ,key:"5"}
  ];
  let productCount = props.serachResults
  
  return (
    <div className={Styles.filterbox}>
      <Row className="align-items-center">
        <Col md={6}>
          
          <span className={Styles.filterpoint}>{productCount} Total Search Results</span>
          {/* <span className={Styles.filterpoint}>
            Total includes taxes and fees
          </span> */}
        </Col>
        <Col md={6} className={`${Styles.sortOption} text-end`}>
          <div className={Styles.filterWrapper}>
        
            <div className={Styles.FilterButton} onClick={handleClick}>
            <svg height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M4.40675 7.25H3C2.44772 7.25 2 6.80228 2 6.25C2 5.69772 2.44772 5.25 3 5.25H4.40675C4.82853 3.94437 6.05398 3 7.5 3C8.94602 3 10.1715 3.94437 10.5933 5.25H25C25.5523 5.25 26 5.69772 26 6.25C26 6.80228 25.5523 7.25 25 7.25H10.5933C10.1715 8.55563 8.94602 9.5 7.5 9.5C6.05398 9.5 4.82853 8.55563 4.40675 7.25ZM5.75 6.25C5.75 5.2835 6.5335 4.5 7.5 4.5C8.4665 4.5 9.25 5.2835 9.25 6.25C9.25 7.2165 8.4665 8 7.5 8C6.5335 8 5.75 7.2165 5.75 6.25Z" fill="black" fill-rule="evenodd"/><path clip-rule="evenodd" d="M3 15.25H17.4458C17.8676 16.5556 19.093 17.5 20.5391 17.5C21.9851 17.5 23.2105 16.5556 23.6323 15.25H25C25.5523 15.25 26 14.8023 26 14.25C26 13.6977 25.5523 13.25 25 13.25H23.6323C23.2105 11.9444 21.9851 11 20.5391 11C19.093 11 17.8676 11.9444 17.4458 13.25H3C2.44772 13.25 2 13.6977 2 14.25C2 14.8023 2.44772 15.25 3 15.25ZM20.5391 12.5C19.5726 12.5 18.7891 13.2835 18.7891 14.25C18.7891 15.2165 19.5726 16 20.5391 16C21.5056 16 22.2891 15.2165 22.2891 14.25C22.2891 13.2835 21.5056 12.5 20.5391 12.5Z" fill="black" fill-rule="evenodd"/><path clip-rule="evenodd" d="M10.4067 23.25H3C2.44772 23.25 2 22.8023 2 22.25C2 21.6977 2.44772 21.25 3 21.25H10.4067C10.8285 19.9444 12.054 19 13.5 19C14.946 19 16.1715 19.9444 16.5933 21.25H25C25.5523 21.25 26 21.6977 26 22.25C26 22.8023 25.5523 23.25 25 23.25H16.5933C16.1715 24.5556 14.946 25.5 13.5 25.5C12.054 25.5 10.8285 24.5556 10.4067 23.25ZM11.75 22.25C11.75 21.2835 12.5335 20.5 13.5 20.5C14.4665 20.5 15.25 21.2835 15.25 22.25C15.25 23.2165 14.4665 24 13.5 24C12.5335 24 11.75 23.2165 11.75 22.25Z" fill="black" fill-rule="evenodd"/></svg>

            {/* <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M20 36h8v-4h-8v4zM6 12v4h36v-4H6zm6 14h24v-4H12v4z"/><path d="M0 0h48v48H0z" fill="none"/></svg> */}
              {/* <svg stroke="#fe6652" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg> */}
            </div>
            <div>
              <span className="d-inline-block align-middle me-2">Sort by</span>
              {/* We will show the select dropdown here */}
              <Select class="d-inline-block sort-select" label="Sort by" defaultValue={sortByOptions[0]} options={sortByOptions} onChange={handleSort}/>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ActivityFilter;
