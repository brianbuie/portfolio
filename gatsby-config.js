module.exports = {
  plugins: [
    'gatsby-plugin-styled-components', 
    'gatsby-plugin-react-svg',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Khula',
          'Montserrat\:700i'
        ]
      }
    }
  ],
  pathPrefix: '/portfolio'
};