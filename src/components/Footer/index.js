import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Flex, Box } from 'components/Layout';
import colors from 'utils/colors';
import ContactInfo from './ContactInfo';
import TripAdvisorRating from './TripAdvisorRating';
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
        <Box px="1rem" alignSelf="flex-end" flex="0 0 auto">
          <Flex flexWrap="wrap">
            <TripAdvisorCertificate year="2012 – 2018" />
            <TripAdvisorRating tripadvisorUrl={props.tripadvisorUrl} />
          </Flex>
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

export default Footer;
