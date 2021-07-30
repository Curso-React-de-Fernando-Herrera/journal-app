import { Button } from './styles'

const BaseButton = (props) => {

  return (
    <Button {...props}>
      {props.children}
    </Button>
  )
}

export default BaseButton
