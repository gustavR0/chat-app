import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPages } from '../pages/LoginPage'
import { RegisterPages } from '../pages/RegisterPage'

export default function Public () {
  return (
    <div className='limiter'>
      <div className='container-login100'>
        <div className='wrap-login100 p-t-50 p-b-90'>
          <Routes>
            <Route path='login' element={<LoginPages />} />
            <Route path='register' element={<RegisterPages />} />
            <Route path='/' element={<Navigate to='/login' />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
