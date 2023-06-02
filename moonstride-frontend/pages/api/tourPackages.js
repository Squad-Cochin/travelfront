//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
//          This file is use to fetch all package details on the basis of search                    //       
//                       from node API that given from backend.                                     //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////

import axios from 'axios';

// IMPORT PAGES
import { API_BASE_URL } from '../../config';

// FUNCTION FOR SEARCH TOUR PACKAGES
async function tourPackages(data){
       try{
              const items = await axios.post(`${API_BASE_URL}/0f105f8572f1bfa1514149f07999f04c7cf7ec62/Tour/Search`, data)  
              if(items.Code){
                     let errorItems = {
                            "data": {
                                   "Result": {
                                          "Code": 400,
                                          "Error": {
                                                 "Message": "No Data Found."
                                          }
                                   }
                            }
                     }
                     return errorItems; 
              }
              else{
                     return items;   
              }
                
       }
       catch{
              let errorItems = {
                     "data": {
                            "Result": {
                                   "Code": 400,
                                   "Error": {
                                          "Message": "No Data Found."
                                   }
                            }
                     }
              }
              return errorItems; 
       }
        
}

// FUNCTION FOR GET PRODUCT DETAILS WITH CHECK AVAILABILTY
async function tourPackageDetail(productId, searchData) {
       try{   
              let result = {}
              const data = {
                     provider: ["VTR"],      
                     productCode: productId
              };
              // PRODUCT DETAILS API CALL
              const items = await axios.post(`${API_BASE_URL}/0f105f8572f1bfa1514149f07999f04c7cf7ec62/Tour/ProductDetails`, data);
              result.Details = items.data[0].Result;
              data.travelDate = searchData.startDate;
              data.currency = "AUD";
              data.passengerDetails =  [ 
                     {
                            ageBand:"ADULT",
                            numberOfTravelers:searchData.passengerDetails.adult
                     },
                     {
                            ageBand:"CHILD",
                            numberOfTravelers:searchData.passengerDetails.children
                     }
              ]
              try{   
                     // CHECK AVAILABILITY API CALL
                     const availability = await axios.post(`${API_BASE_URL}/0f105f8572f1bfa1514149f07999f04c7cf7ec62/Tour/ProductAvailability`, data);

                     result.Availability = availability.data[0].Result;
              }catch{
                     result.Availability = [];
              }
              return result;
       }
       catch{
              let errorItems = {
                     "data": {
                            "Result": {
                                   "Code": 400,
                                   "Error": {
                                          "Message": "No Data Found."
                                   }
                            }
                     }
              }
              return errorItems;  
       }
}

// FUNCTOIN FOR GET CHECK AVAILABILITY DETAILS
async function checkAvailability(searchData, productId) {
       try{
              const data = {
                     provider: ["VTR"],
                     productCode: productId,
                     travelDate: searchData.startDate,
                     currency:"AUD",
                     passengerDetails: [ 
                            {
                                   ageBand:"ADULT",
                                   numberOfTravelers:searchData.passengerDetails.adult
                            },
                            {
                                   ageBand:"CHILD",
                                   numberOfTravelers:searchData.passengerDetails.children
                            }
                     ]
              };
              const items = await axios.post(`${API_BASE_URL}/0f105f8572f1bfa1514149f07999f04c7cf7ec62/Tour/ProductAvailability`, data);     
              return items.data[0].Result;
       }
       catch{
              return [];
       }
      
}

export {tourPackages}
export {tourPackageDetail}
export {checkAvailability}


