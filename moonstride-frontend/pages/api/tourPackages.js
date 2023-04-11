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
        console.log(data);
        const items = await axios.post(`${API_BASE_URL}/tours/search-destination`, data)    
        console.log("tourPkg");
        console.log(items); 
        return items;
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

async function checkAvailability() {
       alert("3")
       const data = {
              prod_code: "205000P1",
              travel_date: "2023-06-06",
              ageBand:"ADULT",
              number_of_person:2
       };
       console.log(data);
       const items = await axios.post(`${API_BASE_URL}/tours/view-destination-details/check-availability`, data)
       console.log("items");
       console.log(items);
       return items;
      
}

export {tourPackages}
export {tourPackageDetail}
export {checkAvailability}


