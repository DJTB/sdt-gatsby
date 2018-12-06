import React, { Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';

import theme from 'utils/theme';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import GlobalStyle from './GlobalStyle';

const StickyFooter = styled.div`
  /* assumes <header/> + <main/> + <footer/> siblings */
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <Helmet defaultTitle="SDT" titleTemplate="%s | SDT">
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Something Different Tours" />
      </Helmet>
      <StickyFooter>
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
        <Footer />
      </StickyFooter>
    </Fragment>
  </ThemeProvider>
);

export default Page;
