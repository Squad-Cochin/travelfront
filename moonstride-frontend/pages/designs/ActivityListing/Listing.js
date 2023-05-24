//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
//                            FILE IS A COMPONENT FOR SHOWING LISTING PAGE.                             //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../components/DirectoryBase/Header/Header";
import Head from "next/head";
import ListingSearchbar from "../../components/DirectoryBase/ListingSearchbar/ListingSearchbar";
import ActivityFilter from "../../components/DirectoryBase/ActivityFilter/ActivityFilter";
import ListingProbox from "../../components/DirectoryBase/ListingProbox/ListingProbox";
import Sidebar from "../../components/DirectoryBase/Sidebar/Sidebar";
import ButtonType from "../../components/Button/Button";
import Styles from "./Listing.module.scss";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import loadingimage from "../../../public/moonstride-loader.svg"
import { tourPackages } from "../../api/tourPackages";

// FUNCTION FOR SHOWING LISTING PAGE COMPONENT
const ListingPage = (props) => {

  const [searchData, setSearchData] = useState([]);
  const [filterValues, setFilterData] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [serachResults, setserachResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSorting, setSorting] = useState(false);
  const [headerValue, setheaderValue] = useState('Moonstride');
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(0);
  const [sortValue, setSortValue] = useState('TRAVELER_RATING:DESCENDING');
  useEffect(() => {
    let filters = {};
    let specials = [];
      if(filterValues.length > 0){
        for(let count = 0; count < filterValues.length ; count++){
            let conditionvalue = filterValues[count].split(":")
            if(conditionvalue[0] == 'D'){
              switch(conditionvalue[1]){
                case 'L1':
                  filters.durationInMinutes = {"from": 0, "to": 60};
                  break;
                case 'L4':
                  filters.durationInMinutes = {"from": 60, "to": 240};
                  break;
                case 'L24':
                  filters.durationInMinutes = {"from": 240, "to": 1440};
                  break;
                case 'G24':
                  filters.durationInMinutes = {"from": 1440, "to": ""};
                  break;     
              }  
            }
            if(conditionvalue[0] == 'S'){
              specials.push(conditionvalue[1]);
            }
            else if(conditionvalue[0] == 'R'){
              switch(conditionvalue[1]){
                case '1':
                  filters.rating = {"from": 1, "to": 1};
                  break;
                case '2':
                  filters.rating = {"from": 2, "to": 2};
                  break;
                case '3':
                  filters.rating = {"from": 3, "to": 3};
                  break;
                case '4':
                  filters.rating = {"from": 4, "to": 4};
                  break; 
                case '5':
                  filters.rating = {"from": 5, "to": 5};
                  break;   
              }  
            }
            else if(conditionvalue[0] == 'PF'){
              let rangeValue = conditionvalue[1].split("&")
              filters.lowestPrice = rangeValue[0];
              filters.highestPrice = rangeValue[1];
            }
        }
        filters.flags = specials;
      }
      let searchedData = JSON.parse(sessionStorage.getItem("searchdata")) || [];
      let searchValues = {...searchedData, filters : filters }
      if(page <= 0){
        searchValues.page = 1;
      }
      else{
        searchValues.page = page;
      }
      let sortingData = sortValue.split(':');
      searchValues.sorting = {
        "sort": sortingData[0],
        "order": sortingData[1]
      }
      searchValues.currency = "CHF";
      if(Object.keys(searchedData).length != 0){
        const dataTours =  tourPackages(searchValues);
        dataTours.then((value) => {
          var finalData = [];
          if(value.data.length >= 1){
            if(value.data[0].Result.Code == '400'){
              setIsLoading(false);
              setSorting(false);
              setSearchData(
                []
              )
            }else{
              let products = value.data[0].Result.data
              let count;
              if(page > 1){
                count = page * 15;
              }
              else{
                count = 0;
              }
              products.forEach((element, index) => {
                count = count + 1
                try{
                  let objectData = {
                    "id" : "",
                    "productCode" : "",
                    "title" : "",
                    "image" : "",
                    "type" : "",
                    "time" : "",
                    "text" : "",
                    "price" : "",
                    "rating" : "No ratings",
                    "ratingCount" : "",
                    "buttonText" : "Add to quote"
                  };
                  objectData.id = count;
                  if(element.title){
                    objectData.title = element.title;
                  }
                  if(element.image){
                    objectData.image = element.image.url
                  }
                  if(element.itineraryType){
                    let itineraryType = element.itineraryType.toLowerCase();
                    objectData.type = itineraryType.charAt(0).toUpperCase() + itineraryType.slice(1);
                  }
                  if(element.duration){
                    objectData.time = (element.duration / 60).toFixed(2) + " hours";
                  }
                  if(element.description){
                    objectData.text = element.description;
                  }
                  if(element.fromPrice){
                    objectData.price = element.fromPrice;
                  }
                  if(element.productCode){
                    objectData.productCode = element.productCode;
                  }
                  if(element.reviews){
                    if(element.reviews.combinedAverageRating > 0){
                      let rating = element.reviews.combinedAverageRating.toFixed(1) + '/5';
                      objectData.rating = rating;
                    }
                    if(element.reviews.numberOfReviews){
                      let ratingCount = element.reviews.numberOfReviews + ' ratings';
                      objectData.ratingCount = ratingCount;
                    }
                  }
                  finalData.push(objectData);
                }
                catch{
                  console.log("next")
                } 
              }); 
              
            }
            setIsLoading(false);
            setSorting(false);
            if(value.data[0].Result.totalCount){
              setserachResults(value.data[0].Result.totalCount);
            }
            else{
              setserachResults(0);
            }
            if(page > 1){
              setSearchData(
                searchData.concat(finalData)
              )
            }
            else{
              setSearchData(
                finalData
              )
            }
          }
          else{
            setSorting(false);
            setIsLoading(false);
            setserachResults(0);
            setSearchData(
             []
            )
          }
        })
      }
   
  }, [filterValues, page]);

  useEffect(() => {
    let searchedData = JSON.parse(sessionStorage.getItem("searchdata")) || [];
    if(searchedData.searchTerm){
      let headerValue = `Moonstride: ${searchedData.searchTerm} Tours`;
      setheaderValue(headerValue);
    }
  }, [searchData]);

  let filterdedData = [];
  filterdedData = searchData;
  let limitedArray = filterdedData;
  return (
    <>
      <Head>
        <title>{headerValue}</title>
        <meta
        name="description"
        content="Check out the Index Page..."
        key="desc"
        />
      </Head>
      <Header />
      <div className={Styles.listingpage}>
        <Container>
          <ListingSearchbar template="home" searchData={searchData} setSearchData={setSearchData} setIsLoading={setIsLoading} setserachResults={setserachResults} setPage={setPage} page={page} setFilterData={setFilterData}/>
        </Container>
      </div>
      <Container>
      {serachResults == 0 ? <></> : <ActivityFilter searchData={filterdedData} setSortOrder={setSortOrder} setSearchData={setSearchData} serachResults={serachResults} setSortValue={setSortValue} setPage={setPage} page={page} />}
      </Container>
      {isLoading ? <Loader /> : <ListingComponent searchData={searchData} filterData={filterdedData} setFilterData={setFilterData} limitedArray={limitedArray} limit={limit} setLimit={setLimit} page={page} setPage={setPage} filterValues={filterValues} serachResults={serachResults} setSorting={setSorting} isSorting={isSorting} /> }
    </>
  );
};

