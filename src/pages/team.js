/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { Flex } from 'grid-styled';
import { Box } from '../components/Layout';
import getYamlNode from '../utils/getYamlNode';

const Team = props => {
  const data = getYamlNode('team')(props.data);
  return (
    <Flex flexDirection="column" justifyContent="center">
      <h1 style={{ textAlign: 'center' }}>Meet the Team</h1>
      <Flex flexWrap="wrap" justifyContent="center">
        {data.map(person => (
          <Box m="1rem" width={1 / 3} key={person.name}>
            <div>{person.name}</div>
            <div>{person.nickname}</div>
            <div>{person.hometown}</div>
            <div>{person.content}</div>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default Team;

export const query = graphql`
  query TeamQuery {
    allDataYaml {
      edges {
        node {
          team {
            name
            nickname
            hometown
            content
          }
        }
      }
    }
  }
`;
