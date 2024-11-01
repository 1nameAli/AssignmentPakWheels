'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

function Form() {
    const router = useRouter()
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/thankyou');
    }


  return (
    <div className='flex flex-col items-center px-56 h-screen bg-[#f0f8ff] '>
        <h1 className='text-[56px]'>Enter Your Details</h1>
        <hr className='h-2 rounded-3xl bg-black w-full ' />
        <form className='flex flex-col gap-10 mt-32' onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Your Name' className='pl-5 py-3 pr-32 rounded-md border' required />
            <input type="email" placeholder='Enter Your Email' className='pl-5 py-3 pr-32 rounded-md border' required />
            <input type="text" placeholder='Card Number' className='pl-5 py-3 pr-32 rounded-md border' required />
            <input type="text" placeholder='Address' className='pl-5 py-3 pr-32 rounded-md border' required />
            <button className='bg-[#1e40af] py-3 px-5 rounded-lg mx-auto text-white ' type='submit'>Place you order</button>
        </form>
    </div>
  )
}

export default Form