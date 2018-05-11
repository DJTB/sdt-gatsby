/* eslint-disable react/prop-types, no-return-assign, no-param-reassign, no-sequences */
import React from 'react';
import Helmet from 'react-helmet';
import Img from 'components/Img';
import { Container, PageHeading, Flex, Box } from 'components/Layout';

export default props => {
  const team = props.data.allTeamJson.edges;
  const imageSizesByName = props.data.allFile.edges.reduce(
    (o, { node }) => ((o[node.name] = node.childImageSharp.sizes), o),
    {}
  );

  return (
    <Container>
      <Helmet>
        <title>Team</title>
        <meta
          name="description"
          content="Something Different Tours employs friendly & knowledgeable guides that grew up in the greater Chiang Mai area."
        />
      </Helmet>
      <PageHeading>Meet the Team</PageHeading>
      <Flex flexWrap="wrap" justifyContent="center" mx="-1rem">
        {team.map(({ node: person }) => (
          <Box
            m="1rem 2rem"
            flex={['1 1 100%', '1 1 250px']}
            key={person.name}
            style={{ textAlign: 'center' }}
          >
            <Img
              style={{
                margin: '0 auto 1rem',
                maxWidth: '180px',
                borderRadius: '50%',
                boxShadow: '0 4px 6px 0 rgba(25,25,25,0.7)'
              }}
              sizes={imageSizesByName[person.name.toLowerCase()]}
              alt={`Profile Photo of ${person.name}`}
            />
            <h2>{person.name}</h2>
            <Box mt="-0.75rem">
              <em>{person.nickname}</em>
            </Box>
            <Box pt={3} pb={2}>
              {person.content}
            </Box>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export const query = graphql`
  query TeamQuery {
    allTeamJson {
      edges {
        node {
          name
          nickname
          content
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "team" } }) {
      edges {
        node {
          name
          childImageSharp {
            sizes(maxWidth: 225) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
