module.exports = {
  siteMetadata: {
    title: `Schellack.net`,
    name: `Jonathan Schellack`,
    siteUrl: `https://schellack.net`,
    description: `Jonathan Schellack's web site`,
    hero: {
      heading: `Welcome to Schellack.net<br/>Grab a ☕ & stay a while`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/schellack`,
      },
      {
        name: `github`,
        url: `https://github.com/schellack`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/schellack`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/schellack/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jonathan Schellack's Site`,
        short_name: `Schellack.net`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
