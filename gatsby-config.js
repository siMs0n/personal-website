module.exports = {
  siteMetadata: {
    title: `Simon Nielsen`,
    description: `My name is Simon Nielsen. I’m a software engineer with a passion for web development. Right now I’m most interested in frontend, both designing and coding.`,
    author: `Simon Nielsen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Simon Nielsen`,
        short_name: `Simon`,
        start_url: `/`,
        background_color: `#ef626c`,
        theme_color: `#ef626c`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
