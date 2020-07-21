import React from 'react'

import Gallery from 'components/gallery'
import Container from 'components/container'
import Header from 'components/header'
import SimpleRow from 'components/simpleRow'
import Check from 'components/check'
import Row from 'components/row'
import Rules from 'components/rules'
import Footer from 'components/footer'
import imgs, { comprovante } from 'images'

import * as S from './styled'

const link = {
  maps:
    'https://www.google.com/maps/search/?api=1&query=Rua%20Adolfina%20Dagnone%2C%20120%2C%20Ch%C3%A1cara%20Recanto%20da%20Colina%20Verde%2C%20S%C3%A3o%20Paulo%2013057-552%2C%20Brasil',
  bank: 'https://nubank.com.br/pagar/32by9/fjDjDcaSlx',
  receipt: 'https://api.whatsapp.com/send?phone=5511969132927'
}

function Main() {
  return (
    <>
      <Gallery imgs={imgs} />
      <Container>
        <Header
          title="chics eventos"
          overtitle="sex., 31 de jul. – dom., 2 de ago."
        />
        <SimpleRow
          title="Como chegar"
          link={link.maps}
          icon={['fas', 'map-marker-alt']}
        />
        <SimpleRow
          title="Transfêrencia bancária"
          link={link.bank}
          icon={['fas', 'exchange-alt']}
        />
        <SimpleRow
          title="Enviar comprovante"
          link={link.receipt}
          icon={['fas', 'receipt']}
        />
        <SimpleRow
          title="Comprovante airbnb"
          link={comprovante}
          icon={['fas', 'file-pdf']}
        />
        <Check
          In={{ date: 'sex., 31 de julho', hour: '14:00' }}
          Out={{ date: 'dom., 2 de ago.', hour: '17:00' }}
        />
        <Row title="Comidas e bebidas">
          Valor estimado <S.Strong>R$160</S.Strong> por pessoa.
        </Row>
        <Row title="Casa">
          <p>
            Valor estimado <S.Strong>R$160</S.Strong> por pessoa.
          </p>
          <p>
            Faça a transfêrencia até <S.Strong>31 de agosto. </S.Strong>
          </p>
        </Row>
        <Row title="Regras da casa">
          <Rules />
        </Row>
        <Footer>by chics</Footer>
      </Container>
    </>
  )
}

export default Main
