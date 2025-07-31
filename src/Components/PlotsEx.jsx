import React from 'react'
import { Card } from './ui/card'
const PlotsEx = () => {
  return (
    <div className='w-full md:px-24 px-12  flex items-center md:flex-row flex-col justify-center md:gap-20 gap-5'>
      <Card className='w-[300px]   border-0 shadow-sm shadow-gray-200 border-gray-900'>
        <img src="./src/assets/bodeplot1.jpg" alt="image" />
      </Card>
       <Card className='w-[300px] border-0 shadow-sm shadow-gray-200 border-gray-900'>
        <img src="./src/assets/bodeplot2.jpg" alt="image" />
      </Card>
       <Card className='w-[300px] border-0 shadow-sm shadow-gray-200 border-gray-900'>
        <img src="./src/assets/bodeplot4.jpg" alt="image" />
      </Card>
    </div>
  )
}

export default PlotsEx
