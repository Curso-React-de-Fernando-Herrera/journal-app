import { useDispatch } from 'react-redux'
import { startLoginWithGoogle } from 'actions/login'

import { GoogleButtom, TitleText } from './styles'
const buttonImageDir = require.context('assets/bottonGoogle', true)

const GoogleLogin = () => {
  const dispatch = useDispatch()

  const handleGoogleLogin = () => {
    dispatch( startLoginWithGoogle() )
  }

  return (
    <>
      <TitleText>Registrarse con una Red Social</TitleText>
      <GoogleButtom onClick={ handleGoogleLogin }>
        <img src={buttonImageDir('./google-button.png').default} alt="google-login" />
      </GoogleButtom>
    </>
  )
}

export default GoogleLogin
