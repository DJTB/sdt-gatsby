import { theme as baseTheme } from 'components/Layout';
import { mapValues } from 'lodash';
import colors from './colors';
import { fontFamilies, fontStyles } from './typography';

export const shadows = {
  text: {
    small: '0 4px 5px rgba(25, 25, 25, 0.7)',
    large: '0 8px 8px rgba(25, 25, 25, 0.7)'
  },
  box: {
    small: '0 4px 6px 0 rgba(25, 25, 25, 0.7)',
    large: '0 6px 8px 0 rgba(25, 25, 25, 0.7)'
  }
};

export const radii = '5px';

export default {
  ...baseTheme,
  colors,
  fonts: mapValues(fontFamilies, arr => arr.join(',')),
  fontStyles,
  shadows,
  radii
};
