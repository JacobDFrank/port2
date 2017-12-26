import React from 'react';
import Link from 'gatsby-link';

const Header = function statelessFunctionComponentClass() {
  return (<header>
    <Link to="/" className="faux-link">Jacob Frank</Link>
    {/* <a href=.#aboutme">About</a> */}
  </header>);
};

export default Header;
