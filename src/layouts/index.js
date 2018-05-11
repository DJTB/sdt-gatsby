import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import 'assets/fonts/Capture_it.css';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import siteBgSrc from 'assets/images/bg-tile.png';
import theme from 'utils/theme';

/* eslint-disable */
injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100vh; /* sticky footer */
    background-color: #1a1a1a;
    background-image: url(${siteBgSrc});
  }

  body, #___gatsby {
    height: 100%; /* sticky footer */
    color: ${theme.colors.white};
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
/* eslint-enable */

const StickyFooter = styled.div`
  /* assumes <header/> + <main/> + <footer/> siblings */
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Main = styled.main`
  margin-bottom: 2rem;
`;

const Layout = ({ location, children, data }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Helmet defaultTitle="SDT" titleTemplate="%s | SDT">
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Something Different Tours" />
      </Helmet>
      <StickyFooter>
        <header>
          <Navigation />
        </header>
        <Main>{children()}</Main>
        <Footer {...data.allSocialJson.edges[0].node} />
      </StickyFooter>
    </React.Fragment>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export default Layout;

export const query = graphql`
  query LayoutQuery {
    allSocialJson {
      edges {
        node {
          address {
            house
            city
            state
            postcode
          }
          phone
          mobile1
          mobile2
          email
          facebookUrl
          tripadvisorUrl
        }
      }
    }
  }
`;
