import { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'

import { journalUpdate } from 'actions/journal'
import { useForm } from 'hooks/useForm'

import ModalError from 'components/GlobalError'
import BaseButton from 'components/BaseButton'
import UploadImageButton from 'components/UploadImageButton'

import { colors } from 'styles/variables/colors'
import { Content, FormContent, TitleInput, TextAreaInput, TextContent, ButtonContainers, DateText } from './styles'
import { handleGetDate } from 'helpers/getDateWithMoment'

const EntryForm = ({ content }) => {
  const [showMessage, setShowMessage] = useState(false)
  const dispatch = useDispatch()


  const initialState = useMemo(() => ({ ...content }), [content])

  const { inputStates, handleInputChange, handleReset } = useForm(initialState)
  const { title = "", body = "", date } = inputStates

  const { formatedDate } = handleGetDate(date)

  useEffect(() => {
    handleReset(initialState)
  }, [initialState, handleReset])

  const handleCreate = e => {
    e.preventDefault()
    dispatch(journalUpdate({ ...inputStates, id: content.id }))
    setShowMessage(true)
  }

  return (
    <>
      <Content>
        <FormContent onSubmit={handleCreate}>
          <DateText>{formatedDate.format('dddd Do MMMM YYYY')}</DateText>
          <TextContent>
            <TitleInput type="text" placeholder="Titulo..." name="title" value={title} onChange={handleInputChange} />
            <TextAreaInput placeholder="Escribe aqui lo que quieras..." name="body" value={body} onChange={handleInputChange}></TextAreaInput>
          </TextContent>
          <ButtonContainers>
            <BaseButton type="button">Eliminar</BaseButton>
            <UploadImageButton state={inputStates} />
            <BaseButton type="submit" isBig={true}>Guardar</BaseButton>
          </ButtonContainers>
        </FormContent>
      </Content>
      {
        showMessage && <ModalError errorMessage="Mensaje guardado! 😁" removeMessage={setShowMessage} colorMessage={colors.succes} />
      }
    </>
  )
}

export default EntryForm
