import React from 'react'
import AwesomeSlider from 'react-awesome-slider'

import * as S from './styled'

import 'react-awesome-slider/dist/styles.css'

type Gallery = {
  imgs: string[]
}

function Gallery({ imgs }: Gallery) {
  function renderCounter(current: number, total: number) {
    return (
      <S.Counter>
        {current + 1}-{total}
      </S.Counter>
    )
  }

  return (
    <>
      <AwesomeSlider infinite bullets={false} organicArrows>
        {imgs.map((item, i) => (
          <S.Image key={item + i} data-src={item}>
            {renderCounter(i, imgs.length)}
          </S.Image>
        ))}
      </AwesomeSlider>
    </>
  )
}

export default Gallery
