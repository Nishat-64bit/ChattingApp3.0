import React from 'react'
import LoginLeft from './LoginComp/LoginLeft'
import LoginRight from './LoginComp/LoginRight'
const Login = () => {
  return (
    <div className='flex justify-center items-center'>
      <LoginLeft/>
      <LoginRight/>
    </div>
  )
}

export default Login
