import styled, { css } from 'styled-components';
import colors from '../../utils/colors';

const buttonReset = css`
  font-family: system-ui, sans-serif;
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
  border: 2px solid ${colors.secondary};
  transition: all 0.3s ease-in-out;
  padding: 0.5rem 1.25rem;
`;

export const ButtonPlain = styled.button`
  ${buttonReset};
`;

export const ButtonPrimary = styled.button`
  ${buttonBasic};
  background-color: ${colors.secondary};
  color: ${colors.primary};

  &:hover,
  &:focus {
    background-color: transparent;
    color: ${colors.secondary};
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const ButtonSecondary = styled.button`
  ${buttonBasic};
  background-color: transparent;
  color: ${colors.secondary};

  &:hover,
  &:focus {
    background-color: ${colors.secondary};
    color: ${colors.primary};
  }

  &:active {
    transform: scale(0.99);
  }
`;
