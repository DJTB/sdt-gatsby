import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { graphql, Link } from 'gatsby';

import logoSrc from 'assets/images/logo.png';
import media from 'utils/media';

import { Page, Container, PageHeading } from 'components/Layout';
import { ButtonCta } from 'components/Buttons';
import Img from 'components/Img';

const isOdd = n => n % 2 !== 0;

const CtaImg = styled(Link)`
  display: block;
  width: calc(100vw - 2rem);

  ${media.large`
    width: 390px;
  `};

  & .gatsby-image-wrapper {
    box-shadow: ${themeGet('shadows.box.small')};
    border-radius: ${themeGet('radii')};
    height: 100%;
  }
`;

const CtaButton = ButtonCta.withComponent(Link);

const CtaCopy = styled.div`
  max-width: 600px;

  & h1,
  & h3 {
    margin-bottom: 0.75rem;
    text-shadow: ${themeGet('shadows.text.small')};
  }

  & p {
    margin-left: 0.25rem;
  }

  ${media.large`
    flex: 1 0 500px;
    ${({ inverse }) => inverse && `order: -1`};
  `};
`;

const CtaItem = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  text-align: center;
  margin-left: -1rem;
  margin-right: -1rem;
  margin-top: 2.75rem;

  & + & {
    margin-top: 1.5rem;
  }

  & > * {
    margin: 0.75rem;
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
    <CtaImg to={to}>
      <Img fluid={imgSizes} />
    </CtaImg>
    <CtaCopy inverse={inverse}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <p>{content}</p>
      <CtaButton to={to}>{action}</CtaButton>
    </CtaCopy>
  </CtaItem>
);

const HomePage = ({ data }) => {
  const {
    allCtaJson: { edges }
  } = data;

  return (
    <Page>
      <Container>
        <Helmet>
          <title>Home</title>
          <meta
            name="description"
            content="Hilltribe villages, waterfalls, and jungle tours with knowledgeable local guides. Join us for an unforgettable holiday!"
          />
        </Helmet>
        <PageHeading>
          <div>
            <img src={logoSrc} alt="" />
          </div>
          <div>Something Different Tours</div>
        </PageHeading>
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
    cta1: file(base: { eq: "cta1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 390) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cta2: file(base: { eq: "cta2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 390) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cta3: file(base: { eq: "cta3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 390) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default HomePage;
