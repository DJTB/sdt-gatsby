import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Container, PageHeading } from 'components/Layout';
import Gallery from 'components/Gallery';

export default ({ data }) => (
  <Container>
    <Helmet>
      <title>Gallery</title>
      <meta
        name="description"
        content="Photos taken with customers on Something Different Tours"
      />
    </Helmet>
    <PageHeading>Intrepid Explorers</PageHeading>
    <Gallery
      data={data.images.edges.map(({ node }) => node.childImageSharp.sizes)}
    />
  </Container>
);

export const pageQuery = graphql`
  query GalleryQuery {
    images: allFile(
      filter: { relativeDirectory: { eq: "gallery" } }
      sort: { fields: [base], order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 768, quality: 85) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
