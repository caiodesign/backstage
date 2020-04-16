import React from 'react'
import Container from '../commons/Container'
import Block from '../commons/Block'

function Content() {

  return (
    <>
      <Container secondary>
        <Block width="45" secondary>
          <h2>Tickrate 128</h2>
          <h4>connect 34.95.228.42:27015</h4>
        </Block>
      </Container>
      <Container>
        <Block width="45">
          <h2>+ infos</h2>
          <h4>em breve...</h4>
        </Block>
      </Container>
      <Container secondary>
        <Block width="45" secondary>
          <h2>contato</h2>
          <h4>colive.dev@gmail.com</h4>
        </Block>
      </Container>
    </>
  )
}

export default Content
