/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import Img from 'gatsby-image';
import { css } from 'styled-components';
import { Box } from '../components/Layout';
import colors from '../utils/colors';

const imgStyle = css`
  border-radius: 5px;
`;

const Rooms = ({ data }) => {
  const { imageSharp } = data;
  return (
    <Box
      width={[1, 1, 1 / 2]}
      m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
      px={[3, 3, 0]}
      color={colors.secondary}
    >
      <h1>Rooms & Rates</h1>
      <Img className={imgStyle} alt="Picture of X" sizes={imageSharp.sizes} />
      <section>
        <h1>Our Home</h1>
        <p>
          Located just outside the old city centre, and only a short walk to the
          Saturday and Sunday night markets. We welcome you to come stay with us
          at our Thai house. All rooms have mosquito nets, individual fans and a
          private locker for each person. Free coffee, tea, and drinking water
          are available in the common area; alcohol and soft-drinks can be
          purchased from the staff bar.
        </p>
      </section>
      <section>
        <h1>Dorm Room</h1>
        <p>
          Four person dorm with single beds. Shared bathroom with hot shower.
          Only 120 baht per person.
        </p>
      </section>

      <section>
        <h1>Private Rooms</h1>
        <p>
          Double or twin bed private room. Ensuite bathroom with hot shower.
          Only 300 baht per room.
        </p>
      </section>
    </Box>
  );
};

export const pageQuery = graphql`
  query AboutQuery {
    imageSharp(id: { regex: "/about/" }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export default Rooms;
