import React from 'react'
import "@/app/styles/loading.css"
// import styles from "@/app/styles/loading.css"
const loading = () => {
  return (
    <div className='  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute'>
      <div className="lds-facebook "><div></div><div></div><div></div></div>
    </div>
  )
}

export default loading
