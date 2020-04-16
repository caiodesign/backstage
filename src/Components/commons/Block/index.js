import styled from 'styled-components'
import theme from '../../../Theme'

const Block = styled.div`
  color: ${({ secondary }) => secondary ? theme.ice : theme.grey};

  ${({ centered }) => centered && (
    `
    display: flex;
    justify-content: center;
    align-items: center;
    `
  )}

  @media (min-width: 1024px) {
    width: ${({ width }) => width ? width + '%' : '100%'};

    ${({ deskCentered }) => deskCentered && (
    `
      display: flex;
      justify-content: center;
      align-items: center;
        `
  )}
  }

h2 {
  margin: 0;

  @media (min-width: 1024px) {
    font-size: 80px;
  }
}

h4 {
  margin: 0;
  color: ${theme.secondary};

  @media (min-width: 1024px) {
    font-size: 26px;
    margin-top: 0px;
    margin-left: 160px;
  }
}
`

export default Block
