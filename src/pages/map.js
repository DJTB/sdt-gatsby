/* eslint-disable react/prop-types */
import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import { Box } from '../components/Layout';
import colors from '../utils/colors';
import getYamlNode from '../utils/getYamlNode';

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={props.zoom} defaultCenter={props.center}>
      <Marker position={props.marker} />
    </GoogleMap>
  ))
);

export default props => {
  const data = getYamlNode('map')(props.data);
  return (
    <Box bg={colors.primary}>
      <Box
        width={[1, 1, 2 / 3]}
        m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
        px={[3, 3, 0]}
        color={colors.secondary}
      >
        <h1>Find Us</h1>
        <Map
          {...data.config}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <Box py={3}>
          <p>{data.content}</p>
        </Box>
      </Box>
    </Box>
  );
};

export const query = graphql`
  query MapQuery {
    allDataYaml {
      edges {
        node {
          map {
            content
            config {
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
    }
  }
`;
