import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  background-color: #4e25f0;
  color: #fff;
  padding: 60px 0;
`
const Text = styled.div`
  font-size: 24px;
  line-height: 1.5;
  max-width: 950px;
  margin: auto;
`
const H2 = styled.h2`
  font-size: 37px;
  font-weight: 500;
  margin: 0;
  padding: 0 0 40px;
  text-align: center;
`

const Greetings = () => (
  <Wrap>
    <H2>Nice to meet you!</H2>
    <Text>
      I&apos;m a front-end developer, based in London, love developing user-friendly and
      reliable interfaces.
    </Text>
  </Wrap>
)

export default Greetings
