import React from 'react'
import Header from '../../Components/Header'
import Content from '../../Components/Content'
import Footer from '../../Components/Footer'
import { Container, Document } from './styles'

function App() {
  return (
    <Document>
      <Container>
        <Header />
        <Content />
      </Container>
    </Document>
  )
}

export default App
