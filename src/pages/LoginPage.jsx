import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../auth/AuthContext'

export const LoginPages = () => {
  const { login } = useContext(AuthContext)

  const { valueState, handleChange, changeValueManual } = useForm({
    email: 'test1@test.com',
    password: '123456',
    rememberme: false
  })

  const { email, password, rememberme } = valueState

  useEffect(() => {
    const remembermeEmail = window.localStorage.getItem('email')
    if (remembermeEmail) {
      changeValueManual({ email: remembermeEmail, rememberme: true })
    }
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    rememberme
      ? window.localStorage.setItem('email', email)
      : window.localStorage.removeItem('email')

    await login(email, password)
  }

  const itsOk = () => !!((email.length > 0 && password.length > 0))

  return (
    <form
      className='login100-form validate-form flex-sb flex-w'
      onSubmit={onSubmit}
    >
      <span className='login100-form-title mb-3'>
        Login
      </span>

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
        <div
          className='col'
          onClick={() => changeValueManual({ rememberme: !rememberme })}
        >
          <input
            className='input-checkbox100'
            id='ckb1'
            type='checkbox'
            name='rememberme'
            checked={rememberme}
            onChange={handleChange}
          />
          <label className='label-checkbox100'>
            Recordarme
          </label>
        </div>

        <div className='col text-right'>
          <Link to='/auth/register' className='txt1'>¿Nueva Cuenta?</Link>
        </div>
      </div>

      <div className='container-login100-form-btn m-t-17'>
        <button
          className='login100-form-btn'
          disabled={!itsOk()}
        >
          Ingresar
        </button>
      </div>

    </form>
  )
}
