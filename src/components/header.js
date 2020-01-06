import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

const Header = ({ siteTitle }) => {
  return (
    <header
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        marginBottom: `${rhythm(1.5)}`,
      }}
    >
      <h3 style={{ margin: `0` }}>
        <Link 
          to={`/`} 
          style={{ 
            backgroundImage: `none`,
            color: `inherit` 
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
        <Link to={`/about/`} style={{ marginRight: `10px`}}>
          About
        </Link>
      </nav>
    </header>
  )
}

export default Header;