import { createContext, useContext, useEffect } from 'react'

import { useSocket } from '../hooks/useSocket'
import { AuthContext } from '../auth/AuthContext'
import { ChatContext } from './chat/ChatContext'
import { types } from '../types/types'
import { scrollToBottonAnimated } from '../helpers/scrollToBotton'

const baseWsUrl = process.env.VITE_WS_URL

export const SocketContext = createContext()

export const SocketProvider = ({ children }) => {
  const { auth } = useContext(AuthContext)
  const { socket, online, conectarSocket, desconectarSocket } = useSocket(baseWsUrl)
  const { dispatch } = useContext(ChatContext)

  useEffect(() => {
    if (auth.logged) {
      conectarSocket()
    }
  }, [auth, conectarSocket])

  useEffect(() => {
    if (!auth.logged) {
      desconectarSocket()
    }
  }, [auth, desconectarSocket])

  useEffect(() => {
    socket?.on('lista-usuarios', (usuarios) => { dispatch({ type: types.usuariosLoad, payload: usuarios }) })
  }, [socket, dispatch])

  useEffect(() => {
    socket?.on('mensaje-personal', (mensaje) => {
      dispatch({
        type: types.nuevoMensaje,
        payload: mensaje
      })

      scrollToBottonAnimated('mensajes')
    })
  }, [socket, dispatch])

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  )
}
