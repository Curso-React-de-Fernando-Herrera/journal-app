import PropTypes from 'prop-types'

const GlobalError = ({ errorMessage = "", colorMessage = "red" }) => {

}

GlobalError.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  colorMessage: PropTypes.string
}

export default GlobalError
