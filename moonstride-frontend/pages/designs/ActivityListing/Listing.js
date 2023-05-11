import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../components/DirectoryBase/Header/Header";
import Head from "next/head";
//import Header from "../../components/DirectoryBase1/Header/Header";
import ListingSearchbar from "../../components/DirectoryBase/ListingSearchbar/ListingSearchbar";
import ActivityFilter from "../../components/DirectoryBase/ActivityFilter/ActivityFilter";
import ListingProbox from "../../components/DirectoryBase/ListingProbox/ListingProbox";
import Sidebar from "../../components/DirectoryBase/Sidebar/Sidebar";
import ButtonType from "../../components/Button/Button";
import Styles from "./Listing.module.scss";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import loadingimage from "../../../public/images/circle-loader.gif"
import { tourPackages } from "../../api/tourPackages";

const ListingPage = (props) => {

  const [searchData, setSearchData] = useState([]);
  const [filterValues, setFilterData] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [serachResults, setserachResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [headerValue, setheaderValue] = useState('Moonstride');
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  useEffect(() => {
    let filters = {};
      //let filters = {};
      if(filterValues.length > 0){
        //var finalData = [];
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
            else if(conditionvalue[0] == 'R'){
              switch(conditionvalue[1]){
                case '1':
                  filters.rating = {"from": 1, "to": 5};
                  break;
                case '2':
                  filters.rating = {"from": 2, "to": 5};
                  break;
                case '3':
                  filters.rating = {"from": 3, "to": 5};
                  break;
                case '4':
                  filters.rating = {"from": 4, "to": 5};
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
      }
      let searchedData = JSON.parse(localStorage.getItem("searchdata")) || [];
      let searchValues = {...searchedData, page: page, filtering : filters }
      // if(searchedData.length > 0){
        const dataTours =  tourPackages(searchValues);
        
        dataTours.then((value) => {
          var finalData = [];
          if(value.data.Result.Code == '400'){
            setIsLoading(false);
          }else{
            
            let products = value.data.Result.products
            let count;
            if(page > 1){
              count = page * 10;
            }
            else{
              count = 0;
            }
            products.forEach((element, index) => {
              try{
                count = count + 1
                let objectData = {};
                objectData.id = count;
                if(element.title){
                  objectData.title = element.title;
                }
                else{
                  objectData.title = "";
                }
                objectData.image = element.images[0].variants[7].url
                let itineraryType = element.itineraryType.toLowerCase();
                let duration = '';
                let dutaionValue = '';
                if(element.duration){
                  if(element.duration.fixedDurationInMinutes){
                    duration = element.duration.fixedDurationInMinutes/60 
                    duration = duration.toFixed()
                    dutaionValue = duration;
                    duration = duration + ' hours'
                    
                  }
                  else if(element.duration.unstructuredDuration){
                    duration = element.duration.unstructuredDuration
                  }
                }
                
                
                objectData.type = itineraryType.charAt(0).toUpperCase() + itineraryType.slice(1);
              
                // let time = element.duration.fixedDurationInMinutes / 60; 
                objectData.time = duration;
                objectData.text = element.description;
                objectData.linkText = "More details";
                objectData.price = element.pricing.summary.fromPriceBeforeDiscount;
                objectData.productCode = element.productCode;
                objectData.durationValue = dutaionValue;
                if("reviews" in element){
                  let rating = element.reviews.combinedAverageRating.toFixed(1) + '/5';
                  let ratingCount = element.reviews.totalReviews + ' ratings';
                  objectData.rating = rating;
                  objectData.ratingCount = ratingCount;
                }else{
                  objectData.rating = "No ratings";
                }
                objectData.buttonText = "Book";
                finalData.push(objectData);
              }
              catch{
                count = count + 1
              }
                
            }); 
          }
          setIsLoading(false);
          setserachResults(value.data.Result.totalCount);
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
          // setSearchData(
          //   finalData
          // )
          // Expected output: 123
        })
      //}
   
  }, [filterValues, page]);

  useEffect(() => {
    let searchedData = JSON.parse(localStorage.getItem("searchdata")) || [];
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
          <ListingSearchbar template="home" searchData={searchData} setSearchData={setSearchData} setIsLoading={setIsLoading} setserachResults={setserachResults}/>
        </Container>
      </div>
      <Container>
      {searchData.length == 0 ? <></> : <ActivityFilter searchData={filterdedData} setSortOrder={setSortOrder} setSearchData={setSearchData}/>}
      </Container>
      {isLoading ? <Loader /> : <ListingComponent searchData={searchData} filterData={filterdedData} setFilterData={setFilterData} limitedArray={limitedArray} limit={limit} setLimit={setLimit} page={page} setPage={setPage} filterValues={filterValues} serachResults={serachResults}/> }
        
    </>
  );
};

export default ListingPage;

function Loader(){
    return( 
      <Container>
        <Row >
          <Col className="text-center">
            <Image src={loadingimage} width="250" height="250"/>
          </Col>
        </Row>
      </Container>
    )
}

function ListingComponent(props){
 
  const setnewLimit = () => {
    let newlimit = props.limit + 10;
    let newPage = props.page + 1;
   // props.setLimit(newlimit);
    props.setPage(newPage);
  }

  return (
    <Container> 
        <Row>
          <Col xl={3} lg={4}>
          <div className={`pageSidebar`}>
            {props.searchData.length == 0 ? <></> : <Sidebar searchData={props.searchData} filterData={props.filterData} setFilterData={props.setFilterData} filterValues={props.filterValues}/>}  
              
          </div>
          </Col>
          <Col xl={9} lg={8}>
              {props.limitedArray.length == 0 ? <></> : <ListingProbox boxData = {props.limitedArray}/>}
            <div className="text-center mb-3">
              {props.serachResults == 0 || props.serachResults == props.limitedArray.length ? <></> : <ButtonType className="btntype2" onClick={setnewLimit} name="Show More" />}
            </div>
          </Col>
        </Row>
      </Container>
  )
}

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
