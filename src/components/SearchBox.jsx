import { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'

export const SearchBox = () => {
  const { logout, auth } = useContext(AuthContext)

  return (
    <div className='headind_srch'>
      <div className='recent_heading mt-2'>
        <h4>{auth.nombre}</h4>
      </div>
      <div className='srch_bar'>
        <div className='stylish-input-group'>
          <button
            className='btn text-danger'
            onClick={logout}
          >
            Salir
          </button>
        </div>
      </div>
    </div>
  )
}
