import styled from 'styled-components'

export const Text = styled.p`
  font-weight: 300;

  @media (min-width: 1024px) {
    font-size: 26px;
  }
`

export const Logo = styled.img`
  display: block;
  width: 30%;
  margin-bottom: 3vw;

  @media (min-width: 1024px) {
    margin: 0;
    width: 50%;
  }
`
