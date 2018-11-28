/* @flow */
import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/scss/main.scss';

type Props = {
  children: any,
  location: any
};

const Layout = (props: Props) => {
  const { children, location } = props;
  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    );
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    );
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <><Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang='en' />
        </Helmet>{content}</>
      )}
    />
  );
};

export default Layout;
