import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import { Page, Container, PageHeading } from 'components/Layout';
import Gallery from 'components/Gallery';

const GalleryPage = ({ data }) => (
  <Page>
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
        data={data.images.edges.map(({ node }) => node.childImageSharp.fluid)}
      />
    </Container>
  </Page>
);

GalleryPage.propTypes = {
  data: PropTypes.shape({
    edges: PropTypes.array
  }).isRequired
};

export const pageQuery = graphql`
  query GalleryQuery {
    images: allFile(
      filter: { relativeDirectory: { eq: "gallery" } }
      sort: { fields: [base], order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 768, quality: 85) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default GalleryPage;
