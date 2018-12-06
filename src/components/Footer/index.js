import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import colors from 'utils/colors';

import { Container, Flex, Box } from 'components/Layout';
import ContactInfo from './ContactInfo';
// import TripAdvisorRating from './TripAdvisorRating';
import TripAdvisorCertificate from './TripAdvisorCertificate';

const Wrapper = styled.footer`
  margin-top: 2rem;
  background-color: ${colors.text};
  color: ${colors.gray[2]};
`;

const Footer = props => (
  <Wrapper>
    <Container>
      <Flex
        mx="-1rem"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box px="1rem" flex="0 1 auto">
          <ContactInfo {...props} />
        </Box>
        <Box m="1rem" alignSelf="flex-end" flex="0 0 auto">
          <TripAdvisorCertificate
            year="2012 – 2018"
            tripadvisorUrl={props.tripadvisorUrl}
          />
        </Box>
      </Flex>
    </Container>
  </Wrapper>
);

Footer.propTypes = {
  address: PropTypes.shape({
    house: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postcode: PropTypes.string
  }).isRequired,
  phone: PropTypes.string.isRequired,
  mobile1: PropTypes.string.isRequired,
  mobile2: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  facebookUrl: PropTypes.string.isRequired,
  tripadvisorUrl: PropTypes.string.isRequired
};

const query = graphql`
  {
    allSocialJson {
      edges {
        node {
          address {
            house
            city
            state
            postcode
          }
          phone
          mobile1
          mobile2
          email
          facebookUrl
          tripadvisorUrl
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={query}
    render={queryData => {
      const data = queryData.allSocialJson.edges[0].node;
      return <Footer {...data} {...props} />;
    }}
  />
);
