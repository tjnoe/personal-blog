import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import Particles from "./particles"

const HeroHeader = styled(`header`)`
  display: flex;
  justify-content: space-between;
  padding: ${rhythm(1.25)} calc((100vw - 550px - ${rhythm(1.25)}) / 2);
  position: relative;
`

const Nav = styled(`nav`)`
  display: flex;
  justify-content: space-between;

  .nav-link {
    margin-right: 10px;
    text-shadow: none;
  }
`

const Header = ({ siteTitle }) => {
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
        <Nav>
          <Link to={`/`} className="nav-link">
            Blog
          </Link>
          <Link to={`/about/`} className="nav-link">
            About
          </Link>
        </Nav>
      </HeroHeader>
      <Particles />
    </div>
  )
}

export default Header
