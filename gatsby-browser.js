/* eslint-disable global-require */
exports.onClientEntry = () => {
  // NOTE: Don't polyfill Promise here (Gatsby already includes a Promise polyfill)

  // IntersectionObserver polyfill for gatsby-image (Safari, IE)
  // https://github.com/gatsbyjs/gatsby/issues/4021
  if (typeof window.IntersectionObserver === 'undefined') {
    require('intersection-observer');
  }

  // Object-fit/Object-position polyfill for gatsby-image (IE)
  // https://github.com/gatsbyjs/gatsby/issues/4021
  const testImg = document.createElement('img');
  if (
    typeof testImg.style.objectFit === 'undefined' ||
    typeof testImg.style.objectPosition === 'undefined'
  ) {
    require('object-fit-images')();
  }
};
