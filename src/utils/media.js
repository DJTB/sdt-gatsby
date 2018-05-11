import { css } from 'styled-components';

const sizes = {
  large: 1024,
  mid: 832,
  small: 640
};

// Iterate through the sizes and create a media template
// prettier-ignore
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media;
