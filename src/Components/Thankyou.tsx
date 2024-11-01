import Link from 'next/link'
import React from 'react'

function Thankyou() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
       <h1 className='text-[#3b82f6] text-[80px]'> Thank you for shopping!!! </h1>
       <p className='text-[20px]'>Your order will be delivered in 3 Business days</p>
       <Link href='/'><button className='py-3 px-10 bg-[#1e40af] rounded-md text-white mt-32'>Home</button></Link>
    </div>
  )
}

export default Thankyou