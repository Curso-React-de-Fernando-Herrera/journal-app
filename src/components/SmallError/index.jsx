import React from 'react'
import { Alert } from './styles'

const SmallError = ({ children }) => {
  return (
    <Alert>{ children }</Alert>
  )
}

export default SmallError
