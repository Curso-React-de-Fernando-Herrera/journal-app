import NewJournalButton from "components/NewJournalButton"

import { Container, Title } from './styles'

const JournalNotSelect = () => {
  return (
    <Container>
      <Title>No hay libretas creadas o no has seleccionado ninguna.</Title>
      <NewJournalButton />
    </Container>
  )
}

export default JournalNotSelect
