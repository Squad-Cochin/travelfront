//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
//          This file is use to fetch all package details on the basis of search                    //       
//                       from node API that given from backend.                                     //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////

 import axios from 'axios'
 import {useState} from 'react'
 import { API_BASE_URL } from '../../config';
 
 

 async function tourPackages(data){
	// const data = {
       //  searchTerm: 'big',
       //  start_date: '2023-04-01',
       //  end_date: '2023-04-01',
       //  number_of_person: '2'
       //  };
        try{
              const items = await axios.post(`${API_BASE_URL}/tours/search-dest`, data)    
              //console.log("tourPkg");
              //console.log(items); 
              return items;   
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

async function tourPackageDetail(productId) {
        console.log(productId)
		const data = {
        	dest_code: productId
        };
        console.log(data);
        const items = await axios.post(`${API_BASE_URL}/tours/view-destination-details`, data)
        return items.data;
	
}

async function checkAvailability(searchData, productId) {
       const data = {
              prod_code: productId,
              travel_date: searchData.start_date,
              adult: searchData.details.adult,
              child: searchData.details.children
       };
       const items = await axios.post(`${API_BASE_URL}/tours/view-destination-details/check-availability`, data);
       console.log("data")
       console.log(items)
       return items;
      
}

export {tourPackages}
export {tourPackageDetail}
export {checkAvailability}


