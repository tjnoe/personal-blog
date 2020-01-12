import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'
import BackgroundImage from 'gatsby-background-image'

const HeroHeader = styled(BackgroundImage)`
  display: flex;
  justify-content: space-between;
  padding: ${rhythm(1.25)};
  position: relative;
  background-color: #eaeaea;
`

const Header = ({ siteTitle }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "asfalt-dark.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <HeroHeader Tag="header" fluid={image.sharp.fluid}>
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