import { GoogleButtom, TitleText } from './styles'
const buttonImageDir = require.context('assets/bottonGoogle', true)

const GoogleLogin = () => {
  return (
    <>
      <TitleText>Registrarse con una Red Social</TitleText>
      <GoogleButtom>
        <img src={buttonImageDir('./google-button.png').default} alt="google-login" />
      </GoogleButtom>
    </>
  )
}

export default GoogleLogin
