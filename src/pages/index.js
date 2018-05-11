/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import Link from 'gatsby-link';
import { Flex } from 'grid-styled';
import { Box } from '../components/Layout';
import colors from '../utils/colors';
import getYamlNode from '../utils/getYamlNode';

import { ButtonSecondary } from '../components/Buttons';

export default props => {
  const data = getYamlNode('cta')(props.data);
  return (
    <div>
      <Box bg={colors.primary}>
        <Box
          width={[1, 1, 1 / 2]}
          m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
          px={[3, 3, 0]}
          color={colors.secondary}
          align="center"
        >
          <Flex
            flexDirection="column"
            alignContent="center"
            alignItems="center"
          >
            {data.map((cta, index) => (
              <Box key={index} m={[1]} width={[1]}>
                <h1>{cta.title}</h1>
                <h2>{cta.subtitle}</h2>
                <p>{cta.content}</p>
                <Link to={cta.to}>
                  <ButtonSecondary>{cta.action}</ButtonSecondary>
                </Link>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allDataYaml {
      edges {
        node {
          cta {
            title
            subtitle
            content
            action
            to
          }
        }
      }
    }
  }
`;
