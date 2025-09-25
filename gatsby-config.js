module.exports = {
    siteMetadata: {
      title: `I like Google fonts`
    },
    plugins: [
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Raleway`,
            `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
          ],
          display: 'swap'
        }
      }
    ]
  }