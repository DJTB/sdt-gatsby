/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

import { Page, Container, Box, PageHeading } from 'components/Layout';

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={props.zoom} defaultCenter={props.center}>
      <Marker position={props.marker} />
    </GoogleMap>
  ))
);

const MapPage = props => {
  const data = props.data.allMapJson.edges[0].node;

  return (
    <Page>
      <Container>
        <Helmet>
          <title>Map</title>
          <meta
            name="description"
            content="Location and directions for Something Different Tours office & home in Chiang Mai, Thailand"
          />
        </Helmet>
        <PageHeading>Find Us</PageHeading>
        <Box fontSize={[2, 3]} mb="2rem">
          <p style={{ marginBottom: 0, textAlign: 'center' }}>
            We are happy to pick you up from the airport or your hotel for any
            tours organised with us.
          </p>
        </Box>
        <Map
          {...data}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `75vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </Container>
    </Page>
  );
};

MapPage.propTypes = {
  data: PropTypes.shape({
    allMapJson: PropTypes.shape({
      edges: PropTypes.array
    })
  }).isRequired
};

export const query = graphql`
  query MapQuery {
    allMapJson {
      edges {
        node {
          googleMapURL
          zoom
          center {
            lat
            lng
          }
          marker {
            lat
            lng
          }
        }
      }
    }
  }
`;

export default MapPage;
