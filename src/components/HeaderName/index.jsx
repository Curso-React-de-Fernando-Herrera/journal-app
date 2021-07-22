import React from 'react'
import { useSelector } from 'react-redux'
import { UserName } from './styles'

const HeaderName = () => {
  const { name } = useSelector(state => state.auth)

  return (
    <UserName>{name}</UserName>
  )
}

export default HeaderName
