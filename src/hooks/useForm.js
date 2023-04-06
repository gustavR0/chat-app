import { useState } from 'react'

export const useForm = (initialState = {}) => {
  const [valueState, setValueState] = useState(initialState)

  const handleChange = ({ target }) => {
    const { name, value } = target

    setValueState({
      ...valueState,
      [name]: value
    })
  }

  const changeValueManual = (value) => {
    setValueState({
      ...valueState,
      ...value
    })
  }

  const reset = () => setValueState(initialState)

  return {
    handleChange,
    valueState,
    changeValueManual,
    reset
  }
}
