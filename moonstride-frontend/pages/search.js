//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
//                            FILE FOR MAKE AN INITIAL SEARCH ON THE DATA                               //
//                          			 GIVEN FROM MOONSTRIDE                                          //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////


import { promisify } from "util";
import bodyParser from "body-parser";

// IMPORT PAGES
import { locationOptions } from '../pages/api/locationDetails';
import ListingPage from './designs/ActivityListing/Listing';

const url = require('url');
const getBody = promisify(bodyParser.urlencoded());

// FUNCTION FOR GET DATA FROM SERVER
export async function getServerSideProps({ req, res }) {
  	if (req.method == "POST") {
		await getBody(req, res);
    	let searchData = req.body;
		try{
			let locationArray = await locationOptions(searchData.searchTerm);
			searchData.searchDestinationId = locationArray[0].value;
			searchData.provider = ["VTR"]
			searchData.startDate = '2023-06-07';
			searchData.endDate = '2023-06-18';
			searchData.passengerDetails = {
				adult: 2,
				child: 1
			}
			searchData.flagPassengerNames = true
			searchData.passengerNames = [
				{ value: 'Luis fonsi', label: 'Luis fonsi (56)', age:56 },
   				{ value: 'Stive morgan', label: 'Stive morgan (48)' , age:48 },
    			{ value: 'John lithgow', label: 'John lithgow (42)' ,age:42},
   				{ value: 'Ebrahim alkazi', label: 'John lithgow (62)',  age:62 }	
			]
			return {
				props: searchData
			};
		}
		catch(error){
			return {
				props: {
				  name: "smeijer",
				  moonstrideSearch:  "Y"
				}
			};
		}

		
	}
	else{
		return {
			props: {}
		}	
	}
}

// FUNCTION FOR SHOW LISTINGPAGE WITH SEARCH DATA
export default function IndexPage(props) {
  return (
    <>
		<ListingPage searchData={props}/>
    </>
  );
}





