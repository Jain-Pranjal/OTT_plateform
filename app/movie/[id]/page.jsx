// "use client"
import React from 'react'
import { metadata } from "next"
import DetailsOfMovie from '@/components/DetailsOfMovie';

// for getting the id use the params

const page = async({params}) => {
  const id=params.id
  const url = process.env.RAPIDAPI_URL;
  const options = {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
		'X-RapidAPI-Host': process.env.RAPIDAPI_HOST,
	}
};

try {
  var response = await fetch(url, options);
	var result = await response.json(); // in the response i got the array of 70
  var data=result["titles"]
  console.log(data);
  
  
  const matchingData = data.find(e => e["summary"]["id"] === id);
  
  return (
    <div>
      {/* this is the movie page of {params.id} and   */}
      
      {/* {(id)===data.map((curElem)=>{curElem["summary"]["id"]})?data.map((curElem)=>{ return <DetailsOfMovie key={curElem["summary"]["id"]} id={curElem["summary"]["id"]}  synopsis={curElem["jawSummary"]["synopsis"]} />}):" no synopsis found"}

       */}
      
      {matchingData ? (
        <DetailsOfMovie
          key={matchingData["summary"]["id"]}
          id={matchingData["summary"]["id"]}
          synopsis={matchingData["jawSummary"]["synopsis"]}
        />
      ) : (
        <div>No synopsis found for ID: {id}</div>
      )} 
    </div>

)
} catch (error) {
  console.error(error);
}
}

export default page

// export const generateMetadata = ({params}) => {
//     return {
//         title: `OTT | Movie | ${params.id}`,
//         description: `About page of OTT movie ${params.id}`,
//     }
// }