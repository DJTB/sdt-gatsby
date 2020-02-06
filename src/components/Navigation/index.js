import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Headroom from 'react-headroom';
import { Link } from 'gatsby';

import media from 'utils/media';
import feather from 'utils/feather';

import { Container } from 'components/Layout';
import { ButtonPlain } from 'components/Buttons';
import MobileNav from './mobile';

const HomeLink = styled(Link)`
  ${themeGet('fontStyles.brand')};
  font-size: 2rem;
`;

const basicNav = css`
  line-height: 1;
  font-weight: 600;
  width: 100%;
  color: ${themeGet('colors.secondary')};
  background-color: ${themeGet('colors.black')};

  .headroom--pinned &,
  .headroom--unfixed & {
    box-shadow: ${themeGet('shadows.box.small')};
  }

  & > div {
    width: 100%;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

const FullNav = styled.div`
  ${basicNav};
  display: none;

  ${media.small`
    display: flex;
  `};

  & ul {
    display: flex;
    justify-content: flex-end;
    margin-left: auto;

    li {
      margin: 0;
      margin-left: 1.5rem;
      font-style: italic;
    }

    li a {
      position: relative;
    }
  }

  & ul li a::after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${themeGet('colors.secondary')};
    content: '';
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    transform: translateY(0.3rem);
  }

  & ul li a:hover::after,
  & ul li a:focus::after,
  & ul li a[aria-current='true']::after {
    opacity: 0.95;
    transform: translateY(0rem);
  }
`;

// Styles for the mobile View of the navigation
const MobileNavToggler = styled.div`
  ${basicNav};

  ${media.small`
    display: none;
  `};

  & li {
    margin: 0;
  }

  & li:last-child {
    margin-left: auto;
    font-weight: 600;
    cursor: pointer;
  }

  & li img {
    display: block;
    margin: auto;
  }
`;

const homeRoute = { to: '/', children: 'Home' };
const ROUTES = [
  { to: '/tours', children: 'Tours' },
  // { to: '/rooms', children: 'Rooms' },
  { to: '/gallery', children: 'Gallery' },
  { to: '/team', children: 'Team' },
  { to: '/map', children: 'Map' }
];

class Navigation extends Component {
  state = {
    mobileActive: false
  };

  toggleNav = () => {
    this.setState(({ mobileActive }) => ({ mobileActive: !mobileActive }));
  };

  render() {
    return (
      <nav>
        <Headroom>
          <FullNav>
            <Container>
              <HomeLink to="/">SDT</HomeLink>
              <ul>
                {ROUTES.map(({ to, children }) => (
                  <li key={to}>
                    <Link to={to} activeClassName="active">
                      {children}
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>
          </FullNav>
          <MobileNavToggler>
            <Container>
              <HomeLink to="/">SDT</HomeLink>
              <ButtonPlain
                type="button"
                onClick={this.toggleNav}
                onKeyPress={this.toggleNav}
              >
                {feather({ name: 'menu', measureArray: [36, 36] })}
              </ButtonPlain>
            </Container>
          </MobileNavToggler>
        </Headroom>
        {this.state.mobileActive && (
          <MobileNav toggleNav={this.toggleNav}>
            <ul>
              {[homeRoute, ...ROUTES].map(({ to, children }) => (
                <li key={to}>
                  <div
                    role="button"
                    tabIndex="0"
                    onClick={this.toggleNav}
                    onKeyPress={this.toggleNav}
                  >
                    <Link to={to}>{children}</Link>
                  </div>
                </li>
              ))}
            </ul>
          </MobileNav>
        )}
      </nav>
    );
  }
}

export default Navigation;
