module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Khula', 'Montserrat:700i']
      }
    }
  ],
  pathPrefix: '/portfolio'
};
