import { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { useForm } from 'hooks/useForm'
import { Content, FormContent, TitleInput, TextAreaInput } from './styles'
import { journalUpdate } from 'actions/journal'

const EntryForm = ({ content }) => {
  const dispatch = useDispatch()

  const initialState = useMemo(() => ({
    title: content.title,
    body: content.body
  }), [content.body, content.title])

  const { inputStates, handleInputChange, handleReset } = useForm(initialState)
  const { title, body } = inputStates

  useEffect(() => {
    handleReset(initialState)
  }, [initialState, handleReset])


  const handleCreate = e => {
    e.preventDefault()
    dispatch(journalUpdate({ ...inputStates, id: content.id }))
  }

  return (
    <Content>
      <FormContent onSubmit={handleCreate}>
        <TitleInput type="text" placeholder="Titulo..." name="title" value={title} onChange={handleInputChange} />
        <TextAreaInput placeholder="Escribe aqui lo que quieras..." name="body" value={body} onChange={handleInputChange}></TextAreaInput>
        <button>Eliminar</button>
        <button>Subir Imagen</button>
        <button type="submit">Guardar</button>
      </FormContent>
    </Content>
  )
}

export default EntryForm
