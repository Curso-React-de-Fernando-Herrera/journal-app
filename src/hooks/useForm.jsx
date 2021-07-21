import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

export const useForm = (initialStates = {}) => {

  const [inputStates, setstate] = useState(initialStates)

  const handleInputChange = useCallback((e) => {

    const { name, value } = e.target

    setstate((lastState) => {

      return {
        ...lastState,
        [name]: value
      }

    })
    
  }, [])

  return {
    handleInputChange,
    inputStates
  }
}

useForm.propTypes = {
  initialStates: PropTypes.object.isRequired
}
