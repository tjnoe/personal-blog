import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'

const HeroHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${rhythm(1.25)};
  position: relative;
  background-color: #eaeaea;
  background-image: url('/images/asfalt-dark.png');
`

const Header = ({ siteTitle }) => {
  return (
    <HeroHeader>
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
    </HeroHeader>
  )
}

export default Header;