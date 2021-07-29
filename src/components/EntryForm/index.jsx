import { useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import { useForm } from 'hooks/useForm'
import { journalUpdate, startUploadImage } from 'actions/journal'
import { colors } from 'styles/variables/colors'

import ModalError from 'components/GlobalError'

import { Content, FormContent, TitleInput, TextAreaInput } from './styles'

const EntryForm = ({ content }) => {
  const [showMessage, setShowMessage] = useState(false)
  const dispatch = useDispatch()
  const imageInputRef = useRef()

  const initialState = useMemo(() => ({
    id: content.id,
    title: content.title,
    body: content.body,
    imgUrl: content.imgUrl,
  }), [content.id, content.body, content.title, content.imgUrl])

  const { inputStates, handleInputChange, handleReset } = useForm(initialState)
  const { title = "", body = "" } = inputStates

  useEffect(() => {
    handleReset(initialState)
  }, [initialState, handleReset])

  const handleCreate = e => {
    e.preventDefault()
    dispatch(journalUpdate({ ...inputStates, id: content.id }))
    setShowMessage(true)
  }

  const handleUseInputFile = () => {
    imageInputRef.current.click()
  }

  const handleSubmitImage = (e) => {
    const [file] = e.target.files
    dispatch(startUploadImage({ note: inputStates, file }))
  }

  return (
    <>
      <Content>
        <FormContent onSubmit={handleCreate}>
          <TitleInput type="text" placeholder="Titulo..." name="title" value={title} onChange={handleInputChange} />
          <TextAreaInput placeholder="Escribe aqui lo que quieras..." name="body" value={body} onChange={handleInputChange}></TextAreaInput>
          <button type="button">Eliminar</button>
          <input type="file" ref={imageInputRef} onChange={handleSubmitImage} />
          <button type="button" onClick={handleUseInputFile}>Subir Imagen</button>
          <button type="submit">Guardar</button>
        </FormContent>
      </Content>
      {
        showMessage && <ModalError errorMessage="Mensaje guardado! 😁" removeMessage={setShowMessage} colorMessage={colors.succes} />
      }
    </>
  )
}

export default EntryForm
