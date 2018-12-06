import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { graphql, Link } from 'gatsby';

import logoSrc from 'assets/images/logo.png';
import media from 'utils/media';

import { Page, Container } from 'components/Layout';
import { ButtonCta } from 'components/Buttons';
import Img from 'components/Img';

const isOdd = n => n % 2 !== 0;

const CtaImg = styled(Link)`
  display: none;

  ${media.small`
    display: block;
    width: 100vw;
    margin: 1.5rem -1rem;
  `};

  ${media.large`
    width: 450px;
  `};

  & .gatsby-image-wrapper {
    height: 100%;
    ${media.large`
      box-shadow: ${themeGet('shadows.box.small')};
      border-radius: ${themeGet('radii')};
    `};
  }
`;

const CtaButton = ButtonCta.withComponent(Link);

const CtaCopy = styled.div`
  max-width: 600px;
  margin-bottom: 2rem;

  & h1,
  & h3 {
    margin-bottom: 0.75rem;
    text-shadow: ${themeGet('shadows.text.small')};
  }

  & p {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }

  ${media.small`
    margin-bottom: 0;
  `}

  ${media.large`
    flex: 1;
    ${({ inverse }) => inverse && `order: 2`};
  `};
`;

const CtaItem = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  text-align: center;
  margin-top: 2.75rem;

  & + & {
    margin-top: 1.5rem;
  }

  ${media.large`
    text-align: left;
    flex-flow: row wrap;
    align-items: flex-start;

    & > * {
      margin: 1.5rem;
    }
  `};
`;

const Cta = ({ title, subtitle, content, action, to, inverse, imgSizes }) => (
  <CtaItem>
    <CtaCopy inverse={inverse}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <p>{content}</p>
      <CtaButton to={to}>{action}</CtaButton>
    </CtaCopy>
    <CtaImg to={to}>
      <Img fluid={imgSizes} rounded={false} />
    </CtaImg>
  </CtaItem>
);

const Hero = styled.header`
  display: flex;
  position: relative;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  text-align: center;

  ${media.large`
     min-height: 66vh;
  `}

  & > .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;

const HeroScrim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    transparent,
    rgba(20, 20, 20, 0.4)
  );
  z-index: -1;
`;

const HomePage = ({ data }) => {
  const {
    allCtaJson: { edges }
  } = data;

  return (
    <Page>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Hilltribe villages, waterfalls, and jungle tours with knowledgeable local guides. Join us for an unforgettable holiday!"
        />
      </Helmet>
      <Hero>
        <Img
          objectPosition="center 18%"
          fluid={data.hero.childImageSharp.fluid}
          alt="Guests on tour in jungle"
        />
        <HeroScrim />
        <img
          src={logoSrc}
          alt="SDT Logo"
          onLoad={() => performance.mark('hero1')}
        />
        <h1 className="font-brand">Something Different Tours</h1>
      </Hero>
      <Container>
        {edges.map(({ node }, index) => (
          <Cta
            key={index}
            inverse={isOdd(index)}
            imgSizes={data[`cta${index + 1}`].childImageSharp.fluid}
            {...node}
          />
        ))}
      </Container>
    </Page>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    allCtaJson: PropTypes.shape({
      edges: PropTypes.array
    })
  }).isRequired
};

export const query = graphql`
  query IndexQuery {
    allCtaJson {
      edges {
        node {
          title
          subtitle
          content
          action
          to
        }
      }
    }
    hero: file(base: { eq: "hero-tour.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cta1: file(base: { eq: "hero-temple.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cta2: file(base: { eq: "hero-landscape.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cta3: file(base: { eq: "tour3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default HomePage;
