import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'

export const RegisterPages = () => {
  const { register } = useContext(AuthContext)

  const { valueState, handleChange } = useForm({
    email: '',
    password: '',
    nombre: ''
  })

  const { nombre, email, password } = valueState

  const itsOk = () => !!((nombre.length > 0 && email.length > 0 && password.length > 0))

  const onSubmit = async (e) => {
    e.preventDefault()
    await register(nombre, email, password)
  }

  return (
    <form
      className='login100-form validate-form flex-sb flex-w'
      onSubmit={onSubmit}
    >
      <span className='login100-form-title mb-3'>
        Register
      </span>

      <div className='wrap-input100 validate-input mb-3'>
        <input
          className='input100'
          type='text'
          name='nombre'
          placeholder='Nombre'
          value={nombre}
          onChange={handleChange}
        />
        <span className='focus-input100' />
      </div>

      <div className='wrap-input100 validate-input mb-3'>
        <input
          className='input100'
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={handleChange}
        />
        <span className='focus-input100' />
      </div>

      <div className='wrap-input100 validate-input mb-3'>
        <input
          className='input100'
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={handleChange}
        />
        <span className='focus-input100' />
      </div>

      <div className='row mb-3'>
        <div className='col text-right'>
          <Link to='/auth/login' className='txt1'>¿Ya tienes una Cuenta?</Link>
        </div>
      </div>

      <div className='container-login100-form-btn m-t-17'>
        <button
          className='login100-form-btn'
          disabled={!itsOk()}
        >
          Crear cuenta
        </button>
      </div>

    </form>
  )
}
