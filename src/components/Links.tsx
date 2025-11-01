import React from 'react'
import styled from 'styled-components'
import { H2 } from '@components/Common'
import Github from '@components/img/github.svg'
import Linkedin from '@components/img/linkedin.svg'
import Stackoverflow from '@components/img/stackoverflow.svg'

const Wrap = styled.div`
  padding: 60px 0 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Link = styled.a`
  text-decoration: none;
  display: block;
  margin: 0 32px;
`

const HeadInfo = () => (
  <Wrap>
    <H2>Links</H2>
    <Content>
      <Link href="https://github.com/horprogs" target="_blank" rel="noopener noreferrer">
        <Github />
      </Link>
      <Link
        href="https://www.linkedin.com/in/georgii-perepecho/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin />
      </Link>
      <Link
        href="https://stackoverflow.com/users/5723095/georgy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Stackoverflow />
      </Link>
    </Content>
  </Wrap>
)

export default HeadInfo
