import React from 'react'

import * as S from './styled'

type Props = {
  title: string
  children: React.ReactNode
}

function Row({ title, children }: Props) {
  return (
    <S.Block>
      <S.Title>{title}</S.Title>
      {children}
    </S.Block>
  )
}

export default Row
