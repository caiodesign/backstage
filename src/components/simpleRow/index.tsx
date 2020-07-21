import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import * as S from './styled'

type Props = {
  icon: IconProp
  title: string
  link: string
}

function SimpleRow({ icon, title, link }: Props) {
  return (
    <S.Block>
      <a href={link} target="_blank">
        <S.Flex>
          <div>
            <S.Icon>
              <FontAwesomeIcon icon={icon} />
            </S.Icon>
            <span>{title}</span>
          </div>
          <FontAwesomeIcon icon={['fas', 'chevron-right']} />
        </S.Flex>
      </a>
    </S.Block>
  )
}

export default SimpleRow
