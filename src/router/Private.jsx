import { Navigate, Route, Routes } from 'react-router-dom'
import { ChatPages } from '../pages/ChatPage'
import '../css/chat.css'

export const Private = () => {
  return (

    <Routes>
      <Route path='home' element={<ChatPages />} />
      <Route path='/' element={<Navigate to='/home' />} />
    </Routes>
  )
}
