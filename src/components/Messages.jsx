import React, { useContext } from 'react'
import { SendMessages } from './SendMessages'
import { IncomingMessage } from './IncomingMessage'
import { OutGoingMessage } from './OutGoingMessage'
import { ChatContext } from '../context/chat/ChatContext'
import { AuthContext } from '../auth/AuthContext'

export const Messages = () => {
  const { chatState } = useContext(ChatContext)
  const { auth } = useContext(AuthContext)

  return (
    <div className='mesgs'>
      <div
        id='mensajes'
        className='msg_history'
      >
        {chatState.mensajes.map((msg) => (
          msg.para === auth.uid
            ? <IncomingMessage key={msg._id} msg={msg} />
            : <OutGoingMessage key={msg._id} msg={msg} />
        ))}

      </div>
      <SendMessages />
    </div>
  )
}
