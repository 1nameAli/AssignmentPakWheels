import React from 'react'
import Car_detail from '@/Components/Car_detail'
import car from '@/assets/imgs/city.jpg'

function page() {
  return (
    <Car_detail img={car} title={'Honda City 1.2L M/T 2024 Price in Pakistan, Images, Reviews & Specs'} doors={4} engine={1199} condition={8.5} driven={'70,000'} suspension={'McPherson Strut Coil Springs'} avg={13} transmission={'Manual'} fuel={'Petrol'} price={'4,649,000'} />
  )
}

export default page