import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { radii } from 'utils/theme';

const Wrapper = styled.div`
  /* injected tracking pixel image adds a 27px top space to this widget somehow */
  margin-top: -27px;
  margin-bottom: 1rem;

  & img {
    /* unwanted spacing inside of bg color */
    margin-bottom: 0 !important;
  }

  & #CDSRATINGWIDGET602 {
    border-radius: ${radii};
  }
`;

const TripAdvisorRating = ({ tripadvisorUrl, logoWidth }) => (
  <Wrapper id="TA_cdsratingsonlynarrow602" className="TA_cdsratingsonlynarrow">
    <div id="GqShhSA5i" className="TA_links kJDEq6e">
      <div id="aTDcTxjrRem" className="v39yYV1Uxo">
        <a
          href={tripadvisorUrl}
          target="_blank"
          rel="external noopener noreferrer"
        >
          <img
            width={logoWidth}
            src="https://www.tripadvisor.com/img/cdsi/img2/branding/tripadvisor_logo_transp_340x80-18034-2.png"
            alt="TripAdvisor"
          />
        </a>
      </div>
    </div>
  </Wrapper>
);

TripAdvisorRating.propTypes = {
  tripadvisorUrl: PropTypes.string.isRequired,
  logoWidth: PropTypes.string
};

TripAdvisorRating.defaultProps = {
  logoWidth: '115px'
};

export default TripAdvisorRating;
