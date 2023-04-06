import { useContext } from 'react'
import { ChatContext } from '../context/chat/ChatContext'
import { types } from '../types/types'
import { fetchConToken } from '../helpers/fetch'
import { scrollToBotton } from '../helpers/scrollToBotton'

export const SidebarChatItem = ({ user }) => {
  const { chatState, dispatch } = useContext(ChatContext)

  const activeChat = async () => {
    dispatch({
      type: types.activarChat,
      payload: user.uid
    })

    // Cargar Mensajes DB
    const resp = await fetchConToken(`mensajes/${user.uid}`)
    dispatch({
      type: types.cargarMensaje,
      payload: resp.mensajes
    })

    scrollToBotton('mensajes')
  }

  return (
    <div
      className={`chat_list ${chatState.chatActivo === user.uid && 'active_chat'}`}
      onClick={activeChat}
    >
      <div className='chat_people'>
        <div className='chat_img'>
          <img src='https://ptetutorials.com/images/user-profile.png' alt='sunil' />
        </div>
        <div className='chat_ib'>
          <h5>{user.nombre}</h5>
          {
            user.online
              ? (<span className='text-success'>Online</span>)
              : (<span className='text-danger'>Offline</span>)
          }

        </div>
      </div>
    </div>
  )
}
