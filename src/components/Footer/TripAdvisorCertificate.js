import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import certificateSrc from 'assets/images/ta-cert.png';

const Wrapper = styled.div`
  font: normal 13px Verdana, 'Bitstream Vera Sans', Arial, Helvetica, sans-serif;
  background-color: #fff;
  overflow: hidden;
  color: #222;
  width: 130px;
  height: 110px;
  text-align: center;
  border-radius: 5px;
`;

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  letter-spacing: -0.12px;
  padding: 5px 2px 0;
`;

const Year = styled.div`
  position: relative;
  z-index: 2;
`;

const Logo = styled.div`
  & a:visited {
    border: none;
    font-weight: normal;
    color: #000;
  }
  & img {
    border: none;
    display: block;
    margin: -10px auto 0;
    width: 102px;
  }
`;

const TripAdvisorCertificate = ({ year, tripadvisorUrl }) => (
  <Wrapper>
    <Title> Certificate of Excellence </Title>
    <Year>{year}</Year>
    <Logo>
      <a
        target="_blank"
        rel="external noopener noreferrer"
        href={tripadvisorUrl}
      >
        <img src={certificateSrc} alt="TripAdvisor" />
      </a>
    </Logo>
  </Wrapper>
);

TripAdvisorCertificate.propTypes = {
  year: PropTypes.string.isRequired,
  tripadvisorUrl: PropTypes.string.isRequired
};

export default TripAdvisorCertificate;
