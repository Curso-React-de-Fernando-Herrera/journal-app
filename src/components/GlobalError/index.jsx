import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { colors } from 'styles/variables/colors'

import { ModalContainer, ModalText } from './styles'

const GlobalError = ({ errorMessage = "", colorMessage = `${colors.warning}`, removeMessage }) => {
  const [showMessage, setShowMessage] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false)
      removeMessage(false)
    }, 3000)
  }, [removeMessage])

  return (
    <>
      {
        showMessage
          ? (
            <ModalContainer colorMessage={colorMessage}>
              <ModalText>{errorMessage}</ModalText>
            </ModalContainer>
          )
          : null
      }
    </>
  )
}

const ModalError = ({ errorMessage = "", colorMessage = `${colors.warning}`, removeMessage }) => {
  return ReactDOM.createPortal(
    <GlobalError
      colorMessage={colorMessage}
      errorMessage={errorMessage}
      removeMessage={removeMessage}
    />,
    document.getElementById('modal')
  )
}

ModalError.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  colorMessage: PropTypes.string
}

export default ModalError
