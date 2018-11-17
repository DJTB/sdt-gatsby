exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      loaders: {
        // tries to access window during build stage and blows up
        test: /react-image-lightbox/,
        loader: 'null-loader'
      }
    });
  }
};
