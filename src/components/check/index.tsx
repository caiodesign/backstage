import React from 'react'

import * as S from './styled'

type date = {
  date: string
  hour: string
}

type Props = {
  In: date
  Out: date
}

function Check({ In, Out }: Props) {
  return (
    <S.Block>
      <S.Item>
        <S.Label>Check-in</S.Label>
        <S.Date>{In.date}</S.Date>
        <S.Hour>{In.hour}</S.Hour>
      </S.Item>
      <S.Item2>
        <S.Label>Check-out</S.Label>
        <S.Date>{Out.date}</S.Date>
        <S.Hour>{Out.hour}</S.Hour>
      </S.Item2>
    </S.Block>
  )
}

export default Check
