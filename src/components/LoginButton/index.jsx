import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from 'actions/logout'

import { Button } from './styles'

const LoginButton = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(startLogout())
  }

  return (
    <Button onClick={handleLogout}>Cerrar sesion</Button>
  )
}

export default LoginButton
