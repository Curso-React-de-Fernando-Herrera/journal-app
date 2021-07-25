import React, { useEffect, useMemo } from 'react'
import { useForm } from 'hooks/useForm'
import { Content, FormContent, TitleInput, TextAreaInput } from './styles'

const EntryForm = ({ content }) => {
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
