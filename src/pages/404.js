import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

const BadRoute = () => (
  <Layout>
    <SEO />
    <h1>Page Not Found</h1>
    <p>
      Oh no! You tried to access a page that didn't exist. Try heading back to
      the <Link to={`/`}>home page</Link>.
    </p>
  </Layout>
)

export default BadRoute
