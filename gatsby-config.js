const theme = require('./src/theme');

const pathPrefix = '/portfolio';

const withPrefix = path => (process.argv.includes('--prefix-paths') ? pathPrefix + path : path);

module.exports = {
  pathPrefix,
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
        start_url: withPrefix('/'),
        background_color: theme.colors.blue,
        theme_color: theme.colors.orange,
        icon: 'src/assets/favicon.png',
        icons: [
          {
            src: withPrefix('/favicon.png'),
            sizes: '32x32',
            type: 'image/png'
          },
          {
            src: withPrefix('/icon-48x48.png'),
            sizes: '48x48',
            type: 'image/png'
          },
          {
            src: withPrefix('/icon-72x72.png'),
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: withPrefix('/icon-96x96.png'),
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: withPrefix('/icon-144x144.png'),
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: withPrefix('/icon-192x192.png'),
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: withPrefix('/icon-256x256.png'),
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: withPrefix('/icon-384x384.png'),
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: withPrefix('/icon-512x512.png'),
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    'gatsby-plugin-offline'
  ]
};
