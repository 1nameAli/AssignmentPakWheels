import React from 'react'
import Item from './Item'
import Link from 'next/link'
import alto from '@/assets/imgs/alto.png'
import corolla from '@/assets/imgs/corolla.jpg'
import civic from '@/assets/imgs/civic.jpg'
import city from '@/assets/imgs/city.jpg'

function Featured() {
  return (
    <div className='bg-gray-100 flex flex-col px-56 py-14 mt-32'>
       <div className='flex justify-between items-center'>
        <h2 className='text-[32px]'>Featured New Cars</h2>
        <p className='text-blue-500'>View All New Cars</p>
       </div>
       <div>
        <ul className='flex gap-10 mt-10'>
            <li className='border-b-4 border-blue-500 '>Popular</li>
            <li>Upcoming</li>
            <li>Newly Launched</li>
        </ul>
       </div>
       <hr />
       <div className='flex mt-10 gap-10 w-fit mx-auto'>
       <Link href ='/corolla'><Item img={corolla} title={'Toyota Corolla'} price={'PKR 59.7 - 75.5 lacs'} total_reviews={621}  /></Link> 
       <Link href ='/alto'><Item img={alto} title={'Suzuki Alto'} price={'PKR 23.3 - 30.5 lacs'} total_reviews={199}  /></Link> 
       <Link href ='/city'><Item img={city} title={'Honda City'} price={'PKR 46.5 - 58.5 lacs'} total_reviews={458}  /></Link> 
       <Link href ='/civic'><Item img={civic} title={'Honda Civic'} price={'PKR 86.6 - 99.0 lacs'} total_reviews={357}  /></Link> 
       </div>
    </div>
  )
}

export default Featured