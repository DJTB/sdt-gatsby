import Typography from 'typography';
import { css } from 'styled-components';
import colors from './colors';

/**
 * Returns fallback, and media queried calc() font-sizes for responsive sizing
 * based on https://madebymike.com.au/writing/precise-control-responsive-typography/
 * @param  {Number} [minFont=16] Minimum font-size (px)
 * @param  {Number} [maxFont=24] Maximum font-size (px)
 * @param  {Number} [minWidth=600] Minimum viewport size to begin scaling (px)
 * @param  {Number} [maxWidth=1280] Maximum viewport size to halt scaling (px)
 * @return {String} CSS font-size rules
 */
const fluidType = (
  minFont = 16,
  maxFont = 24,
  minWidth = 600,
  maxWidth = 1280
) => css`
  font-size: ${minFont}px;
  @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
    font-size: calc(
      ${minFont}px + (${maxFont} - ${minFont}) *
        ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
    );
  }
  @media (min-width: ${maxWidth}px) {
    font-size: ${maxFont}px;
  }
`;

const systemStacks = {
  sans: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Avenir Next',
    'Avenir',
    'Helvetica Neue',
    'Helvetica',
    'Ubuntu',
    'Roboto',
    'Noto',
    'Segoe Ui',
    'Arial',
    'sans-serif'
  ],
  serif: [
    'Apple Garamond',
    'Baskerville',
    'Times New Roman',
    'Droid Serif',
    'Times',
    'Source Serif Pro',
    'serif'
  ]
};

export const fontFamilies = {
  sans: ['Cabin', ...systemStacks.sans],
  serif: ['Kaushan Script', systemStacks.serif],
  brand: ['Capture It', ...systemStacks.sans]
};

export const fontStyles = {
  brand: css`
    font-family: ${fontFamilies.brand.join(',')};
    text-transform: uppercase;
    letter-spacing: 0.02em;
    font-weight: 400; /* font is already strong - and has no bold weight */
    color: ${colors.brand};
  `,
  price: css`
    color: ${colors.yellow[2]};
    font-style: italic;
  `
};

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  scaleRatio: 2.2,
  googleFonts: [
    {
      name: 'Cabin',
      styles: ['400', '400i', '600', '700']
    },
    {
      name: 'Kaushan Script',
      styles: ['400']
    }
  ],
  headerFontFamily: fontFamilies.serif,
  bodyFontFamily: fontFamilies.sans,
  headerWeight: 400, // Kaushan has no heavy weights
  headerGrayHue: 'warm',
  bodyGrayHue: 'slate',
  paragraphSpacing: 0.9
});

const { rhythm, scale } = typography;

export { fluidType, rhythm, scale, typography as default };
