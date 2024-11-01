import React from 'react'
import logo from '@/assets/imgs/logo.svg'
import Image from 'next/image'
import arrow from '@/assets/imgs/arrow.png'
import mobile from '@/assets/imgs/mobile.png'

function Navbar() {
    return (
        <nav className='bg-black text-white text-[14px] flex flex-col px-56 overflow-hidden'>
            <div className='flex justify-between py-3'>
                <div className='flex gap-2'>
                <Image src={mobile} alt='mobile' className='h-5 w-auto' />
                <h2>Download App via SMS</h2>
                </div>
                <div className='flex'>
                    <p className='pr-3 text-red-700'>اردو</p>
                    <button className='border-l px-2'>Sign Up</button>
                    <button className='border-l px-2'>Sign In</button>
                </div>
            </div>
            <hr />
            <div className='flex justify-between items-center py-5'>
                <Image src={logo} alt='logo' className='h-12 w-auto' />
                <ul className='flex gap-10'>
                    <li className='flex items-center'> Used Cars <Image src={arrow} alt='arrow' className='h-3 w-3' /></li>
                    <li className='flex items-center'>New Cars <Image src={arrow} alt='arrow' className='h-3 w-3' /></li>
                    <li className='flex items-center'>Bikes <Image src={arrow} alt='arrow' className='h-3 w-3' /></li>
                    <li className='flex items-center'>Auto Store <Image src={arrow} alt='arrow' className='h-3 w-3' /></li>
                    <li className='flex items-center'>Videos <Image src={arrow} alt='arrow' className='h-3 w-3' /></li>
                    <li className='flex items-center'>Forums <Image src={arrow} alt='arrow' className='h-3 w-3' /></li>
                    <li className='flex items-center'>Blog <Image src={arrow} alt='arrow' className='h-3 w-3' /></li>
                    <li className='flex items-center'>More <Image src={arrow} alt='arrow' className='h-3 w-3' /></li>
                </ul>
                <button className='bg-red-700 hover:bg-red-600 transition-all py-3 px-7 rounded-md flex items-center'>Post an Ad <Image src={arrow} alt='arrow' className='h-4 w-4' /></button>

            </div>

        </nav>
    )
}

export default Navbar