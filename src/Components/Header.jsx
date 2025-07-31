import React from 'react'
import { Button } from './ui/button'
import {FaChartBar} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate=useNavigate()
  return (
    <div className='  w-full md:px-24 px-12 h-[100px] shadow-sm flex items-center justify-between'>
      <h1 className=' font-semibold text-2xl flex items-center justify-center gap-3'> <FaChartBar/> BodePlotter</h1>
      <Button onClick={()=>navigate("/register")} >Sign In</Button>
    </div>
  )
}

export default Header
