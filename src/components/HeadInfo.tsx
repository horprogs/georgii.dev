import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import Background from '@components/Background'

const Wrap = styled.div`
  padding: 60px 0 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
const H1 = styled.h1`
  font-size: 56px;
  font-weight: 500;
  margin-bottom: 60px;
`

const HeadInfo = () => {
  const [_, forceUpdate] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    forceUpdate(Math.random)
  }, [ref])

  return (
    <Wrap ref={ref}>
      <Background anchor={ref?.current} />
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
}

export default HeadInfo
