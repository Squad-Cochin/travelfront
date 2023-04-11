import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../components/DirectoryBase/Header/Header";
//import Header from "../../components/DirectoryBase1/Header/Header";
import ListingSearchbar from "../../components/DirectoryBase/ListingSearchbar/ListingSearchbar";
import ActivityFilter from "../../components/DirectoryBase/ActivityFilter/ActivityFilter";
import ListingProbox from "../../components/DirectoryBase/ListingProbox/ListingProbox";
import Sidebar from "../../components/DirectoryBase/Sidebar/Sidebar";
import ButtonType from "../../components/Button/Button";
import Styles from "./Listing.module.scss";
import React, { useState, useEffect } from "react";

const ListingPage = (props) => {

  const [searchData, setSearchData] = useState([]);
  const [filterValues, setFilterData] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [limit, setLimit] = useState(10);

  if(searchData.length > 0){
    let searchedData = JSON.parse(localStorage.getItem("searchdata")) || [];
    if(searchedData.searchTerm){
      let headerValue = `Moonstride: ${searchedData.searchTerm} Tours`;
      props.setheaderValue(headerValue)
    }
  }
  else{
    props.setheaderValue('Moonstride');
  }  

  const setnewLimit = () => {
    let newlimit = limit + 10;
    setLimit(newlimit)
  }

  // Function to update the filter state
  const updateFilter = (value) => {
    setSearchData(value);
  };
  let filterdedData = [];
  if(filterValues.length > 0){
     filterdedData = searchData.filter((item) => {
      let returnFlag = false
      for(let count = 0; count < filterValues.length ; count++){
         let conditionvalue = filterValues[count].split(":")
         if(conditionvalue[0] == 'T'){
            
            if(item.type == conditionvalue[1]){
              returnFlag = true
            }
         }
         else if(conditionvalue[0] == 'B'){
            switch(conditionvalue[1]){
              case 'L25':
                if(item.price < 25){
                  returnFlag = true
                }
                break;
              case 'L50':
                if(item.price > 25 && item.price < 50){
                  returnFlag = true
                }
                break;
              case 'L75':
                if(item.price > 50 && item.price < 75){
                  returnFlag = true
                }
                break;
              case 'L100':
                if(item.price > 75 && item.price < 100){
                  returnFlag = true
                }
                break;
              case 'G100':
                if(item.price > 100){
                  returnFlag = true
                }
                break;       
            }  
            
         }
         else if(conditionvalue[0] == 'D'){
          switch(conditionvalue[1]){
            case 'L1':
              if(item.durationValue < 1){
                returnFlag = true
              }
              break;
            case 'L4':
              if(item.durationValue > 1 && item.durationValue < 4){
                returnFlag = true
              }
              break;
            case 'L24':
              if(item.durationValue > 4 && item.durationValue < 24){
                returnFlag = true
              }
              break;
            case 'G24':
              if(item.durationValue > 24){
                returnFlag = true
              }
              break;     
          }  
        }
        else if(conditionvalue[0] == 'NA'){
          if (item.title.includes(conditionvalue[1])) {
            returnFlag = true;
          }
        }
        else if(conditionvalue[0] == 'PF'){
          
          let rangeValue = conditionvalue[1].split("&")
          if(item.price > rangeValue[0] && item.price < rangeValue[1]){
            returnFlag = true;
          }
        }
      }
      return returnFlag;
    });
   
  }
  else{
    filterdedData = searchData;
    
  }
  let limitedArray = filterdedData.slice(0, limit);
  return (
    <>
      <Header />
      <div className={Styles.listingpage}>
        <Container>
          <ListingSearchbar template="home" searchData={searchData} setSearchData={setSearchData} />
        </Container>
      </div>

      <Container>
       <ActivityFilter searchData={filterdedData} setSortOrder={setSortOrder} setSearchData={setSearchData}/>   
      </Container>
      <Container>
        <Row>
          <Col xl={3} lg={4}>
          <div className={`pageSidebar`}>
            {limitedArray.length == 0 ? <>No Results Found</> : <Sidebar searchData={searchData} filterData={filterdedData} setFilterData={setFilterData}/>}  
              
          </div>
          </Col>
          <Col xl={9} lg={8}>
              {limitedArray.length == 0 ? <></> : <ListingProbox boxData = {limitedArray}/>}
            <div className="text-center">
              {limitedArray.length == 0 ? <></> : <ButtonType className="btntype2" onClick={setnewLimit} name="Show More" />}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ListingPage;

const boxData = [
  {
    id: 1,
    title: "Barcelona Sailing Experience - Sunset",
    type: "Cruises and water sports",
    time: "3 hours",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit..",
    linkText: "More details",
    price: "$21.00",
    rating: "4.5/5",
    ratingCount: "68 ratings",
    buttonText: "Book"
  },
  {
    id: 2,
    title: "Barcelona Sailing Experience - Sunset",
    type: "Cruises and water sports",
    time: "2 hours",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit..",
    linkText: "More details",
    price: "$12.00",
    rating: "4.7/5",
    ratingCount: "68 ratings",
    buttonText: "Book"
  },
  {
    id: 3,
    title: "Barcelona Sailing Experience - Sunset",
    type: "Cruises and water sports",
    time: "5 hours",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit..",
    linkText: "More details",
    price: "$51.00",
    rating: "4.4/5",
    ratingCount: "68 ratings",
    buttonText: "Book"
  }
]
