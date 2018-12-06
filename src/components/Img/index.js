import React from 'react';
import Image from 'gatsby-image';

// Wrapper to deal with IE11 support
// https://github.com/gatsbyjs/gatsby/issues/4021
const Img = ({
  objectFit = `cover`,
  objectPosition = `50% 50%`,
  rounded = true,
  imgStyle = {},
  ...props
}) => (
  <Image
    {...props}
    imgStyle={{
      borderRadius: rounded ? '3px' : 0,
      ...imgStyle,
      objectFit,
      objectPosition,
      fontFamily: `"object-fit: ${objectFit}; object-position: ${objectPosition}"`
    }}
  />
);

export default Img;
