import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from './Header'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Montserrat, Helvetica, Sans-Serif;
  }
`

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <GlobalStyle />
    <Header />
    <main>{children}</main>
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  </>
)

export default Layout
