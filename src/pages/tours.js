import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { themeGet } from 'styled-system';
import { Container, PageHeading, Flex } from 'components/Layout';
import feather from 'utils/feather';
import media from 'utils/media';
import Img from 'components/Img';

const Price = styled.p`
  ${themeGet('fontStyles.price')};
`;

const Intro = styled.div`
  margin: 3rem auto;
  max-width: 700px;
  font-style: italic;
  text-align: center;
`;

const BulletListWrapper = styled.div`
  margin: 1rem;

  h3 {
    color: inherit;
    font-family: ${themeGet('fonts.sans')};
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 0;
  }

  ul {
    margin: 1rem 0;
    padding: 0;
    list-style-type: none;
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

const ProgramImg = styled.div`
  display: block;
  width: 320px;
  order: -1;

  ${media.mid`
    order: 1;
    width: 550px;
  `};

  & .gatsby-image-outer-wrapper,
  & .gatsby-image-wrapper {
    height: 100%;
  }
`;

const ProgramContent = styled.div`
  max-width: 600px;

  ${media.mid`
    flex: 1 0 500px;
  `};
`;

const Program = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 0 -0.75rem 2rem;

  & > * {
    margin: 0.75rem;
  }

  & p:last-child {
    margin-bottom: 0;
  }

  ${media.mid`
    flex-flow: row wrap;
    align-items: flex-start;
    margin: 0 -1rem 2rem;
  `};
`;

const ProgramTitle = styled.h2`
  max-width: 600px;
  margin: 2.75rem auto 0.25rem;
`;

const BulletList = ({ included, items }) => (
  <BulletListWrapper included={included}>
    <h3>Price {`${included ? 'in' : 'ex'}cludes:`}</h3>
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

export default props => {
  const data = props.data.tours.edges[0].node;
  return (
    <Container>
      <Helmet>
        <title>Tours</title>
        <meta
          name="description"
          content="We provide tours that include (but are not limited to) Off-Road Motorbiking, Jungle Trekking, Waterfalls Swimming, Hot Springs, Elephants, Bamboo Rafting, Hilltribe Villages, Doi Suthep Temple, and Doi Inthanon National Park."
        />
      </Helmet>
      <PageHeading>Tours & Trekking</PageHeading>
      <Intro>
        <p>{data.intro}</p>
      </Intro>
      <div>
        {data.programs.map(({ id, title, content, notes, price }) => (
          <React.Fragment key={id}>
            <ProgramTitle>{title}</ProgramTitle>
            <Program>
              <ProgramContent>
                {content.map((text, index) => <p key={`c${index}`}>{text}</p>)}
                {notes.map((text, index) => <p key={`n${index}`}>{text}</p>)}
                {price && <Price>{price} baht per person per day</Price>}
              </ProgramContent>
              <ProgramImg>
                <Img sizes={props.data[`${id}Img`].childImageSharp.sizes} />
              </ProgramImg>
            </Program>
          </React.Fragment>
        ))}
      </div>
      <Flex flexWrap="wrap" mx="-1rem" justifyContent="center">
        <BulletList included items={data.priceIncludes} />
        <BulletList included={false} items={data.priceExcludes} />
      </Flex>
    </Container>
  );
};

export const query = graphql`
  query ToursQuery {
    tours: allToursJson {
      edges {
        node {
          intro
          priceIncludes
          priceExcludes
          programs {
            id
            title
            content
            notes
            price
          }
        }
      }
    }
    customImg: file(base: { eq: "honda-crf-205-03.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 550, quality: 90) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    placeholderImg: file(base: { eq: "1day-falls.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 550, quality: 90) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
