import { injectGlobal } from 'styled-components';

const theme = {
  colors: {
    bkg: '#d4d3d1',
    blue: '#4c627b',
    orange: '#da732d',
    text: '#384d54',
  }
}

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    font-family: 'Khula', sans-serif;
    background-color: ${theme.colors.bkg};
    color: ${theme.colors.text};
  }

  body {
    margin: 0;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-style: italic;
    color: ${theme.colors.blue};
  }
`;

export default theme;