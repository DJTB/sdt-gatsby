import styled, { css } from 'styled-components';
import { themeGet } from 'styled-system';

const buttonReset = css`
  display: inline-flex;
  font-family: ${themeGet('fonts.sans')};
  font-size: 1rem;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  border: none;
  padding: 0;
  color: inherit;
  background-color: rgba(0, 0, 0, 0);
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
`;

const buttonBasic = css`
  ${buttonReset};
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  border-radius: 5px;
  border: 2px solid ${themeGet('colors.secondary')};
  transition: all 0.3s ease-in-out;
  padding: 0.5rem 1.25rem;
`;

export const ButtonPlain = styled.button`
  ${buttonReset};
`;

export const ButtonPrimary = styled.button`
  ${buttonBasic};
  background-color: ${themeGet('colors.secondary')};
  color: #fff; /* not theme white since we need pure white for better contrast */

  &:hover,
  &:focus {
    background-color: transparent;
    color: ${themeGet('colors.secondary')};
  }

  &:active {
    transform: scale(0.99);
    transform: translateY(1px);
  }
`;

export const ButtonSecondary = styled.button`
  ${buttonBasic};
  background-color: transparent;
  color: ${themeGet('colors.secondary')};

  &:hover,
  &:focus {
    background-color: ${themeGet('colors.secondary')};
    color: ${themeGet('colors.white')};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ButtonCta = styled.button`
  ${buttonBasic};
  position: relative;
  transition: background-color 0.4s, color 0.4s;
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  color: ${themeGet('colors.secondary')};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${themeGet('colors.secondary')};
    z-index: -1;
    opacity: 0;
    transform: scale3d(0.7, 1, 1);
    transition: transform 0.4s, opacity 0.4s;
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  }

  &:hover {
    color: #000; /* not theme black since we need pure black for better contrast */
  }

  &:hover::before {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
