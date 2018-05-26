const theme = require('./src/theme');

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
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Brian Buie',
        short_name: 'BrianBuie',
        start_url: '/',
        background_color: theme.colors.blue,
        theme_color: theme.colors.orange,
        icon: 'src/assets/favicon.png'
      }
    }
  ],
  pathPrefix: '/portfolio'
};
