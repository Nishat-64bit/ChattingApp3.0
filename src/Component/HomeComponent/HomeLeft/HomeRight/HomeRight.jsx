import React from 'react'
import { Outlet } from 'react-router-dom'
const HomeRight = () => {
  return (
    <div className='bg-green-500 w-full rounded-xl'>
      <Outlet/>
    </div>
  )
}

export default HomeRight
