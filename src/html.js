/* eslint-disable */
import React from 'react';
import favicon from './assets/images/favicon.ico';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }
    return (
      <html lang="en" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
          {css}
          <script
            async
            src="https://www.jscache.com/wejs?wtype=cdsratingsonlynarrow&amp;uniq=602&amp;locationId=2103752&amp;lang=en_US&amp;border=false&amp;display_version=2"
          />
          <script
            async
            src="https://www.jscache.com/wejs?wtype=certificateOfExcellence&amp;uniq=796&amp;locationId=2103752&amp;lang=en_US&amp;year=2017&amp;display_version=2"
          />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
};
