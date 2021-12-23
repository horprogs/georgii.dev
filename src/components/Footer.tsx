import React from 'react'
import styled from 'styled-components'
import { Container } from '@components/Common'

const Wrap = styled.footer`
  font-size: 14px;
  padding: 16px 0;
  text-align: center;

  a {
    color: #4e25f0;
  }
`

const Footer = () => (
  <Wrap>
    <Container>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby.js</a>. Design by{' '}
      <a
        href="https://www.behance.net/megmila2778a9"
        target="_blank"
        rel="noopener noreferrer"
      >
        Margarita Perepecho
      </a>
      .
    </Container>
  </Wrap>
)

export default Footer
