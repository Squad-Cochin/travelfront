//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
//          This file is use to fetch all package details on the basis of search                    //       
//                       from node API that given from backend.                                     //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////

 import axios from 'axios';
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

// FUNCTION FOR GET PRODUCT DETAILS
async function tourPackageDetail(productId) {
       try{
              const data = {
                     provider: ["VTR"],      
                     productCode: productId
              };
              const items = await axios.post(`${API_BASE_URL}/0f105f8572f1bfa1514149f07999f04c7cf7ec62/Tour/ProductDetails`, data)
              return items.data[0].Result;
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
       return items.data;
      
}

export {tourPackages}
export {tourPackageDetail}
export {checkAvailability}


