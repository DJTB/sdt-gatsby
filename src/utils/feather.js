/* eslint-disable */
import React from 'react';
import feather from 'feather-icons';

export default ({
  name,
  is = 'div',
  measureArray = [30, 30],
  style = {}
} = {}) => {
  return React.createElement(is, {
    style,
    dangerouslySetInnerHTML: {
      __html: feather.icons[name].toSvg({
        width: measureArray[0],
        height: measureArray[1]
      })
    }
  });
};
