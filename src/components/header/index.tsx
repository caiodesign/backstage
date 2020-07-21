import React from 'react'

import * as S from './styled'

type Props = {
  title: string
  overtitle: string
}

function Header({ title, overtitle }: Props) {
  return (
    <S.Block>
      <p>{overtitle}</p>
      <h1>{title}</h1>
    </S.Block>
  )
}

export default Header
