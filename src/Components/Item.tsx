import React from 'react'
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import star from '@/assets/imgs/star.png'
import star_outline from '@/assets/imgs/star_outline.png'

function Item({ img, title, price , total_reviews} :{ img:StaticImageData | string ;title: string; price: string; total_reviews: number }) {
  return (
    <div className='bg-white h-full w-fit text-center hover:scale-110 transition-all'>
        <Image src={img} alt='car' className='h-48 w-auto' />
        <h2 className='text-blue-800 '>{title}</h2>
        <p>{price}</p>
        <div className='flex items-center gap-2 mx-auto w-fit py-3'>
            <div className='flex'>
              <Image src={star} alt='rating' className='h-4 w-auto' />
              <Image src={star} alt='rating' className='h-4 w-auto'  />
              <Image src={star} alt='rating' className='h-4 w-auto'  />
              <Image src={star_outline} alt='rating' className='h-4 w-auto'  />
              <Image src={star_outline} alt='rating' className='h-4 w-auto'  />
            </div>
            <p>{total_reviews} Reviews</p>
        </div>
    </div>
  )
}

export default Item