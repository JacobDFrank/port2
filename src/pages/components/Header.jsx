import React from 'react';
import Link from 'gatsby-link'

class Header extends React.Component {

  render() {
    return (<header>
      <Link to="/" className="faux-link">Jacob Frank</Link>
      {/* <a href=.#aboutme">About</a> */}
    </header>);
  }
}

export default Header;
