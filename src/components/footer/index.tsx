import React from 'react'

import * as S from './styled'

type Props = { children: React.ReactNode }

function Footer({ children }: Props) {
  return (
    <S.Block>
      <p>{children}</p>
    </S.Block>
  )
}

export default Footer
