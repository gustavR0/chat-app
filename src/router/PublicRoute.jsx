import { Navigate } from 'react-router-dom'
import '../css/login-register.css'
import { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'

export const PublicRoute = ({ children }) => {
  // Importamos nuestro context para desetructurar logged bandere que indica si ya nos logueamos o no
  // Almacenada en el store de nuestra app
  const { auth } = useContext(AuthContext)

  const logged = auth.logged

  return (!logged)// En este caso negamos la validación en caso de no estar logueado nos manda a las rutas publicas
    ? children
    : <Navigate to='/home' /> // En caso de estar logueado nos manda a la pagina inicial una ves logueados en este caso Dashboard
}
