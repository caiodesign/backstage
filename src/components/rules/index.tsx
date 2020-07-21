import React, { useState } from 'react'

import * as S from './styled'

function Rules() {
  const [showAll, setShowAll] = useState(false)

  function onClick(bool: boolean) {
    setShowAll(bool)
  }

  return (
    <>
      <p>
        Devolver a casa nas mesmas condições de limpeza que foi encontrado tais
        como: fogão, geladeira, churrasqueira, etc..
      </p>
      <p>BILHAR- Proibido cigarro, cervejas e outros componentes derivados.</p>
      <p>
        Não jogar tampinha e bitucas de cigarro pela chácara. E usar os 6
        cinzeiros nas dependências da casa.
      </p>
      {showAll ? (
        <>
          <p>Fornecemos produtos de limpeza e Sanitos.</p>
          <p>
            PISCINA – Não é permitido comer e beber na piscina, bem como a
            utilização de bronzeadores e qualquer objeto cortante ou perfurante.
          </p>
          <p>
            FOGÃO- Retirar resto de alimento nas extremidades e nas bandejas
            internas e em geral, limpar também o forno.
          </p>
          <p>
            CHURRASQUEIRA E GRELHA- entregar da mesma forma que foi entregue:
            retirar cinzas e limpar a grelha, fornecemos os objetos para
            limpezas.
          </p>
          <p>
            GELADEIRA- Retirar todos os condimentos internos e fazer a limpeza
            interna.
          </p>
          <p>
            NATUREZA – O respeito deve ser observado de acordo com os princípios
            da consciência ecológica, colocando lixo e bitucas de cigarro,
            tampinhas, lacres, latinhas, garrafas, papel e plásticos em locais
            apropriados e não agredindo árvores, plantas, frutas e flores como
            também pequenos animais próprios do local – passarinhos
          </p>
          <p>
            É de responsabilidade do hóspedes a organização das dependências,
            colocando todo o lixo em sacos fechados nos locais destinados,
            retirando sobras de alimento e de decoração em todas as extremidades
            da casa e quintal, recolocando móveis, utensílios da cozinha e
            objetos em seus locais originais, desligando luzes, verificando
            fechamento de torneiras, janelas, e portas A vistoria na entrega das
            chaves e a limpeza de todas as dependências utilizadas são de
            responsabilidade do hóspedes .
          </p>
          <p>
            O hóspedes declara ter vistoriado a chácara antes da locação momento
            em que serão esclarecidas todas as dúvidas quanto ao uso, capacidade
            e disponibilidades, obrigando-se a restituir o imóvel finda a
            locação, no estado em que recebeu salvo as deteriorações decorrentes
            do seu uso normal, sem direito a retenção, indenização ou
            compensação de qualquer espécie ao desocupar o imóvel. Após o
            termino da locação, regulada por este contrato, hóspedes e
            anfritrião, vistoriarão juntos a chácara no período de 30 minutos.
          </p>
          <p>
            <S.Strong onClick={() => onClick(false)}>Leia menos :)</S.Strong>
          </p>
        </>
      ) : (
        <p>
          ... <S.Strong onClick={() => onClick(true)}>Leia mais</S.Strong>
        </p>
      )}
    </>
  )
}

export default Rules
