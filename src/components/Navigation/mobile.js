import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/colors';

// Styles for the overlay which pops up, when the menu is clicked
const MobileNavView = styled.nav`
  position: fixed;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  display: block;
  padding: 1rem;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
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

const CloseButton = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 1rem;
  cursor: pointer;
`;

class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.mobileContainer = document.createElement('div');
    document.body.appendChild(this.mobileContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.mobileContainer);
  }

  render() {
    return ReactDOM.createPortal(
      <MobileNavView>
        <CloseButton
          onClick={this.props.toggleNav}
          onKeyPress={this.props.toggleNav}
          role="button"
          tabIndex="0"
        >
          X
        </CloseButton>
        {this.props.children}
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
