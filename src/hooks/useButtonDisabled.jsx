import { useState } from 'react'

export const useButtonDisabled = () => {
  const [isDisabled, setIsDisabled] = useState(false)

  const handleDisabled = () => {
    setIsDisabled(true)
    console.log(isDisabled)
  }
  const handleRemoveDisabled = () => setIsDisabled(false)

  return {
    isDisabled,
    handleDisabled,
    handleRemoveDisabled
  }
}
