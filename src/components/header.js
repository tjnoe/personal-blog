import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'

const HeroHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${rhythm(1.25)};
  position: relative;

  ::before {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url('/images/alexander-schimmeck-hero.jpg');
    background-position: top 20% center;
    background-size: cover;
    filter: grayscale(100%);
    z-index: -1;
  }
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