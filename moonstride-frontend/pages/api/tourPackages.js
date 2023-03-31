//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
//          This file is use to fetch all package details on the basis of search                    //       
//                       from node API that given from backend.                                     //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////


 import axios from 'axios'
 import {useState} from 'react'

const tourPackages = async () => {
	// const data = {
	// 	searchTerm: 'big',
	// 	from_date: '01/04/2023',
	// 	to_date: '01/04/2023',
	// 	number_of_person: '5'
	// };
	const data = await fetch('https://fortnite-api.com/v2/news');
	const items = await data.json();	
	
	console.log(items);
	
  	axios.post('http://192.168.200.81:4000/tours/search-destination', data)
    .then(response => {
      console.log(response.data);
      console.log(data);
      // res.status(200).json(response.data);
    })
    .catch(error => {
      console.error(error);
     });

	 return items;
 }

export {tourPackages}




