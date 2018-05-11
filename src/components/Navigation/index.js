import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled, { css } from 'styled-components';
import colors from '../../utils/colors';
import MobileNav from './mobile';
import media from '../../utils/media';
import { ButtonPlain } from '../../components/Buttons';
import { Box } from '../../components/Layout';

const basicNav = css`
  display: flex;
  align-items: center;
  color: ${colors.primary};
  background-color: ${colors.secondary};
  margin: 0;
  width: 100%;
  list-style-type: none;
  box-shadow: 0px 1px 10px 0px ${colors.gray[2]};
  padding: 1rem;

  & ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

const FullNav = styled(Box)`
  ${basicNav};
  display: none;

  & li {
    margin: 0;
  }

  & li img {
    display: inline-block;
    vertical-align: middle;
  }

  & ul {
    display: flex;
    justify-content: flex-end;
    margin-left: auto;

    & li {
      margin-left: 1.25rem;
    }
  }

  ${media.mid`
    display: flex;
  `};
`;

// Styles for the mobile View of the navigation
const MobileNavToggler = styled(Box)`
  ${basicNav};
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

  ${media.mid`
    display: none;
  `};
`;

const ROUTES = [
  { to: '/tours', children: 'Tours' },
  { to: '/rooms', children: 'Rooms' },
  { to: '/gallery', children: 'Gallery' },
  { to: '/team', children: 'Team' },
  { to: '/map', children: 'Find Us' }
];

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileActive: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    if (this.state.mobileActive) {
      this.setState({ mobileActive: false });
    } else {
      this.setState({ mobileActive: true });
    }
  }

  render() {
    return (
      <nav>
        <FullNav width="100%" px={[3, 3, 4]} routes={ROUTES}>
          <Link to="/">SDT</Link>
          <ul>
            {ROUTES.map(({ to, children }) => (
              <li tabIndex={this.state.mobileActive ? '-1' : '0'} key={to}>
                <Link to={to}>{children}</Link>
              </li>
            ))}
          </ul>
        </FullNav>
        <MobileNavToggler width="100%" px={[3, 3, 4]}>
          <Link to="/">SDT</Link>
          <ul>
            <li>
              <ButtonPlain
                type="button"
                onClick={this.toggleNav}
                onKeyPress={this.toggleNav}
              >
                MENU
              </ButtonPlain>
            </li>
          </ul>
        </MobileNavToggler>
        {this.state.mobileActive && (
          <MobileNav toggleNav={this.toggleNav}>
            <ul>
              {ROUTES.map(({ to, children }) => (
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
