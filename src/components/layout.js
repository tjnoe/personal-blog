import React from 'react'
import Header from './header'
import { rhythm } from '../utils/typography'

const Layout = ({ children }) => {
  return (
    <div
      style={{ 
        margin: `0 auto`,
        maxWidth: `700px`,
        padding: `${rhythm(2)}`,
        paddingTop: `${rhythm(1.5)}`
      }}
      >
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> for #100DaysOfGatsby
      </footer>
    </div>
  )
}

export default Layout