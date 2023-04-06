import { useContext } from 'react'
import { ChatContext } from '../context/chat/ChatContext'
import { SidebarChatItem } from './SidebarChatItem'
import { AuthContext } from '../auth/AuthContext'

export const Sidebar = () => {
  const { chatState } = useContext(ChatContext)
  const { auth } = useContext(AuthContext)

  return (

    <div className='inbox_chat'>
      {chatState.usuarios
        .filter((usuario) => usuario.uid !== auth.uid)
        .map((usuario) => (<SidebarChatItem user={usuario} key={usuario.uid} />))}

      {/* <!-- Espacio extra para scroll --> */}
      <div className='extra_space' />

    </div>

  )
}
