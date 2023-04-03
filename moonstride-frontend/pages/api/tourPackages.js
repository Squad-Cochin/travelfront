//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
//          This file is use to fetch all package details on the basis of search                    //       
//                       from node API that given from backend.                                     //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////

 import axios from 'axios'
 import {useState} from 'react'
 
 

const tourPackages = async () => {
	const data = {
        searchTerm: 'big',
        start_date: '2023-04-01',
        end_date: '2023-04-01',
        number_of_person: '2'
        };
        const items = await axios.post('http://192.168.200.80:4000/tours/search-destination', data)     
        return items;
 }

  async function tourPackageDetail(productId) {
        console.log(productId)
		const data = {
        	dest_code: productId
        };
        console.log(data);
        const items = await axios.post('http://192.168.200.80:4000/tours/view-destinattion-details', data)
        return items.data.destination_details;
	
 }

export {tourPackages}
export {tourPackageDetail}