export default ListingPage;

function Loader(){
    return( 
      <Container>
        <Row >
          <Col className="text-center">
            <Image src={loadingimage} width="250" height="250" alt="Loader Image"/>
          </Col>
        </Row>
      </Container>
    )
}

function ListingComponent(props){
  
  const setnewLimit = () => {
    if(props.page == 1 || props.page == 0){
      props.setPage(2);
    }
    else{
      let newPage = props.page + 1;
      props.setPage(newPage);
    }
    props.setSorting(true);
  }
  if(props.serachResults > 0){
    return (
      <Container> 
          <Row>
            <Col xl={3} lg={4}>
            <div className={`pageSidebar`}>
              {props.searchData.length == 0 ? <></> : <Sidebar searchData={props.searchData} filterData={props.filterData} setFilterData={props.setFilterData} filterValues={props.filterValues} setPage={props.setPage} page={props.page} />}  
            </div>
            </Col>
            <Col xl={9} lg={8}>
              <Row>
                {props.limitedArray.length == 0 ? <></> : <ListingProbox boxData = {props.limitedArray}/>}
                <div className="text-center mb-3">
                  {props.serachResults == 0 || props.serachResults == props.limitedArray.length ? <></> : <ButtonType className="btntype2" onClick={setnewLimit} name={props.isSorting ? `Loading...`: `Show More`} />}
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
    )
  }
  else{
    return (
      <Container> 
          <Row>
            <Col xl={3} lg={4}>
            <div className={`pageSidebar`}>
              <Sidebar searchData={props.searchData} filterData={props.filterData} setFilterData={props.setFilterData} filterValues={props.filterValues} setPage={props.setPage} page={props.page} />  
                
            </div>
            </Col>
            <Col xl={9} lg={8}>
              <div className="text-center mb-3">
                <br/><br/>
                No Results Found..
               </div>
            </Col>
          </Row>
        </Container>
    )
  }
  
}