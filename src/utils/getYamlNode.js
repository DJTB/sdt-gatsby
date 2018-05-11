export default (key = '') => (data = {}) =>
  (
    data.allDataYaml.edges.find(({ node }) => node[key] != null) || {
      node: {}
    }
  ).node[key];
