/* eslint-disable */
module.exports = {
  siteMetadata: {
    title: "kencrocken.github.io",
    author: "Ken Crocken",
    description: "A full-stack web developer with a passion for creating websites and apps from the ground up. With additional interests in design, user experience and accessibility.",
    what: {
      title: "what",
    },
    who: {
      title: "who"
    },
    how: {
      title: "how"
    },
    contact: {
      title: "contact",
      email: "kcrocken@gmail.com",
      url: "kencrocken.github.io",
      address: {
        city: "Laurel",
        state: "MD"
      }
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'kencrocken.github.io',
        short_name: 'kenCrocken',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-flow'
  ],
}
