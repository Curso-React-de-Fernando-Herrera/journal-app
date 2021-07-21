import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from 'actions/logout'

import { Button } from './styles'

const LoginButton = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Button onClick={handleLogout}>Cerrar sesion</Button>
  )
}

export default LoginButton
