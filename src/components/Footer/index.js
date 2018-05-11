import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import colors from '../../utils/colors';
import { Box } from '../Layout';
import feather from '../../utils/feather';
import media from '../../utils/media';

const FooterWrapper = styled.footer`
  overflow: hidden;
  background-color: ${colors.text};
  color: ${colors.gray[2]};
  text-align: center;

  & img {
    display: block;
    margin: 0;
  }
  & p {
    color: ${colors.gray[2]};
  }
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  margin-bottom: 1.45rem;
  text-transform: uppercase;
  padding: 0;
  & a {
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.15s ease-in;
    transition: color 0.15s ease-in;

    &:hover {
      text-decoration: none;
      box-shadow: none;
      opacity: 1;
      transition: opacity 0.15s ease-in;
    }
  }
  & li {
    margin: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  & p {
    margin: 0;
    margin-bottom: 1.45rem;
  }
`;

const SocialList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;

  ${media.large`
    width: 50%;
    margin-left: auto;
  `};
`;

const SvgWrapper = styled.div`
  & svg {
    opacity: 0.5;
    transition: opacity 0.15s ease-in;
    transition: color 0.15s ease-in;

    &:hover {
      text-decoration: none;
      box-shadow: none;
      opacity: 1;
      transition: opacity 0.15s ease-in;
    }
  }
`;

const Footer = props => (
  <FooterWrapper>
    <Box p={[3, 3, 4]} align="left" color="white">
      <Flex
        flexWrap={['wrap', 'wrap', 'nowrap']}
        justifyContent="space-between"
      >
        <Box width={[1, 1, 1 / 3]}>
          <Wrapper>
            <div>
              <p>{props.title}</p>
            </div>
          </Wrapper>
        </Box>
        <Box width={[1, 1, 1 / 3]}>
          <Wrapper>
            <List>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
            </List>
          </Wrapper>
        </Box>
        <Box width={[1, 1, 1 / 3]}>
          <Wrapper>
            <SocialList>
              <li>
                <a
                  title="Link to our Facebook page"
                  href={props.facebook}
                  target="_blank"
                  rel="noopener"
                >
                  <SvgWrapper>{feather('facebook', ['30', '30'])}</SvgWrapper>
                </a>
              </li>
              {/* feather phone, smartphone, map-pin */}
              <li>
                <a title="Say Hello" href={`mailto:${props.email}`}>
                  <SvgWrapper>{feather('mail', ['30', '30'])}</SvgWrapper>
                </a>
              </li>
            </SocialList>
          </Wrapper>
        </Box>
      </Flex>
    </Box>
  </FooterWrapper>
);

Footer.propTypes = {
  title: PropTypes.string,
  facebook: PropTypes.string,
  email: PropTypes.string
};

Footer.defaultProps = {
  title: 'Something Different Tours',
  facebook: 'https://facebook.com',
  email: 'sdtchiangmai@hotmail.com'
};

export default Footer;
