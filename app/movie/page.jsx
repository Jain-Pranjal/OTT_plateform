// now abhi data mere server se detch ho rha hai 
// in this me data ko server side se he fetch karke dikhata hu and direclty apne comp ko sever rendeing karva rha hu
import React from 'react'
import Moviecard from "@/components/Moviecard";


const page = async() => {
  // similate a delay
  await new Promise(resolve => setTimeout(resolve, 2000));

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
	var result = await response.json();
  var data=result["titles"]
	console.log(data);
} catch (error) {
	console.error(error);
}
  
  
  return (
    <div className='flex flex-wrap justify-evenly'>
      {data.map((curElem) => {
        return <Moviecard key={curElem["summary"]["id"]} id={curElem["summary"]["id"]} title={curElem["jawSummary"]["title"]} description={curElem["jawSummary"]["synopsis"]}/>
      })}
    </div>
  )
}

export default page
