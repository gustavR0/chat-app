import React, { useContext } from 'react'
import { useForm } from '../hooks/useForm'
import { SocketContext } from '../context/SocketContext'
import { AuthContext } from '../auth/AuthContext'
import { ChatContext } from '../context/chat/ChatContext'

export const SendMessages = () => {
  const { handleChange, valueState, reset } = useForm({
    mensaje: ''
  })

  const { socket } = useContext(SocketContext)
  const { auth } = useContext(AuthContext)
  const { chatState } = useContext(ChatContext)

  const { mensaje } = valueState

  const handleSubmit = (e) => {
    e.preventDefault()
    if (mensaje.length === 0) return null
    reset()
    socket.emit('mensaje-personal', {
      de: auth.uid,
      para: chatState.chatActivo,
      mensaje
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='type_msg row'>
        <div className='input_msg_write col-sm-9'>
          <input type='text' className='write_msg' placeholder='Mensaje...' name='mensaje' value={mensaje} onChange={handleChange} />
        </div>
        <div className='col-sm-3 text-center'>
          <button className='msg_send_btn mt-3' type='submit'>
            enviar
          </button>
        </div>
      </div>
    </form>
  )
}
