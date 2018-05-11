import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { fontSize } from 'styled-system';
import PropTypes from 'prop-types';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import colors from '../utils/colors';

/* eslint-disable */
import normalize from 'normalize.css';
injectGlobal`
  * {
      font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif;
      box-sizing: border-box;
  };

  html {
    height: 100vh;
  }

  /* for sticky footer */
  body, #___gatsby {
    height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  };

  h1, h2, h3, h4, h5, h6 {
    color: ${colors.text}
  };

  p {
    color: ${colors.text}
  }
`;
/* eslint-enable */

const FontConfig = styled.div`
  ${fontSize};
  /* sticky footer assuming header + main + footer */
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Layout = ({ children, data }) => (
  <FontConfig fontSize={[2, 3, 4]}>
    <header>
      <Navigation />
    </header>
    <main>{children()}</main>
    <Footer {...data.site.siteMetadata} />
  </FontConfig>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired
};

export default Layout;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
