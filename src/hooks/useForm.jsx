import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

export const useForm = (initialStates = {}) => {
  const [inputStates, setState] = useState(initialStates)

  const handleInputChange = useCallback((e) => {

    const { name, value } = e.target

    setState((lastState) => {

      return {
        ...lastState,
        [name]: value
      }

    })

  }, [])

  const handleReset = useCallback((state = initialStates) => {
    setState(state)
  }, [initialStates])

  return {
    handleInputChange,
    inputStates,
    handleReset
  }
}

useForm.propTypes = {
  initialStates: PropTypes.object.isRequired
}
