import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { startUploadImage } from 'actions/journal'
import BaseButton from 'components/BaseButton'

import { InputHide } from './styles'

const UploadImageButton = ({ state: inputStates }) => {
  const imageInputRef = useRef()
  const dispatch = useDispatch()

  const handleUseInputFile = () => {
    imageInputRef.current.click()
  }

  const handleSubmitImage = (e) => {
    const [file] = e.target.files
    dispatch(startUploadImage({ note: inputStates, file }))
  }

  return (
    <>
      <InputHide type="file" ref={imageInputRef} onChange={handleSubmitImage} />
      <BaseButton type="button" onClick={handleUseInputFile}>Subir Imagen</BaseButton>
    </>
  )
}

export default UploadImageButton
