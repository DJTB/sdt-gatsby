import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Link from 'gatsby-link';
import Img from 'components/Img';
import logoSrc from 'assets/images/logo.png';
import media from 'utils/media';
import { Container, PageHeading } from 'components/Layout';
import { ButtonCta } from 'components/Buttons';

const isOdd = n => n % 2 !== 0;

const CtaImg = styled(Link)`
  display: block;
  width: 320px;

  ${media.large`
    width: 390px;
  `};

  & .gatsby-image-outer-wrapper {
    box-shadow: ${themeGet('shadows.box.small')};
    border-radius: ${themeGet('radii')};
  }

  & .gatsby-image-outer-wrapper,
  & .gatsby-image-wrapper {
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
      <Img sizes={imgSizes} />
    </CtaImg>
    <CtaCopy inverse={inverse}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <p>{content}</p>
      <CtaButton to={to}>{action}</CtaButton>
    </CtaCopy>
  </CtaItem>
);

export default ({ data }) => {
  const ctaData = data.allCtaJson.edges;
  return (
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
      {ctaData.map(({ node }, index) => (
        <Cta
          key={index}
          inverse={isOdd(index)}
          imgSizes={data[`cta${index + 1}`].childImageSharp.sizes}
          {...node}
        />
      ))}
    </Container>
  );
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
        sizes(maxWidth: 390) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    cta2: file(base: { eq: "cta2.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 390) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    cta3: file(base: { eq: "cta3.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 390) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
