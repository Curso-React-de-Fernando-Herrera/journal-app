import React from 'react'
import { firebase } from 'firebase/config'
import { Button } from './styles'

const LoginButton = () => {

  const handleLogout = () => {
    firebase.auth().signOut()
  }

  return (
    <Button onClick={handleLogout}>Login/Logout</Button>
  )
}

export default LoginButton
