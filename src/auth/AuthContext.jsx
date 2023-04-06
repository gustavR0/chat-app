import { createContext, useCallback, useContext, useState } from 'react'
import { fetchConToken, fetchSinToken } from '../helpers/fetch'
import Swal from 'sweetalert2'
import { ChatContext } from '../context/chat/ChatContext'
import { types } from '../types/types'

export const AuthContext = createContext()

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  nombre: null,
  email: null
}

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState)
  const { dispatch } = useContext(ChatContext)

  const login = async (email, password) => {
    const resp = await fetchSinToken('login', { email, password }, 'POST')
    if (resp.token) {
      window.localStorage.setItem('token', resp.token)
      setAuth({
        ...resp.usuario,
        checking: false,
        logged: true
      })
    } else {
      await Swal.fire('Error', `${resp.msg}`, 'error')
    }
  }

  const register = async (nombre, email, password) => {
    const resp = await fetchSinToken('login/new', { nombre, email, password }, 'POST')
    if (resp.token) {
      window.localStorage.setItem('token', resp.token)
      setAuth({
        ...resp.usuario,
        checking: false,
        logged: true
      })
    } else {
      await Swal.fire('Error', `${resp.msg}`, 'error')
    }
  }

  const verificaToken = useCallback(async () => {
    const resp = await fetchConToken('login/renew')

    if (resp.token) {
      window.localStorage.setItem('token', resp.token)
      setAuth({
        ...resp.usuario,
        checking: false,
        logged: true
      })
    } else {
      logout()
    }
  }, [])

  const logout = () => {
    dispatch({ type: types.logout })
    setAuth({
      ...initialState,
      checking: false
    })
    window.localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{
      auth,
      login,
      register,
      verificaToken,
      logout
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}
