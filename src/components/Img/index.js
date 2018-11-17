/* eslint-disable react/prop-types */

// Wrapper to deal with IE11 support
// https://github.com/gatsbyjs/gatsby/issues/4021
import React from 'react';
import Image from 'gatsby-image';

const Img = props => {
  // Construct font-family declaration for object-fit-images
  const objFit = props.objFit ? props.objFit : 'cover';
  const objPosition = props.objPosition ? props.objPosition : '50% 50%';
  const fontFamily = `"object-fit: ${objFit}; object-position: ${objPosition}"`;

  const polyfillStyles = {
    objectFit: objFit,
    objectPosition: objPosition,
    fontFamily
  };

  return (
    <Image
      fluid={props.fluid}
      fixed={props.fixed}
      alt={props.alt}
      className={props.className}
      style={props.style}
      imgStyle={{ borderRadius: '3px', ...props.imgStyle, ...polyfillStyles }}
      position={props.position || `relative`}
      backgroundColor={props.backgroundColor || `transparent`}
      Tag={props.Tag || `div`}
    />
  );
};

export default Img;
