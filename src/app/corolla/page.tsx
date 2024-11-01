import Car_detail from '@/Components/Car_detail'
import React from 'react'
import car from '@/assets/imgs/corolla.jpg'

function page() {
  return (
    <Car_detail img={car} title={'Toyota Corolla 2024 Price in Pakistan,  Images, Reviews & Specs'} doors={4} engine={1800} condition={8.5} driven={'9,500'} suspension={'Soft Suspension'} avg={13} transmission={'Automatic'} fuel={'High Octane'} price={'50,00,000'}  />
  )
}

export default page