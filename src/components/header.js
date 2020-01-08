import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

const Header = ({ siteTitle }) => {
  return (
    <header
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        padding: `${rhythm(1.25)}`,
        backgroundColor: `hsla(0,0%,0%,0.04)`
      }}
    >
      <h3 style={{ margin: `0` }}>
        <Link 
          to={`/`} 
          style={{ 
            backgroundImage: `none`,
            color: `inherit`,
            textShadow: `none`, 
          }}
        >
          {siteTitle}
        </Link>
      </h3>
      <nav 
        style={{
          display: `flex`,
          justifyContent: `space-between`,
        }}
      >
        <Link to={`/`} style={{ marginRight: `10px`, textShadow: `none` }}>
          Blog
        </Link>
        <Link to={`/about/`} style={{ marginRight: `10px`, textShadow: `none` }}>
          About
        </Link>
      </nav>
    </header>
  )
}

export default Header;