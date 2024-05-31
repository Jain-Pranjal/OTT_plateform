import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
const notfound = () => {
  return (
    <div className="min-h-[50rem] ">
      <div className='top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute p-10 '>

      <Image src="/notFound.svg" alt="404 not Found" width={800} height={800} className='' />
      <h2 className='text-center font-bold text-4xl'>Oops, looks like the page is lost.</h2>
      <p className='text-center'>This is not a fault, just an accident that was not intentional.</p>
      <p className='text-center'> Back to <Link href="/">Home page</Link></p>
      </div>
    </div>
  )
}

export default notfound
