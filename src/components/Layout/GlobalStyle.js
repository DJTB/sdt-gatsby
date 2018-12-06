import { createGlobalStyle } from 'styled-components';

import 'assets/fonts/Capture_it.css';
import siteBgSrc from 'assets/images/bg-tile.png';
import theme from 'utils/theme';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  height: 100vh; /* sticky footer */
  background-color: #1a1a1a;
  background-image: url(${siteBgSrc});
}

body {
  color: ${theme.colors.white};
  background-color: rgba(255, 255, 255, 0.03);
  min-height: 100vh;
  height: auto;
}

#___gatsby, /* gatsby root wrapper */
#___gatsby > div[role="group"][tabindex] /* reach-router wrapping div */ {
  height: 100%;
}

h1 {
  color: ${theme.colors.accent};
  text-shadow: ${theme.shadows.text.small};
}

h2, h3 {
  color: ${theme.colors.orange[2]};
  text-shadow: ${theme.shadows.text.small};
}

a {
  text-decoration: none;
  color: inherit;
};

.font-brand {
  ${theme.fontStyles.brand};
}
`;

export default GlobalStyle;
