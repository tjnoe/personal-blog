module.exports = {
  siteMetadata: {
    title: `Tommy Noe's Blog`,
    description: `Tommy's developer blog, sharing tidbits of knowledge he's learning along his journey`,
    author: `@tommynoe`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      },
    },
  ],
}
