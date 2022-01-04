import React from 'react'
import styled from 'styled-components'
import { H2 } from '@components/Common'

const Wrap = styled.div`
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = styled.div`
  display: flex;
  justify-content: center;

  @media all and (max-width: 835px) {
    flex-direction: column;
  }
`

type Props = {
  title: string
  children: React.ReactNode
}

const Section = ({ title, children }: Props) => {
  return (
    <Wrap>
      <H2>{title}</H2>
      <Content>{children}</Content>
    </Wrap>
  )
}

export default Section
