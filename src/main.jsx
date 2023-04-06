import React from 'react'
import ReactDOM from 'react-dom/client'
import ChatApp from './ChatApp'
import { AuthProvider } from './auth/AuthContext'
import { SocketProvider } from './context/SocketContext'
import { ChatProvider } from './context/chat/ChatContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChatProvider>
    <AuthProvider>
      <SocketProvider>
        <ChatApp />
      </SocketProvider>
    </AuthProvider>
  </ChatProvider>
)
