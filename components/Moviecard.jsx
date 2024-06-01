import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
// import Image from 'next/image'

const Moviecard = (props) => {
  return (
    <div className='mb-3'>
      <div
  className="bg-white shadow-[0_8px_12px_-6px_rgba(0,0,0,0.2)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4 ">
  <img src={`${props.poster}` || `https://source.unsplash.com/1600x900?movies`} className="w-full rounded-lg"/>
  <div className="px-4 my-6 text-center " >
    <h3 className="text-lg font-semibold text-black">{props.title}</h3>

    <div className="details flex space-x-4 items-center justify-between">
    <h1 className='mt-2 text-sm font-semibold text-black'>{props.releaseDate}</h1>
    <div className="font-[sans-serif] space-x-6 flex justify-center mt-4">
        <span className={clsx("px-2 py-1 text-xs text-white rounded",props.type==="show"?`bg-green-600`:`bg-yellow-400`)}>{props.type}</span>
    </div>
    </div>

    <p className="mt-2 text-sm text-black">{props.description}</p>

    <Link href={`/movie/${props.id}`}>
    <button type="button"
      className="px-6 py-2 w-full mt-4 rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">Read more</button>
      </Link>
  </div>
</div>

    </div>
  )
}

export default Moviecard

// bg-blue-600 px-2 py-1 text-xs text-white rounded