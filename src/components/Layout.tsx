import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './Header'
import Footer from '@components/Footer'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Montserrat, Helvetica, Sans-Serif;
  }
`

const Main = styled.main``

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <GlobalStyle />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
)

export default Layout
