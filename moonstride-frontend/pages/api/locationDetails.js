//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
//          This file is use to fetch all package details on the basis of search                    //       
//                       from node API that given from backend.                                     //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////

import axios from 'axios';

// IMPORT PAGES
import { API_BASE_URL } from '../../config';

// FUNCTION FOR GET SEARCH OPTIONS
async function locationOptions(inputValue){
	   try{
			const data = {
					provider: ["VTR"],      
					searchTerm: inputValue
			};
			const items = await axios.post(`${API_BASE_URL}/0f105f8572f1bfa1514149f07999f04c7cf7ec62/Tour/predictiveLocationSearch`, data);
			if(items.data[0].Result.Code == 200){
				return items.data[0].Result.filteredArray
			}
			else{
				return [];
			}
	   }
	   catch(error){
			 let errorItems = []
			 return errorItems; 
	   }
	   
}


export {locationOptions}



