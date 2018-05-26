import React from 'react';
import GatsbyLink from 'gatsby-link';

const Link = ({ onClick, href, to, children, ...props }) => {
  if (to) {
    return (
      <GatsbyLink to={to} {...props}>
        {children}
      </GatsbyLink>
    );
  }

  if (onClick) {
    return (
      <a
        href=""
        onClick={e => {
          e.preventDefault();
          onClick();
        }}
        {...props}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" {...props}>
        {children}
      </a>
    );
  }

  throw Error('Invalid Link: specify "to", "onClick", or "href"');
};

export default Link;
