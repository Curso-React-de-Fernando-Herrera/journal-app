import React from 'react'
import { Content, FormContent, TitleInput, TextAreaInput } from './styles'

const EntryForm = () => {
  const handleCreate = e => {
    e.preventDefault()
  }

  return (
    <Content>
      <FormContent onSubmit={ handleCreate }>
        <TitleInput type="text" placeholder="Titulo..." />
        <TextAreaInput placeholder="Escribe aqui lo que quieras..."></TextAreaInput>
        <button>Eliminar</button>
        <button>Subir Imagen</button>
        <button type="submit">Guardar</button>
      </FormContent>
    </Content>
  )
}

export default EntryForm
