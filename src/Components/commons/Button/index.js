import styled from 'styled-components'
import theme from '../../../Theme'

const Button = styled.a`
  display: ${({ desktop }) => desktop ? 'none' : 'inline-block'};
  text-transform: uppercase;
  cursor: pointer;
  background-color: ${({ secondary }) => secondary ? theme.secondary : theme.grey};
  color: ${theme.white};
  transition: .3s;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  padding: 3vw;

  @media (min-width: 1024px) {
    display: inline-block;
    margin-right: 10px;
    font-size: 22px;
    padding: 14px;
  }

  &:hover{
    transform: translateY(-1px);
  }
`

export default Button
