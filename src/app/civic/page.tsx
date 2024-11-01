import React from 'react'
import Car_detail from '@/Components/Car_detail'
import car from '@/assets/imgs/civic.jpg'

function page() {
  return (
    <Car_detail img={car} title={'Honda Civic 2024 Price in Pakistan, Images, Reviews & Specs'} doors={4} engine={1498} condition={9} driven={'60,000'} suspension={'Multi-Link Wishbone'} avg={11} transmission={'Manual'} fuel={'Petrol'} price={'8,659,000'} />
  )
}

export default page