import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
  // Importamos nuestro context para desetructurar logged bandere que indica si ya nos logueamos o no
  // Almacenada en el store de nuestra app
  const logged = true

  return (logged) // Validamos si estamos logueados para permitirnos entrar a las rutas privas
    ? children
    : <Navigate to='/auth/login' /> // En caso de no estar logueado nos manda a la pagina inicial en este caso el Home
}
