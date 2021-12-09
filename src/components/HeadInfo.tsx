import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Wrap = styled.div`
  padding: 60px 0 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const H1 = styled.h1`
  font-size: 56px;
  font-weight: 500;
  margin-bottom: 60px;
`

const HeadInfo = () => (
  <Wrap>
    <H1>Hi! I’m Georgii, front-end developer</H1>
    <div>
      <StaticImage
        width={200}
        height={200}
        src="./img/photo.png"
        alt="Georgii Perepecho"
        style={{
          borderRadius: '100%',
        }}
      />
    </div>
  </Wrap>
)

export default HeadInfo
