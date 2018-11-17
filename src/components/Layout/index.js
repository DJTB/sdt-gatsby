import styled from 'styled-components';
import { Flex as GridFlex, Box as GridBox } from '@rebass/grid';
import { themeGet } from 'styled-system';
import { fluidType } from 'utils/typography';
import media from 'utils/media';
import PageWrapper from './Page';

export const Page = PageWrapper;
export const Flex = GridFlex;
export const Box = GridBox;

export const Container = styled(GridBox)`
  max-width: 1200px;
`;
Container.defaultProps = {
  mx: 'auto',
  px: '1rem'
};

export const PageHeading = styled.h1`
  ${themeGet('fontStyles.brand')};
  ${fluidType(36, 64, 400, 1600)};
  text-shadow: ${themeGet('shadows.text.large')};
  text-align: center;
  line-height: 1;
  margin: 1.5rem auto;

  ${media.large`
    margin: 2rem auto;
  `};
`;
