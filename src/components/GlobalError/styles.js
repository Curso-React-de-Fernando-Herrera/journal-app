import styled from '@emotion/styled'

export const ModalContainer = styled.div`
  position: absolute;
  margin-top: 1rem;
  left: 50%;
  transform: translateX(-50%) translateY(0);
  width: max-content;
  padding: 0.5rem 2rem;
  background-color: ${(props) => props.colorMessage};
  border-radius: 30px;
  animation: showHide 3s linear;

  @keyframes showHide {
    0% {
      transform: translateX(-50%) translateY(-100%);
    }
    10% {
      transform: translateX(-50%) translateY(0);
    }
    90% {
      transform: translateX(-50%) translateY(0);
    }
    100% {
      transform: translateX(-50%) translateY(-100%);
    }
  }
`
export const ModalText = styled.p`
  margin: 0;
`
