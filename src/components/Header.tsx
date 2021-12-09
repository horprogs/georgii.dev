import React from 'react'
import styled from 'styled-components'
import { Container } from './Common'
import Logo from '@components/img/logo.svg'

const Wrap = styled.div`
  padding: 16px 0;
`

const Header = () => (
  <Wrap>
    <Container>
      <Logo />
    </Container>
  </Wrap>
)

export default Header
