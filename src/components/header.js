import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import Particles from "./particles"
import BackgroundImage from "gatsby-background-image"

const HeroHeader = styled(`header`)`
  display: flex;
  justify-content: space-between;
  padding: ${rhythm(1.25)};
  position: relative;
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
    <div style={{ position: `relative` }}>
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
          <Link
            to={`/about/`}
            style={{ marginRight: `10px`, textShadow: `none` }}
          >
            About
          </Link>
        </nav>
      </HeroHeader>
      <Particles />
    </div>
  )
}

export default Header
