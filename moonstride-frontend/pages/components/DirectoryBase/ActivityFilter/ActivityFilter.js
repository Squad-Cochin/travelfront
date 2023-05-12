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
    console.log(value);
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
    { value: "NEW_ON_VIATOR:ASCENDING", label: "Date (New to Old)" , key:"3"},
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
              <svg stroke="#fe6652" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
            </div>
            <div>
              <span className="d-inline-block align-middle me-2">Sort by</span>
              {/* We will show the select dropdown here */}
              <Select class="d-inline-block sort-select" label="Sort by" defaultValue={sortByOptions[2]} options={sortByOptions} onChange={handleSort}/>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ActivityFilter;
