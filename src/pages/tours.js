import React, { Fragment } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { themeGet } from '@styled-system/theme-get';
import slugify from 'slugify';

import { fontFamilies } from 'utils/typography';
import feather from 'utils/feather';

import { Page, PageHeading, Container, Flex, Box } from 'components/Layout';
import Img from 'components/Img';

const BulletListWrapper = styled(Box)`
  ul {
    list-style-type: none;
    font-size: 0.95em;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
  }

  span {
    display: inline-flex;
  }

  .feather {
    margin-right: 0.5rem;
    color: ${({ included, theme }) =>
      theme.colors[included ? 'green' : 'red'][3]};
  }
`;

const Program = styled.section`
  &:last-of-type {
    margin-bottom: 2rem;
  }

  & p {
    max-width: 960px;
  }

  & p:last-child {
    margin-bottom: 0;
  }
`;

const BulletList = ({ included, items }) => {
  const title = `Price ${included ? 'in' : 'ex'}cludes`;

  return (
    <BulletListWrapper included={included}>
      <SubHeading>{title}</SubHeading>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {feather({
              is: 'span',
              name: included ? 'check-circle' : 'x-circle',
              measureArray: included ? [20, 20] : [22, 22]
            })}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </BulletListWrapper>
  );
};

const Price = styled.span`
  font-size: 0.9rem;
  ${themeGet('fontStyles.price')};
`;

const Heading = styled.h1`
  margin-top: 3rem;
`;

const SubHeading = styled.h3`
  margin-bottom: 1rem;
`;

const SubSection = styled.div`
  &:not(:first-child) {
    margin-top: 2rem;
  }

  & p,
  & li {
    font-size: 0.9em;
  }
`;

const TitleLink = styled(Box).attrs({
  color: 'yellow.1',
  width: [1, 1 / 2, 1 / 2, 1 / 3]
})`
  &:hover {
    color: ${themeGet('colors.gray.1')};
  }

  a {
    display: block;
    font-family: ${fontFamilies.serif.join(', ')};
    padding: 0.5rem 1rem;
  }
`;

const Pricing = ({ cost }) => {
  const multiPricing = cost.length > 1;

  return (
    <Fragment>
      <SubHeading>Price</SubHeading>
      {multiPricing ? (
        <ul>
          {cost.map((amount, i) => {
            const people = ['2 people: ', '3 people: ', '4 or more: '][i];
            return (
              <li key={`price-${i}`}>
                {people}
                <Price>{amount} baht </Price>per person
              </li>
            );
          })}
        </ul>
      ) : (
        <p>
          <Price>{cost[0]} baht </Price>per person
        </p>
      )}
    </Fragment>
  );
};

const ToursPage = props => {
  const tours = props.data.tours.edges[0].node;

  return (
    <Page>
      <Container>
        <Helmet>
          <title>Tours</title>
          <meta
            name="description"
            content="We provide tours that include (but are not limited to) Off-Road Motorbiking, Jungle Trekking, Waterfalls Swimming, Hot Springs, Elephants, Bamboo Rafting, Hilltribe Villages, Doi Suthep Temple, and Doi Inthanon National Park."
          />
        </Helmet>
        <PageHeading>Tours & Trekking</PageHeading>
        <Flex mx="-1rem" flexWrap="wrap">
          {tours.programs.map(({ id, title }) => (
            <TitleLink key={id}>
              <a href={`#${slugify(title)}`}>{title}</a>
            </TitleLink>
          ))}
        </Flex>
        {tours.programs.map(({ id, title, content, transport, price }) => {
          const image = props.data[`${id}Img`];

          return (
            <Program key={id}>
              <Heading id={slugify(title)}>{title}</Heading>
              <Flex flexWrap="wrap">
                <Box order={1} width={1} my="1rem">
                  {content.map((text, index) => (
                    <p key={`c${index}`}>{text}</p>
                  ))}
                </Box>
                {(transport || price || image) && (
                  <Fragment>
                    <Box
                      order={2}
                      mt="1rem"
                      pl={image && [0, 0, '3rem']}
                      width={image && [1, 1, 1 / 2]}
                    >
                      {transport && (
                        <SubSection>
                          <SubHeading>Transport options</SubHeading>
                          <Box as="ul" mb={0}>
                            {transport.map((text, index) => (
                              <li key={`n${index}`}>{text}</li>
                            ))}
                          </Box>
                        </SubSection>
                      )}
                      {price && (
                        <Fragment>
                          <SubSection>
                            <Pricing cost={price.cost} />
                          </SubSection>
                          <SubSection>
                            <BulletList included items={price.includes} />
                          </SubSection>
                        </Fragment>
                      )}
                    </Box>
                    {image && (
                      <Box py="1rem" order={[0, 0, 1]} width={[1, 1, '500px']}>
                        <Img fluid={image.childImageSharp.fluid} />
                      </Box>
                    )}
                  </Fragment>
                )}
              </Flex>
            </Program>
          );
        })}
      </Container>
    </Page>
  );
};

export const query = graphql`
  query ToursQuery {
    tours: allToursJson {
      edges {
        node {
          programs {
            id
            title
            content
            transport
            price {
              cost
              includes
            }
          }
        }
      }
    }
  }
`;

/* 
 M1Img: file(base: { eq: "M1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 550, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    M2Img: file(base: { eq: "M2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 550, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    M6Img: file(base: { eq: "M6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 550, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    M7Img: file(base: { eq: "M7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 550, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    M8Img: file(base: { eq: "M8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 550, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    T1Img: file(base: { eq: "T1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 550, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    T2Img: file(base: { eq: "T2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 550, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    customImg: file(base: { eq: "honda-crf-205-03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 550, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
*/

export default ToursPage;
