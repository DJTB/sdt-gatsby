exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      // tries to access window during build stage and blows up
      test: /react-image-lightbox/,
      loader: 'null-loader'
    });
  }
};
