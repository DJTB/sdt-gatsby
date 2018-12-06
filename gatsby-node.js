exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            // tries to access window during build stage and blows up
            test: /react-image-lightbox/,
            loader: 'null-loader'
          }
        ]
      }
    });
  }
};
