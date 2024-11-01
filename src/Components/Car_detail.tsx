import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import Link from 'next/link'

function Car_detail({title , img , doors , engine , condition , driven , suspension , avg , transmission , fuel ,price} : {title:string, img:StaticImageData | string, doors:number, engine:number, condition:number, driven:string, suspension:string,   avg:number, transmission:string, fuel:string, price:string }) {
  return (
    <div className='flex flex-col h-screen items-center  bg-[#f0f8ff]'>
        <h1 className='text-[50px] w-[1300px] text-center mt-10 underline'>{title}</h1>
        <Image src={img} className='h-56 w-auto mt-10' alt='car' />
        <div className='flex gap-5 mt-14'>
            <div className='bg-[#1e40af] px-5 py-3 rounded-md text-[12px] text-[white] cursor-pointer'>Book a test drive</div>
            <div className='border border-[#1e40af] px-5 py-3 rounded-md text-[#1e40af] text-[12px] hover:text-white hover:bg-[#1e40af] hover:border transition-all hover:border-[#1e40af] cursor-pointer'>Request Bank Finance</div>
            <div className='border border-[#1e40af] px-5 py-3 rounded-md text-[#1e40af] text-[12px] hover:text-white hover:bg-[#1e40af] hover:border transition-all hover:border-[#1e40af] cursor-pointer'>Visit Place</div>
            <div className='border border-[#1e40af] px-5 py-3 rounded-md text-[#1e40af] text-[12px] hover:text-white hover:bg-[#1e40af] hover:border transition-all hover:border-[#1e40af] cursor-pointer' >Car Inspection</div>
        </div>
        <h2 className='text-[25px] mt-10'>Vehicle Description</h2>
        <div>
            <ul className='flex flex-wrap gap-x-10 gap-y-5 mt-3 w-[900px]'>
                <li> <strong>Number of Doors</strong> {doors}</li>
                <li><strong>Engine </strong> {engine} CC</li>
                <li><strong>Condition  </strong> {condition} / 10</li>
                <li><strong>Driven  </strong> {driven}</li>
                <li><strong>Suspension Type  </strong> {suspension}</li>
                <li><strong>Avg  </strong> {avg} Km per ltr</li>
                <li><strong>Transmission </strong> {transmission}</li>
                <li><strong>Fuel Type </strong> {fuel}</li>
            </ul>
        </div>
        <h2 className='text-[#5aa34a] text-[25px] mt-10'>PKR {price}</h2>
       <Link href='/checkout' > <button className='text-white bg-[#1e40af] hover:bg-[#1e40ef] transition-all mt-20 rounded-lg py-3 px-5'>Make Payment</button></Link>
    </div>
  )
}

export default Car_detail