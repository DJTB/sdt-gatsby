/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { Box } from '../components/Layout';
import colors from '../utils/colors';
import getYamlNode from '../utils/getYamlNode';

export default props => {
  const data = getYamlNode('tours')(props.data);
  return (
    <Box bg={colors.primary}>
      <Box
        width={[1, 1, 1 / 2]}
        m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
        px={[3, 3, 0]}
        color={colors.secondary}
      >
        {data.map((tour, index) => (
          <div key={index}>
            <h1>{tour.title}</h1>
            {tour.content.map((text, index) => <p key={index}>{text}</p>)}
            {tour.notes.map((text, index) => <p key={index}>{text}</p>)}
            <p>{tour.price}</p>
          </div>
        ))}
      </Box>
    </Box>
  );
};

export const query = graphql`
  query ToursQuery {
    allDataYaml {
      edges {
        node {
          tours {
            title
            content
            notes
            price
          }
        }
      }
    }
  }
`;
