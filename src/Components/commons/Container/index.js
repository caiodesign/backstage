import styled from 'styled-components'
import theme from '../../../Theme'

const Container = styled.div`
  background-color: ${({ secondary }) => secondary ? theme.grey : theme.white};

  padding: 8vh 4vw;
  display: flex;
  flex-direction: column;


  @media (min-width: 1024px) {
    flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row'};
    padding: 100px 4vw;
    display: flex;
    justify-content: space-between;
  }
`

export default Container
