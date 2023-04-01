import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'
import Public from './Public'
import { Private } from './Private'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* estructura de la ruta url/home */}
        <Route
          path='/auth/*' element={
            <PublicRoute>{/* Ponemos las rutas publicas que no requieren una sesión iniciada */}
              <Public /> {/* Rutas publicas en este caso inicio para la home page */}
            </PublicRoute>
              }
        />
        {/* estructura de la ruta  url/logged/dashboard, etc */}
        <Route
          path='/*' element={
            <PrivateRoute> {/* Rutas privadas a las que se accede solo teniendo una sesión iniciada */}
              <Private /> {/* Rutas privadas que contienen el mismo template del home pero solo para usuarios logueados */}
            </PrivateRoute>
            }
        />
      </Routes>

    </BrowserRouter>
  )
}
