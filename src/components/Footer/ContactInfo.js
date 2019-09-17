import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import feather from 'utils/feather';
import { Box } from 'components/Layout';

const InfoLine = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0.5em;
`;

const InfoLink = InfoLine.withComponent('a');

const Wrapper = styled.div`
  padding: 1em 0;
  display: flex;
  font-size: 0.9em;
  flex-flow: row wrap;
  justify-content: center;

  & address {
    font-style: normal;
  }

  & .font-brand {
    margin-bottom: 0.25rem;
  }

  & .small {
    margin-left: 0.3rem;
    font-size: 0.8em;
  }

  & > * {
    flex: 1 1 auto;
  }
`;

const icon = name =>
  feather({
    name,
    is: 'span',
    measureArray: [18, 18],
    style: {
      display: 'flex',
      padding: '0.2em 0.75em 0.2em 0.2em'
    }
  });

const ContactInfo = ({
  address,
  phone,
  mobile1,
  mobile2,
  email,
  facebookUrl
}) => (
  <Wrapper>
    <Box as="address" py={2} m={0}>
      <h3 className="font-brand">SOMETHING DIFFERENT TOURS</h3>
      <Link to="/map">
        <InfoLine>
          {icon('map')}
          <span>
            {address.house} <br />
            {address.city}
            {', '}
            {address.state}
            {', '}
            {address.postcode}
          </span>
        </InfoLine>
      </Link>
      <InfoLink href={`tel:${phone}`}>
        {icon('phone')}
        <span>{phone}</span>
      </InfoLink>
      <InfoLink href={`tel:${mobile1}`}>
        {icon('smartphone')}
        <span>{mobile1}</span>
        <span className="small">(Whatsapp)</span>
      </InfoLink>
      <InfoLink href={`tel:${mobile2}`}>
        {icon('smartphone')}
        <span>{mobile2}</span>
      </InfoLink>
      <InfoLink href={`mailto:${email}`}>
        {icon('mail')}
        <span>{email}</span>
      </InfoLink>
      <InfoLink
        href={facebookUrl}
        target="_blank"
        rel="external noreferrer noopener"
      >
        {icon('facebook')}
        <span>SDT on Facebook</span>
      </InfoLink>
    </Box>
  </Wrapper>
);

ContactInfo.propTypes = {
  address: PropTypes.shape({
    house: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    postcode: PropTypes.string.isRequired
  }).isRequired,
  phone: PropTypes.string.isRequired,
  mobile1: PropTypes.string.isRequired,
  mobile2: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  facebookUrl: PropTypes.string.isRequired
};

export default ContactInfo;
