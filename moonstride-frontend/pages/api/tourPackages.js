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
        try{
              const items = await axios.post(`${API_BASE_URL}/0f105f8572f1bfa1514149f07999f04c7cf7ec62/Tour/Search`, data)    
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
       productId = null
       console.log("first")
       //  console.log(productId)
	// 	const data = {
       //  	dest_code: productId
       //  };
       //  console.log(data);
       //  const items = await axios.post(`${API_BASE_URL}/tours/view-destination-details`, data)

        const items = {
                     data : [{
                            Result : {
                                   "title": "Four-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi",
                                   "fromPrice": 15959.84,
                                   "currency": "$",
                                   "images": [
                                   {
                                          "height": "220.06",
                                          "width": "362",
                                          "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/ca/d5/4d.jpg"
                                   },
                                   {
                                          "height": "220.06",
                                          "width": "362",
                                          "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/ca/d5/4d.jpg"
                                   },
                                   {
                                          "height": "220.06",
                                          "width": "362",
                                          "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/ca/d5/4d.jpg"
                                   }
                                   ],
                                   "supplierName": "Crystal India Holidays",
                                   "numberOfReviews": 429,
                                   "combinedAverageRating": 4.9,
                                   "contact": {
                                          "address": "49B LIG Flats, Madhuban Enclave, Madipur New Delhi National Capital Territory of Delhi 110063 IN",
                                          "mobile": "+919311016363",
                                          "email": "a248706e6456a399c16d131925029188@tripadvisor.com"
                                   },
                                   "destinationDetails":{
                                          "description": "Explore India's Golden Triangle on this four-day private tour traveling by air-conditioned vehicle with a local guide. In Delhi, visit Qutb Minar, Lotus Temple, India Gate, and Parliament House. Watch the sun rise over the Taj Mahal, visit Agra’s Red Fort and Baby Taj. In Jaipur, visit Panna Meena Ka Kund (Step well), Amber Fort, Jal Mahal, Palace of Winds, Maharaja's City Palace, and Jantar Mantar Observatory. Three nights of five-star accommodations, breakfasts, transportation, and guided tours are included. You’ll sample local dishes for lunch and dinner on your own, and cover your own monument entrance fees..",
                                          "duration": "200",
                                          "startPoint": "Delhi",
                                          "endingPoint": "Kerala",
                                          "ageRangeFrom": "5",
                                          "ageRangeTo": "50",
                                          "itineraryType": "MULTI_DAY_TOUR",
                                          "maxGroupSize": "10",
                                          "languageGuides":{
                                                 "guideType" : "GUIDE",
                                                 "guideCount" : "7"
                                          },
                                          "inclusions": [
                                                 "All applicable hotel taxes",
                                                 "Battery bus ride to and from Taj Mahal parking lot up to Taj Mahal monument",
                                                 "All sightseeing with private local guides",
                                                 "Transport by private, air-conditioned car",
                                                 "Private Tour"
                                          ],
                                          "exclusions": [
                                                 "Gratuities (Optional)",
                                                 "Entrance Fees (Approx. USD 60 per person including all monuments)"
                                          ],
                                          "additionalInformation": [
                                                 "Wheelchair accessible",
                                                 "Infants and small children can ride in a pram or stroller",
                                                 "Public transportation options are available nearby"
                                          ]
                                   },
                                   "cancellationPolicyDescription" : "For a full refund, cancel at least 24 hours before the scheduled departure time.",
                                   
                                   "userReviews": [
                                          "Great tour! The hotels selected for our 5 star stays were amazing, delicious breakfast and excellent service. I loved that each city had its own guide, native to the city. Our driver “Rati” was really kind, patient and incredibly reliable. Communication before the tour by the company was great. I would highly recommend this tour for a comprehensive trip of the golden triangle!",
                                          "Great tour! The hotels selected for our 5 star stays were amazing, delicious breakfast and excellent service. I loved that each city had its own guide, native to the city. Our driver “Rati” was really kind, patient and incredibly reliable. Communication before the tour by the company was great. I would highly recommend this tour for a comprehensive trip of the golden triangle!"
                                   ],
                                   "cancellationPolicy": [
                                          "For a full refund, you must cancel at least 24 hours before the experience’s start time.",
                                          "For a full refund, you must cancel at least 24 hours before the experience’s start time.",
                                          "For a full refund, you must cancel at least 24 hours before the experience’s start time."
                                   ]
                            }
                     }]
                     
        }
        console.log("first")
        console.log(items.data)
        return items.data[0].Result;
	
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


