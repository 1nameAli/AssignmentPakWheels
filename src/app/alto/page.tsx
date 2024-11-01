import Car_detail from '@/Components/Car_detail'
import React from 'react'
import car from '@/assets/imgs/alto.png'

function page() {
  return (
   <Car_detail img={car} title={'Suzuki Alto 2024 Price in Pakistan, Images, Reviews & Specs'} doors={4} engine={658} condition={8} driven={'90000'} suspension={'Soft Suspension'} avg={18} transmission={'Manual'} fuel={'Petrol'} price={'2,331,000'} />
  )
}

export default page