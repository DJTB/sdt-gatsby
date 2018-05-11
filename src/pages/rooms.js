import React from 'react';

import Helmet from 'react-helmet';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { Container, Flex, Box, PageHeading } from 'components/Layout';
import Img from 'components/Img';
import Gallery from 'components/Gallery';
import media from 'utils/media';
import { ButtonCta } from 'components/Buttons';

const Intro = styled.div`
  max-width: 700px;
  margin: 1rem auto 3rem;
  text-align: center;
`;

const RoomDetails = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 -1rem;

  & > div {
    flex: 0 1 550px;
    margin: 0.75rem 1rem;
    text-align: center;
  }

  & p {
    margin-top: -0.25rem;
    padding: 0 0.5rem;
  }
`;

const Price = styled.span`
  ${themeGet('fontStyles.price')};
`;

const CtaButton = ButtonCta.withComponent('a');

const Rooms = ({ data }) => (
  <Container>
    <Helmet>
      <title>Rooms</title>
      <meta
        name="description"
        content="We offer affordable, local accommodation at our home in Chiang Mai, Thailand"
      />
    </Helmet>
    <PageHeading>Rooms & Rates</PageHeading>
    <Intro>
      <Img alt="Our Home" sizes={data.home.childImageSharp.sizes} />
      <Box my="2rem">
        <h2>Our Home</h2>
        <p>
          Located just outside the old city centre, and only a short walk to the
          Saturday and Sunday night markets. We welcome you to come stay with us
          at our Thai house. All rooms have mosquito nets, individual fans and a
          private locker for each person. Free coffee, tea, and drinking water
          are available in the common area; alcohol and soft-drinks can be
          purchased from the staff bar.
        </p>
      </Box>
    </Intro>

    <RoomDetails>
      <div>
        <Img alt="Dorm Room" sizes={data.dorm.childImageSharp.sizes} />
        <Box mt="2rem">
          <h2>Dorm Room</h2>
          <p>
            Single bed.
            <br />
            Shared bathroom with hot shower.
            <br />
            <Price>120 baht per person.</Price>
          </p>
        </Box>
      </div>

      <div>
        <Img alt="Private Room" sizes={data.twin.childImageSharp.sizes} />
        <Box mt="2rem">
          <h2>Private Rooms</h2>
          <p>
            Double or twin bed private room.
            <br />
            Ensuite bathroom with hot shower.
            <br />
            <Price>300 baht per room.</Price>
          </p>
        </Box>
      </div>
    </RoomDetails>

    <Flex justifyContent="center" mb={['3rem', '2.5rem', '1.5rem']}>
      <CtaButton
        href="mailto:sdtchiangmai@hotmail.com?subject=SDT%20Site%20Room%20Booking"
        target="_blank"
        rel="noopener noreferrer external"
      >
        Reserve a room
      </CtaButton>
    </Flex>

    <h2>Gallery</h2>
    <Gallery
      data={data.gallery.edges.map(({ node }) => node.childImageSharp.sizes)}
    />
  </Container>
);

export const pageQuery = graphql`
  query AboutQuery {
    home: file(base: { eq: "home.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 700, quality: 90) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    dorm: file(base: { eq: "dorm.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 550, quality: 90) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    twin: file(base: { eq: "twin.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 550, quality: 90) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    gallery: allFile(filter: { relativeDirectory: { eq: "rooms/gallery" } }) {
      edges {
        node {
          name
          childImageSharp {
            sizes(maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;

export default Rooms;
