import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import feather from 'utils/feather';

import { ButtonPlain } from 'components/Buttons';

// Styles for the overlay which pops up, when the menu is clicked
const MobileNavView = styled.nav`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
  z-index: 9999;
  background-color: ${themeGet('colors.black')};
  color: ${themeGet('colors.brand')};

  & ul {
    list-style-type: none;
    padding: 0;
    margin: 3rem 0 0 0;
    height: 100%;
    text-align: center;
    font-size: 2rem;

    & div {
      text-align: center;
    }
  }

  & ul li {
    margin-top: 2rem;
  }

  & div {
    font-weight: 600;
    text-align: right;
  }
`;

const CloseButton = styled(ButtonPlain)`
  position: absolute;
  top: 0.5rem;
  right: 0.9rem;
`;

class MobileNav extends Component {
  componentWillMount() {
    this.mobileContainer = document.createElement('div');
    document.body.appendChild(this.mobileContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.mobileContainer);
  }

  render() {
    const { children, toggleNav } = this.props;

    return ReactDOM.createPortal(
      <MobileNavView>
        <CloseButton type="button" onClick={toggleNav}>
          {feather({ name: 'x', measureArray: [38, 38] })}
        </CloseButton>
        {children}
      </MobileNavView>,
      this.mobileContainer
    );
  }
}

MobileNav.propTypes = {
  toggleNav: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default MobileNav;
