import React from 'react'
import Container from '../commons/Container'
import Block from '../commons/Block'
import Button from '../commons/Button'
import { Text, Logo } from './styles'
import logoSrc from '../../assets/backstage-logo-lb.png'

function Header() {

  return (
    <>
      <Container reverse>
        <Block width="55" deskCentered>
          <Logo src={logoSrc}></Logo>
        </Block>
        <Block width="45">
          <h2>Apenas convidados</h2>
          <Text>
            Nossa idéia é reunir as pessoas que realmente nos importam, para uma trocação de tiro honesta.
          </Text>
          <Button desktop href="steam://connect/34.95.228.42:27015">jogar agora</Button>
          <Button secondary href="https://discord.gg/8EA3T7w">discord</Button>
        </Block>
      </Container>
    </>
  )
}

export default Header
